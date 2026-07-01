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
  Globe,
  GraduationCap,
  Target,
  ShieldCheck,
  Radar,
  ScanSearch,
  ServerCrash,
  BugOff,
  Lock,
  MonitorCheck
} from 'lucide-react';
import Header from './Header';
import analystImg from '../assets/cyber-analyst-blue.jpg';

export default function DefensiveDetail({ onBack, onNavigate }) {
  // Left Sidebar Paths
  const sidebarPaths = [
    { name: 'Offensive Security', icon: Swords, active: false },
    { name: 'Defensive Security', icon: Shield, active: true }
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

  // stats values matching screenshot
  const stats = [
    { count: '10', label: 'Domains', icon: Shield },
    { count: '120+', label: 'Lessons', icon: Book },
    { count: '45+', label: 'Labs', icon: Beaker },
    { count: '25+', label: 'Tools', icon: Wrench },
    { count: '5', label: 'Certifications', icon: Award }
  ];

  // 10 topic cards matching the screenshot EXACTLY
  const topics = [
    {
      num: '01',
      title: 'SIEM Monitoring',
      desc: 'Monitor and analyze security events in real-time using SIEM tools.',
      icon: Radar
    },
    {
      num: '02',
      title: 'Incident Response',
      desc: 'Identify, respond, and recover from security incidents effectively.',
      icon: ShieldCheck
    },
    {
      num: '03',
      title: 'Threat Intelligence',
      desc: 'Gather and analyze threat data to stay ahead of adversaries and reduce risk.',
      icon: ScanSearch
    },
    {
      num: '04',
      title: 'Digital Forensics',
      desc: 'Collect, preserve, and analyze digital evidence for investigations.',
      icon: Search
    },
    {
      num: '05',
      title: 'Network Security',
      desc: 'Protect network infrastructure and monitor traffic for suspicious activity.',
      icon: Globe
    },
    {
      num: '06',
      title: 'Vulnerability Management',
      desc: 'Identify, assess, and remediate vulnerabilities before attackers can exploit them.',
      icon: BugOff
    },
    {
      num: '07',
      title: 'Endpoint Security',
      desc: 'Secure endpoints, detect malware, and prevent unauthorized access.',
      icon: Lock
    },
    {
      num: '08',
      title: 'Log Analysis',
      desc: 'Analyze logs to detect threats, investigate events, and ensure compliance.',
      icon: MonitorCheck
    },
    {
      num: '09',
      title: 'Patch Management',
      desc: 'Manage and deploy patches to keep systems secure and up-to-date.',
      icon: Wrench
    },
    {
      num: '10',
      title: 'User Awareness Training',
      desc: 'Educate users and reduce human risk through security awareness programs.',
      icon: Users
    }
  ];

  // GSAP 3D card tilt effect
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
    <div className="defensive-dashboard-wrapper select-none">
      <Header view="defensive" onBack={onBack} />

      <div className="defensive-dashboard">
        {/* 1. Left Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-section">
            <span className="sidebar-section-title">LEARNING PATHS</span>
            <div className="sidebar-paths-list">
              {sidebarPaths.map((path, idx) => {
                const PathIcon = path.icon;
                return (
                  <div 
                    key={idx} 
                    className={`sidebar-path-item-blue ${path.active ? 'active' : ''}`} 
                    onClick={() => {
                      if (path.active) return;
                      if (idx === 0) onNavigate('offensive-detail');
                      else onNavigate('defensive-detail');
                    }}
                  >
                    <PathIcon size={16} />
                    <span>{path.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="sidebar-menu-list">
            {sidebarMenu.map((item, idx) => {
              const MenuIcon = item.icon;
              return (
                <a href={`#${item.name.toLowerCase().replace(' ', '-')}`} key={idx} className="sidebar-menu-item sidebar-menu-item-blue">
                  <MenuIcon size={16} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          <div className="sidebar-progress-card-blue">
            <div className="progress-icon-circle-blue">
              <Shield size={20} style={{ color: '#0088ff' }} />
            </div>
            <h4>Track Your Progress</h4>
            <p>Complete modules, earn badges and level up!</p>
            <button className="btn-sidebar-progress-blue">
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
            <span className="breadcrumb-active-blue">Defensive Security</span>
          </nav>

          <section className="dashboard-hero dashboard-hero-blue">
            <div className="dashboard-hero-text">
              <h1 className="hero-dashboard-title-blue">DEFENSIVE SECURITY</h1>
              <p className="hero-dashboard-desc">
                Defend systems, detect threats, and respond to incidents.<br/>
                Master the skills of a Blue Team professional.
              </p>
              <div className="hero-stats-row">
                {stats.map((stat, idx) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={idx} className="hero-stat-box">
                      <div className="hero-stat-icon-wrapper-blue"><StatIcon size={18} /></div>
                      <div className="hero-stat-text">
                        <h3>{stat.count}</h3>
                        <p>{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="hero-illustration-right">
              <div className="hacker-image-glowing-border-blue">
                <img src={analystImg} alt="Analyst operations room" className="hacker-hero-img" />
              </div>
            </div>
          </section>

          {/* Topics Grid */}
          <section className="dashboard-topics-section">
            <div className="topics-grid">
              {topics.map((topic, idx) => {
                const TopicIcon = topic.icon;
                return (
                  <div key={idx} className="topic-card topic-card-blue"
                    onMouseMove={(e) => applyTiltEffect(e.currentTarget, e)}
                    onMouseLeave={(e) => removeTiltEffect(e.currentTarget)}
                  >
                    <span className="topic-num-blue">{topic.num}</span>
                    <div className="topic-card-icon-circle-blue">
                      <TopicIcon size={22} />
                    </div>
                    <div>
                      <h4 className="topic-card-title">{topic.title}</h4>
                      <p className="topic-card-desc">{topic.desc}</p>
                    </div>
                    <button className="btn-topic-card-blue">
                      <span>Open Domain</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          <footer className="dashboard-footer-banner-blue">
            <div className="footer-banner-left">
              <div className="banner-icon-circle-blue">
                <GraduationCap size={22} style={{ color: '#0088ff' }} />
              </div>
              <div className="banner-text">
                <h3>Ready to Strengthen Your Defensive Skills?</h3>
                <p>Follow our structured roadmap and build your career in Blue Team operations.</p>
              </div>
            </div>
            <button className="btn-banner-action-blue" onClick={() => onNavigate('defensive-roadmap')}>
              <span>View Roadmap</span>
              <ArrowRight size={14} />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
