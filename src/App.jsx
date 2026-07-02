import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Header from './components/Header';
import SecurityPanel from './components/SecurityPanel';
import GNCBanner from './components/GNCBanner';
import Background3D from './components/Background3D';
import OffensiveDetail from './components/OffensiveDetail';
import DefensiveDetail from './components/DefensiveDetail';
import OffensiveRoadmap from './components/OffensiveRoadmap';
import DefensiveRoadmap from './components/DefensiveRoadmap';
import LoaderCurtain from './components/LoaderCurtain';
import OffensiveTopicDetail from './components/OffensiveTopicDetail';
import DefensiveTopicDetail from './components/DefensiveTopicDetail';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [hoveredSide, setHoveredSide] = useState('none');
  const [selectedTopicId, setSelectedTopicId] = useState('01');
  const landingRef = useRef(null);
  const detailOffensiveRef = useRef(null);
  const detailDefensiveRef = useRef(null);
  const detailRoadmapRef = useRef(null);
  const detailDefensiveRoadmapRef = useRef(null);
  const detailTopicRef = useRef(null);
  const loaderRef = useRef(null);

  // Set default data-theme to dark globally
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  useEffect(() => {
    let isInitial = true;

    const parseHash = () => {
      const hash = window.location.hash;
      setHoveredSide('none');
      
      const transitionTo = (view, topicId = '01') => {
        if (topicId) {
          setSelectedTopicId(topicId);
        }
        
        if (isInitial) {
          setCurrentView(view);
        } else if (loaderRef.current) {
          loaderRef.current.triggerTransition(() => {
            setCurrentView(view);
          });
        } else {
          setCurrentView(view);
        }
      };

      if (!hash || hash === '#home') {
        transitionTo('landing');
      } else if (hash === '#offensive') {
        transitionTo('offensive-detail');
      } else if (hash === '#defensive') {
        transitionTo('defensive-detail');
      } else if (hash === '#offensive-roadmap') {
        transitionTo('offensive-roadmap');
      } else if (hash === '#defensive-roadmap') {
        transitionTo('defensive-roadmap');
      } else if (hash.startsWith('#offensive-topic/')) {
        const topicId = hash.replace('#offensive-topic/', '');
        transitionTo('offensive-topic-detail', topicId);
      } else if (hash.startsWith('#defensive-topic/')) {
        const topicId = hash.replace('#defensive-topic/', '');
        transitionTo('defensive-topic-detail', topicId);
      } else {
        transitionTo('landing');
      }
      
      isInitial = false;
    };

    parseHash();

    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (view, topicId) => {
    if (view === 'landing') {
      window.location.hash = '';
    } else if (view === 'offensive-detail') {
      window.location.hash = '#offensive';
    } else if (view === 'defensive-detail') {
      window.location.hash = '#defensive';
    } else if (view === 'offensive-roadmap') {
      window.location.hash = '#offensive-roadmap';
    } else if (view === 'defensive-roadmap') {
      window.location.hash = '#defensive-roadmap';
    } else if (view === 'offensive-topic-detail') {
      window.location.hash = `#offensive-topic/${topicId || selectedTopicId}`;
    } else if (view === 'defensive-topic-detail') {
      window.location.hash = `#defensive-topic/${topicId || selectedTopicId}`;
    }
  };

  useEffect(() => {
    if (currentView === 'landing' && landingRef.current) {
      gsap.fromTo(landingRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.navbar', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo('.hero-headline', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
        .fromTo('.path-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .fromTo('.gnc-banner', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2');
    } else if (currentView === 'offensive-detail' && detailOffensiveRef.current) {
      gsap.fromTo(detailOffensiveRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
    } else if (currentView === 'defensive-detail' && detailDefensiveRef.current) {
      gsap.fromTo(detailDefensiveRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
    } else if (currentView === 'offensive-roadmap' && detailRoadmapRef.current) {
      gsap.fromTo(detailRoadmapRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
    } else if (currentView === 'defensive-roadmap' && detailDefensiveRoadmapRef.current) {
      gsap.fromTo(detailDefensiveRoadmapRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
    } else if (currentView === 'offensive-topic-detail' && detailTopicRef.current) {
      gsap.fromTo(detailTopicRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
    } else if (currentView === 'defensive-topic-detail' && detailTopicRef.current) {
      gsap.fromTo(detailTopicRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
    }
  }, [currentView]);

  return (
    <div className={`app-wrapper theme-${currentView} hover-theme-${hoveredSide}`}>
      <Background3D hoveredSide={hoveredSide} />

      {/* ── LANDING ── */}
      {currentView === 'landing' && (
        <div ref={landingRef} className="landing-page">
          <Header
            view="landing"
            onBack={() => handleNavigate('landing')}
          />

          {/* Hero Headline */}
          <div className="hero-headline">
            <h1>CHOOSE YOUR PATH. MASTER CYBER SECURITY.</h1>
            <p>Three powerful paths. Infinite opportunities. Your future in cybersecurity starts here.</p>
          </div>

          {/* Three path cards */}
          <SecurityPanel onNavigate={handleNavigate} />

          {/* GNC Banner */}
          <GNCBanner onNavigate={handleNavigate} />
        </div>
      )}

      {/* ── OFFENSIVE DETAIL ── */}
      {currentView === 'offensive-detail' && (
        <div ref={detailOffensiveRef} className="dashboard-container">
          <OffensiveDetail onBack={() => handleNavigate('landing')} onNavigate={handleNavigate} />
        </div>
      )}

      {/* ── DEFENSIVE DETAIL ── */}
      {currentView === 'defensive-detail' && (
        <div ref={detailDefensiveRef} className="dashboard-container">
          <DefensiveDetail onBack={() => handleNavigate('landing')} onNavigate={handleNavigate} />
        </div>
      )}

      {/* ── OFFENSIVE ROADMAP ── */}
      {currentView === 'offensive-roadmap' && (
        <div ref={detailRoadmapRef} className="dashboard-container">
          <OffensiveRoadmap onBack={() => handleNavigate('landing')} onNavigate={handleNavigate} />
        </div>
      )}

      {/* ── DEFENSIVE ROADMAP ── */}
      {currentView === 'defensive-roadmap' && (
        <div ref={detailDefensiveRoadmapRef} className="dashboard-container">
          <DefensiveRoadmap onBack={() => handleNavigate('landing')} onNavigate={handleNavigate} />
        </div>
      )}

      {/* ── OFFENSIVE TOPIC DETAIL ── */}
      {currentView === 'offensive-topic-detail' && (
        <div ref={detailTopicRef} className="dashboard-container">
          <OffensiveTopicDetail topicId={selectedTopicId} onBack={() => handleNavigate('offensive-detail')} onNavigate={handleNavigate} />
        </div>
      )}

      {/* ── DEFENSIVE TOPIC DETAIL ── */}
      {currentView === 'defensive-topic-detail' && (
        <div ref={detailTopicRef} className="dashboard-container">
          <DefensiveTopicDetail topicId={selectedTopicId} onBack={() => handleNavigate('defensive-detail')} onNavigate={handleNavigate} />
        </div>
      )}

      {/* Global Luxury Door Transition Curtain Loader */}
      <LoaderCurtain ref={loaderRef} />
    </div>
  );
}

export default App;
