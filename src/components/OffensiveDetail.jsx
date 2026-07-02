import React from 'react';
import gsap from 'gsap';
import { 
  Swords, 
  Shield, 
  BookOpen, 
  Trophy, 
  Award, 
  Bookmark, 
  FileText, 
  Activity, 
  Settings,
  ArrowRight,
  Book,
  Laptop,
  Beaker,
  Wrench,
  Search,
  Users,
  Eye,
  Camera,
  Globe,
  Wifi,
  Skull,
  GraduationCap,
  Target,
  Crosshair
} from 'lucide-react';
import Header from './Header';
import hackerImg from '../assets/cyber-hacker-red.jpg';

export default function OffensiveDetail({ onBack, onNavigate }) {
  // Left Sidebar Paths - same icons as defensive
  const sidebarPaths = [
    { name: 'Offensive Security', icon: Swords, active: true },
    { name: 'Defensive Security', icon: Shield, active: false }
  ];

  const sidebarMenu = [
    { name: 'My Learning', icon: BookOpen },
    { name: 'Achievements', icon: Trophy },
    { name: 'Certifications', icon: Award },
    { name: 'Bookmarks', icon: Bookmark },
    { name: 'Notes', icon: FileText },
    { name: 'Progress Tracker', icon: Activity },
    { name: 'Settings', icon: Settings }
  ];



  const topics = [
    { num: '01', title: 'Penetration Testing', desc: 'Learn the methodology to test networks, systems, and applications for vulnerabilities.', icon: Crosshair },
    { num: '02', title: 'Social Engineering', desc: 'Understand human psychology and learn techniques to exploit human vulnerabilities.', icon: Users },
    { num: '03', title: 'OSINT Reconnaissance', desc: 'Gather intelligence from publicly available sources to build strong reconnaissance skills.', icon: Search },
    { num: '04', title: 'Exploitation Techniques', desc: 'Learn various exploitation techniques to take control of vulnerable systems.', icon: Skull },
    { num: '05', title: 'Post-Exploitation', desc: 'Explore techniques to maintain access, escalate privileges, and move laterally.', icon: Eye },
    { num: '06', title: 'Red Teaming', desc: 'Simulate real-world attacks and learn to think like an adversary in a network.', icon: Target },
    { num: '07', title: 'Physical Security Testing', desc: 'Assess and exploit physical security weaknesses in real-world environments.', icon: Camera },
    { num: '08', title: 'Web App Testing', desc: 'Find and exploit vulnerabilities in web applications using modern testing techniques.', icon: Globe },
    { num: '09', title: 'Wireless Attacks', desc: 'Crack Wi-Fi networks and exploit wireless protocols & vulnerabilities.', icon: Wifi },
    { num: '10', title: 'Malware Development', desc: 'Learn to develop malware for educational purposes in a safe environment.', icon: Skull }
  ];

  const applyTiltEffect = (card, e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    gsap.to(card, { rotateX, rotateY, transformPerspective: 800, ease: 'power2.out', duration: 0.3 });
  };

  const removeTiltEffect = (card) => {
    gsap.to(card, { rotateX: 0, rotateY: 0, ease: 'power2.out', duration: 0.5 });
  };

  return (
    <div className="offensive-dashboard-wrapper select-none">
      <Header view="offensive" onBack={onBack} />

      <div className="offensive-dashboard">
        {/* 1. Left Sidebar */}
        <aside className="dashboard-sidebar">

          <div className="sidebar-menu-list">
            {sidebarMenu.map((item, idx) => {
              const MenuIcon = item.icon;
              return (
                <a href={`#${item.name.toLowerCase().replace(' ', '-')}`} key={idx} className="sidebar-menu-item">
                  <MenuIcon size={16} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          <div className="sidebar-progress-card">
            <div className="progress-icon-circle">
              <Target size={20} style={{ color: '#ef4444' }} />
            </div>
            <h4>Track Your Progress</h4>
            <p>Complete modules, earn badges and level up!</p>
            <button className="btn-sidebar-progress">
              <span>View Progress</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </aside>

        {/* 2. Main content panel */}
        <div className="dashboard-main-wrapper">
          <nav className="dashboard-breadcrumbs">
            <span className="breadcrumb-link" onClick={onBack}>Learning Paths</span>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-active">Offensive Security</span>
          </nav>

          <section className="dashboard-hero">
            <div className="dashboard-hero-text">
              <h1 className="hero-dashboard-title">OFFENSIVE SECURITY</h1>
              <p className="hero-dashboard-desc">
                Master the art of attacking systems and finding vulnerabilities like<br/>
                like a real-world hacker.<br/>
                Learn. Practice. Exploit.
              </p>

            </div>
            <div className="hero-illustration-right">
              <div className="hacker-image-glowing-border">
                <img src={hackerImg} alt="Hacker red hoodie" className="hacker-hero-img" />
              </div>
            </div>
          </section>

          <section className="dashboard-topics-section">
            <h2 className="topics-section-title">
              <span style={{ borderLeft: '3px solid #ef4444', paddingLeft: '10px' }}>Explore Offensive Security Topics</span>
            </h2>
            <p className="topics-section-desc">
              Select a topic to start learning and take your offensive security skills to the next level.
            </p>

            <div className="topics-grid">
              {topics.map((topic, idx) => {
                const TopicIcon = topic.icon;
                return (
                  <div key={idx} className="topic-card"
                    onMouseMove={(e) => applyTiltEffect(e.currentTarget, e)}
                    onMouseLeave={(e) => removeTiltEffect(e.currentTarget)}
                  >
                    <span className="topic-num">{topic.num}</span>
                    <div className="topic-card-icon-circle">
                      <TopicIcon size={22} />
                    </div>
                    <div>
                      <h4 className="topic-card-title">{topic.title}</h4>
                      <p className="topic-card-desc">{topic.desc}</p>
                    </div>
                    <button className="btn-topic-card">
                      <span>Open Topic</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          <footer className="dashboard-footer-banner">
            <div className="footer-banner-left">
              <div className="banner-icon-circle">
                <GraduationCap size={22} style={{ color: '#ef4444' }} />
              </div>
              <div className="banner-text">
                <h3>Become an Offensive Security Expert</h3>
                <p>Follow our structured roadmap and master in-demand offensive security skills.</p>
              </div>
            </div>
            <button className="btn-banner-action" onClick={() => onNavigate('offensive-roadmap')}>
              <span>View Roadmap</span>
              <ArrowRight size={14} />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
