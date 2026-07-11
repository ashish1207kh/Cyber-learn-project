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
  GraduationCap,
  Scale,
  ClipboardList,
  AlertTriangle,
  LineChart,
  FileCheck,
  Building,
  ShieldCheck,
  CheckCircle,
  Briefcase
} from 'lucide-react';
import Header from './Header';
import gncImg from '../assets/cyber-hud-bg-new.jpg';

export default function GRCDetail({ onBack, onNavigate }) {
  // Left Sidebar Paths
  const sidebarPaths = [
    { name: 'Offensive Security', icon: Swords, active: false },
    { name: 'Defensive Security', icon: Shield, active: false },
    { name: 'Governance, Risk & Compliance', icon: BookOpen, active: true }
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

  // 10 GRC topic cards
  const topics = [
    {
      num: '01',
      title: 'Introduction to GRC',
      desc: 'Understand the foundational concepts of Governance, Risk & Compliance.',
      icon: Scale
    },
    {
      num: '02',
      title: 'Information Security Governance',
      desc: 'Establish strategic alignment, resource management, and value delivery.',
      icon: Building
    },
    {
      num: '03',
      title: 'Risk Management',
      desc: 'Identify, evaluate, and mitigate risks to acceptable levels.',
      icon: AlertTriangle
    },
    {
      num: '04',
      title: 'Risk Assessment & Analysis',
      desc: 'Conduct qualitative and quantitative analysis of security threats.',
      icon: LineChart
    },
    {
      num: '05',
      title: 'Policies & Standards',
      desc: 'Develop security policies, standards, procedures, and guidelines.',
      icon: FileText
    },
    {
      num: '06',
      title: 'Compliance & Regulations',
      desc: 'Navigate legal and regulatory requirements (GDPR, HIPAA, PCI-DSS).',
      icon: FileCheck
    },
    {
      num: '07',
      title: 'ISO 27001 & NIST CSF',
      desc: 'Implement globally recognized cybersecurity frameworks.',
      icon: ShieldCheck
    },
    {
      num: '08',
      title: 'Security Controls',
      desc: 'Design and manage Administrative, Technical, and Physical controls.',
      icon: CheckCircle
    },
    {
      num: '09',
      title: 'Information Security Auditing',
      desc: 'Plan, execute, and report on security audits to ensure compliance.',
      icon: ClipboardList
    },
    {
      num: '10',
      title: 'Business Continuity & DR',
      desc: 'Ensure organizations survive disasters with BCP & DRP strategies.',
      icon: Briefcase
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
      <Header view="grc" onBack={onBack} />

      <div className="defensive-dashboard">
        {/* 1. Left Sidebar */}
        <aside className="dashboard-sidebar">

          <div className="sidebar-menu-list">
            {sidebarMenu.map((item, idx) => {
              const MenuIcon = item.icon;
              return (
                <a href={`#${item.name.toLowerCase().replace(' ', '-')}`} key={idx} className="sidebar-menu-item sidebar-menu-item-green">
                  <MenuIcon size={16} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          <div className="sidebar-progress-card-green">
            <div className="progress-icon-circle-green">
              <BookOpen size={20} style={{ color: '#22c55e' }} />
            </div>
            <h4>Track Your Progress</h4>
            <p>Complete modules, earn badges and level up!</p>
            <button className="btn-sidebar-progress-green">
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
            <span className="breadcrumb-active-green">Governance, Risk & Compliance</span>
          </nav>

          <section className="dashboard-hero dashboard-hero-green">
            <div className="dashboard-hero-text">
              <h1 className="hero-dashboard-title-green">GOVERNANCE, RISK & COMPLIANCE</h1>
              <p className="hero-dashboard-desc">
                Understand policies, manage enterprise risks, and ensure regulatory compliance.<br/>
                Build a strong organizational security framework.
              </p>

            </div>
            <div className="hero-illustration-right">
              <div className="hacker-image-glowing-border-green">
                <img src={gncImg} alt="GRC dashboard operations" className="hacker-hero-img" />
              </div>
            </div>
          </section>

          {/* Topics Grid */}
          <section className="dashboard-topics-section">
            <div className="topics-grid">
              {topics.map((topic, idx) => {
                const TopicIcon = topic.icon;
                return (
                  <div key={idx} className="topic-card topic-card-green"
                    onMouseMove={(e) => applyTiltEffect(e.currentTarget, e)}
                    onMouseLeave={(e) => removeTiltEffect(e.currentTarget)}
                    onClick={() => onNavigate('grc-topic-detail', topic.num)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="topic-num-green">{topic.num}</span>
                    <div className="topic-card-icon-circle-green">
                      <TopicIcon size={22} />
                    </div>
                    <div>
                      <h4 className="topic-card-title">{topic.title}</h4>
                      <p className="topic-card-desc">{topic.desc}</p>
                    </div>
                    <button 
                      className="btn-topic-card-green"
                      onClick={() => onNavigate('grc-topic-detail', topic.num)}
                    >
                      <span>Open Domain</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          <footer className="dashboard-footer-banner-green">
            <div className="footer-banner-left">
              <div className="banner-icon-circle-green">
                <GraduationCap size={22} style={{ color: '#22c55e' }} />
              </div>
              <div className="banner-text">
                <h3>Ready to Master GRC?</h3>
                <p>Follow our structured roadmap and lead enterprise security governance.</p>
              </div>
            </div>
            <button className="btn-banner-action-green" onClick={() => onNavigate('landing')}>
              <span>Coming Soon</span>
              <ArrowRight size={14} />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
