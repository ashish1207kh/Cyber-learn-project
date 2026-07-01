import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Header from './components/Header';
import SecurityPanel from './components/SecurityPanel';
import HeroCenter from './components/HeroCenter';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import OffensiveDetail from './components/OffensiveDetail';
import DefensiveDetail from './components/DefensiveDetail';
import OffensiveRoadmap from './components/OffensiveRoadmap';
import DefensiveRoadmap from './components/DefensiveRoadmap';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [hoveredSide, setHoveredSide] = useState('none');
  const landingRef = useRef(null);
  const detailOffensiveRef = useRef(null);
  const detailDefensiveRef = useRef(null);
  const detailRoadmapRef = useRef(null);
  const detailDefensiveRoadmapRef = useRef(null);

  // Dynamic route switching
  const handleNavigate = (view) => {
    // Reset hover state when navigating away
    setHoveredSide('none');

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentView(view);
      }
    });

    if (view !== 'landing') {
      tl.to(landingRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.4,
        ease: 'power2.inOut'
      });
    } else {
      const activeRef = currentView === 'offensive-detail' ? detailOffensiveRef.current : detailDefensiveRef.current;
      tl.to(activeRef, {
        opacity: 0,
        y: 15,
        duration: 0.4,
        ease: 'power2.inOut'
      });
    }
  };

  // GSAP Entry staggers on view update
  useEffect(() => {
    if (currentView === 'landing' && landingRef.current) {
      gsap.fromTo(landingRef.current, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.navbar', 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 0.7 }
      )
      .fromTo('.center-content h1', 
        { opacity: 0, y: 25 }, 
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo('.center-content p, .search-wrapper', 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        '-=0.4'
      )
      .fromTo('.offensive', 
        { opacity: 0, x: -40, rotateY: -10 }, 
        { opacity: 1, x: 0, rotateY: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo('.defensive', 
        { opacity: 0, x: 40, rotateY: 10 }, 
        { opacity: 1, x: 0, rotateY: 0, duration: 0.8 },
        '-=0.8'
      )
      .fromTo('.stats-container', 
        { opacity: 0, scale: 0.95 }, 
        { opacity: 1, scale: 1, duration: 0.4 },
        '-=0.4'
      )
      .fromTo('.footer-capsule-container', 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.2'
      );
    } else if (currentView === 'offensive-detail' && detailOffensiveRef.current) {
      gsap.fromTo(detailOffensiveRef.current, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    } else if (currentView === 'defensive-detail' && detailDefensiveRef.current) {
      gsap.fromTo(detailDefensiveRef.current, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    } else if (currentView === 'offensive-roadmap' && detailRoadmapRef.current) {
      gsap.fromTo(detailRoadmapRef.current, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    } else if (currentView === 'defensive-roadmap' && detailDefensiveRoadmapRef.current) {
      gsap.fromTo(detailDefensiveRoadmapRef.current, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    }
  }, [currentView]);

  return (
    <div className={`app-wrapper theme-${currentView} hover-theme-${hoveredSide}`}>
      {/* City HUD Background WebGL rotating network globe backdrop */}
      <Background3D hoveredSide={hoveredSide} />

      {/* Landing View Page */}
      {currentView === 'landing' && (
        <div ref={landingRef} className="app-container" style={{ justifyContent: 'space-between', paddingBottom: '30px' }}>
          <div>
            {/* Header navbar logo and buttons */}
            <Header view="landing" onBack={() => handleNavigate('landing')} />

            {/* Main grid */}
            <main className="hero-grid" style={{ marginBottom: '40px', marginTop: '30px' }}>
              {/* Left offensive column */}
              <div 
                className="offensive" 
                onClick={() => handleNavigate('offensive-detail')}
                onMouseEnter={() => setHoveredSide('offensive')}
                onMouseLeave={() => setHoveredSide('none')}
              >
                <SecurityPanel type="offensive" />
              </div>

              {/* Center landing page content */}
              <HeroCenter />

              {/* Right defensive column */}
              <div 
                className="defensive" 
                onClick={() => handleNavigate('defensive-detail')}
                onMouseEnter={() => setHoveredSide('defensive')}
                onMouseLeave={() => setHoveredSide('none')}
              >
                <SecurityPanel type="defensive" />
              </div>
            </main>
          </div>

          {/* Centered capsule quote */}
          <Footer />
        </div>
      )}

      {/* Detailed Dashboard view page (Offensive) */}
      {currentView === 'offensive-detail' && (
        <div ref={detailOffensiveRef} className="dashboard-container">
          <OffensiveDetail onBack={() => handleNavigate('landing')} onNavigate={handleNavigate} />
        </div>
      )}

      {/* Detailed Dashboard view page (Defensive) */}
      {currentView === 'defensive-detail' && (
        <div ref={detailDefensiveRef} className="dashboard-container">
          <DefensiveDetail onBack={() => handleNavigate('landing')} onNavigate={handleNavigate} />
        </div>
      )}

      {/* Offensive Security Roadmap page */}
      {currentView === 'offensive-roadmap' && (
        <div ref={detailRoadmapRef} className="dashboard-container">
          <OffensiveRoadmap onBack={() => handleNavigate('landing')} onNavigate={handleNavigate} />
        </div>
      )}

      {/* Defensive Security Roadmap page */}
      {currentView === 'defensive-roadmap' && (
        <div ref={detailDefensiveRoadmapRef} className="dashboard-container">
          <DefensiveRoadmap onBack={() => handleNavigate('landing')} onNavigate={handleNavigate} />
        </div>
      )}
    </div>
  );
}

export default App;
