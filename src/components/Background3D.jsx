import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function Background3D({ hoveredSide = 'none' }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const hoveredSideRef = useRef(hoveredSide);

  // Keep ref synchronized with prop to avoid rebuilding Three.js scene
  useEffect(() => {
    hoveredSideRef.current = hoveredSide;
  }, [hoveredSide]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Scene Setup
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scene = new THREE.Scene();
    
    // Positioned slightly further back (265) to prevent overlapping stats/quotes in center
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 265;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Build Threat Globe Particles & Connections
    const particleCount = 180;
    const sphereRadius = 90; // Slightly smaller to fit the layout perfectly
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const redColor = new THREE.Color('#ef4444');
    const blueColor = new THREE.Color('#06b6d4');

    // Distribute particles on a sphere surface
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
      const y = sphereRadius * Math.sin(phi) * Math.sin(theta);
      const z = sphereRadius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const particleColor = x < 0 ? redColor : blueColor;
      colors[i * 3] = particleColor.r;
      colors[i * 3 + 1] = particleColor.g;
      colors[i * 3 + 2] = particleColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const createCircleTexture = () => {
      const size = 16;
      const canvasTexture = document.createElement('canvas');
      canvasTexture.width = size;
      canvasTexture.height = size;
      const ctx = canvasTexture.getContext('2d');

      const grad = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);

      return new THREE.CanvasTexture(canvasTexture);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 4.2,
      map: createCircleTexture(),
      transparent: true,
      depthWrite: false,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 3. Build Connection Segments
    const linePositions = [];
    const lineColors = [];

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 42) {
          linePositions.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
          linePositions.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);

          const c1 = positions[i * 3] < 0 ? redColor : blueColor;
          const c2 = positions[j * 3] < 0 ? redColor : blueColor;

          lineColors.push(c1.r, c1.g, c1.b);
          lineColors.push(c2.r, c2.g, c2.b);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // 4. Parallax & Resize handlers
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (container) {
        const xOffset = (window.innerWidth / 2 - e.clientX) / 85;
        const yOffset = (window.innerHeight / 2 - e.clientY) / 85;
        container.style.transform = `translate(${xOffset}px, ${yOffset}px) scale(1.025)`;
      }

      mouseX = (e.clientX - window.innerWidth / 2) / 110;
      mouseY = (e.clientY - window.innerHeight / 2) / 110;
    };

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // 5. Animation loop
    let animationFrameId;
    const animate = () => {
      particles.rotation.y += 0.0016;
      lines.rotation.y += 0.0016;

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 10;
      camera.position.y = -targetY * 10;
      camera.lookAt(scene.position);

      // --- DYNAMIC WEBGL COLOR MORPHING ---
      const colorAttr = particleGeometry.attributes.color;
      const colorsArr = colorAttr.array;

      const lineColorAttr = lineGeometry.attributes.color;
      const lineColorsArr = lineColorAttr.array;

      const currentSide = hoveredSideRef.current;

      // Interpolate particles color target
      for (let i = 0; i < particleCount; i++) {
        const px = positions[i * 3];

        let targetR = px < 0 ? redColor.r : blueColor.r;
        let targetG = px < 0 ? redColor.g : blueColor.g;
        let targetB = px < 0 ? redColor.b : blueColor.b;

        if (currentSide === 'offensive') {
          targetR = redColor.r;
          targetG = redColor.g;
          targetB = redColor.b;
        } else if (currentSide === 'defensive') {
          targetR = blueColor.r;
          targetG = blueColor.g;
          targetB = blueColor.b;
        }

        colorsArr[i * 3] += (targetR - colorsArr[i * 3]) * 0.08;
        colorsArr[i * 3 + 1] += (targetG - colorsArr[i * 3 + 1]) * 0.08;
        colorsArr[i * 3 + 2] += (targetB - colorsArr[i * 3 + 2]) * 0.08;
      }
      colorAttr.needsUpdate = true;

      // Interpolate lines color target
      const lineCount = linePositions.length / 3;
      for (let i = 0; i < lineCount; i++) {
        const lx = linePositions[i * 3];

        let targetR = lx < 0 ? redColor.r : blueColor.r;
        let targetG = lx < 0 ? redColor.g : blueColor.g;
        let targetB = lx < 0 ? redColor.b : blueColor.b;

        if (currentSide === 'offensive') {
          targetR = redColor.r;
          targetG = redColor.g;
          targetB = redColor.b;
        } else if (currentSide === 'defensive') {
          targetR = blueColor.r;
          targetG = blueColor.g;
          targetB = blueColor.b;
        }

        lineColorsArr[i * 3] += (targetR - lineColorsArr[i * 3]) * 0.08;
        lineColorsArr[i * 3 + 1] += (targetG - lineColorsArr[i * 3 + 1]) * 0.08;
        lineColorsArr[i * 3 + 2] += (targetB - lineColorsArr[i * 3 + 2]) * 0.08;
      }
      lineColorAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
    };
  }, []);

  return (
    <div 
      className="cyber-background-container"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        overflow: 'hidden',
        backgroundColor: '#030712'
      }}
    >
      {/* Background HUD Wallpaper with dynamic hover classes */}
      <div 
        ref={containerRef}
        className={`cyber-background-image hover-${hoveredSide}`}
        style={{
          position: 'absolute',
          top: '-2.5%',
          left: '-2.5%',
          width: '105%',
          height: '105%',
          backgroundImage: "url('/src/assets/cyber-hud-bg-new.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'transform 0.15s ease-out, filter 0.8s ease',
          pointerEvents: 'none'
        }}
      />

      {/* Dim Overlay with dynamic hover overlays */}
      <div 
        className={`cyber-background-overlay hover-${hoveredSide}`}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          transition: 'background 0.8s ease'
        }}
      />

      {/* Interactive WebGL Threat Globe Canvas */}
      <canvas 
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.82
        }}
      />
    </div>
  );
}
