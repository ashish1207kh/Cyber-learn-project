import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import gsap from 'gsap';
import { Shield, Lock } from 'lucide-react';
import leftCurtain from '../assets/left-curtain.jpg'; // Blue hacker
import rightCurtain from '../assets/right-curtain.jpg'; // Red hacker

// Responsive split-door wallpapers loaded successfully

const LoaderCurtain = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const logoRef = useRef(null);

  // Expose the transition trigger function to the parent
  useImperativeHandle(ref, () => ({
    triggerTransition: (onMidpoint, onComplete) => {
      const container = containerRef.current;
      const leftDoor = leftDoorRef.current;
      const rightDoor = rightDoorRef.current;
      const logo = logoRef.current;

      if (!container || !leftDoor || !rightDoor || !logo) {
        onMidpoint();
        if (onComplete) onComplete();
        return;
      }

      // Set container visible & block clicks
      gsap.set(container, { display: 'block', pointerEvents: 'all' });

      // Clean timeline to finish in exactly 1.2s total
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(container, { display: 'none', pointerEvents: 'none' });
          if (onComplete) onComplete();
        }
      });

      // 1. Close doors (0.45s)
      tl.to([leftDoor, rightDoor], {
        xPercent: 0,
        duration: 0.45,
        ease: 'power3.inOut'
      })
      // 2. Pop the logo (0.15s)
      .fromTo(logo, 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.15, ease: 'back.out(1.8)' }
      )
      // 3. Midpoint callback to switch view
      .add(() => {
        onMidpoint();
      })
      // 4. Fade logo out (0.15s)
      .to(logo, {
        scale: 1.15,
        opacity: 0,
        duration: 0.15,
        ease: 'power2.in'
      })
      // 5. Open doors (0.45s)
      .to(leftDoor, {
        xPercent: -100,
        duration: 0.45,
        ease: 'power3.inOut'
      })
      .to(rightDoor, {
        xPercent: 100,
        duration: 0.45,
        ease: 'power3.inOut'
      }, '-=0.45');
    }
  }));

  // Initial state setup: doors start open
  useEffect(() => {
    if (leftDoorRef.current && rightDoorRef.current && logoRef.current && containerRef.current) {
      gsap.set(leftDoorRef.current, { xPercent: -100 });
      gsap.set(rightDoorRef.current, { xPercent: 100 });
      gsap.set(logoRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(containerRef.current, { display: 'none', pointerEvents: 'none' });
    }
  }, []);

  return (
    <div ref={containerRef} className="loader-curtain-container">
      {/* Left split door (Red hacker wallpaper - inline bg-image only) */}
      <div 
        ref={leftDoorRef} 
        className="loader-door left-door" 
        style={{ backgroundImage: `url(${rightCurtain})` }}
      >
        <div className="door-luxury-line" />
      </div>

      {/* Right split door (Blue hacker wallpaper - inline bg-image only) */}
      <div 
        ref={rightDoorRef} 
        className="loader-door right-door" 
        style={{ backgroundImage: `url(${leftCurtain})` }}
      >
        <div className="door-luxury-line" />
      </div>

      {/* Central luxury branding overlay - absolute center */}
      <div ref={logoRef} className="loader-logo-wrapper">
        <div className="loader-logo-glow" />
        
        {/* Central Logo Container with Cyber-Lock background */}
        <div className="loader-logo-ring">
          {/* Cyber Lock Background Shape */}
          <Lock className="loader-bg-lock-icon" size={68} />
          {/* Foreground Shield Logo */}
          <Shield size={28} className="loader-logo-icon" />
        </div>
        
        <div className="loader-text-wrapper">
          <span className="loader-brand-title">CYBER <span className="highlight">LEARN</span></span>
          <span className="loader-brand-subtitle">SECURE YOUR FUTURE</span>
        </div>
      </div>
    </div>
  );
});

export default LoaderCurtain;
