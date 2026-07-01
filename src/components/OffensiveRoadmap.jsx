import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  Shield, Swords, Network, Terminal, Code2, Globe2, Crosshair,
  Target, Skull, Brain, Award, ArrowRight, ArrowLeft,
  Clock, Beaker, FolderGit2, ChevronDown, ChevronUp, Trophy
} from 'lucide-react';
import Header from './Header';

const LEVELS = [
  {
    num: 1, title: 'Cyber Fundamentals', icon: Shield, difficulty: 'Easy', hours: 10, labs: 12, projects: 2,
    badge: 'Cyber Rookie',
    topics: ['CIA Triad', 'Cyber Kill Chain', 'Threat Landscape', 'Hacker Types', 'Malware Basics', 'Operating Systems', 'Virtual Machines', 'Networking Overview'],
    handsOn: ['Install VirtualBox', 'Install Kali Linux']
  },
  {
    num: 2, title: 'Networking Fundamentals', icon: Network, difficulty: 'Easy', hours: 14, labs: 15, projects: 3,
    badge: 'Network Explorer',
    topics: ['TCP/IP', 'OSI Model', 'Routing & Switching', 'Ports & Protocols', 'DNS & DHCP', 'VPN', 'Firewalls', 'Wireshark'],
    handsOn: ['Capture Packets', 'Port Scanning', 'Subnetting']
  },
  {
    num: 3, title: 'Linux Mastery', icon: Terminal, difficulty: 'Medium', hours: 18, labs: 20, projects: 3,
    badge: 'Linux Operator',
    topics: ['Linux Filesystem', 'Permissions & Users', 'Processes', 'Bash Scripting', 'SSH', 'Cron Jobs', 'Networking Commands', 'Package Management', 'Regex'],
    handsOn: ['Linux CTF', 'Terminal Challenges', 'Privilege Exercises']
  },
  {
    num: 4, title: 'Programming', icon: Code2, difficulty: 'Medium', hours: 22, labs: 18, projects: 4,
    badge: 'Automation Engineer',
    topics: ['Python', 'Bash', 'PowerShell', 'JavaScript', 'Regex', 'Automation', 'API Integration', 'Git & GitHub'],
    handsOn: ['Port Scanner', 'Password Checker', 'Log Parser', 'Network Scanner']
  },
  {
    num: 5, title: 'Web Technologies', icon: Globe2, difficulty: 'Medium', hours: 16, labs: 14, projects: 2,
    badge: 'Web Explorer',
    topics: ['HTML/CSS/JS', 'HTTP/HTTPS', 'Cookies & Sessions', 'JWT', 'REST APIs', 'Authentication'],
    handsOn: ['Build Vulnerable Website', 'Burp Suite Basics']
  },
  {
    num: 6, title: 'Ethical Hacking', icon: Crosshair, difficulty: 'Hard', hours: 24, labs: 22, projects: 3,
    badge: 'Recon Specialist',
    topics: ['Reconnaissance', 'Footprinting', 'Scanning', 'Enumeration', 'OSINT', 'Nmap', 'Shodan', 'Google Dorking', 'WHOIS', 'DNS Recon'],
    handsOn: ['Full Recon Challenge']
  },
  {
    num: 7, title: 'Penetration Testing', icon: Target, difficulty: 'Hard', hours: 30, labs: 28, projects: 5,
    badge: 'Junior Pentester',
    topics: ['Methodology', 'Information Gathering', 'Vulnerability Analysis', 'Exploitation', 'Post-Exploitation', 'Reporting', 'OWASP Top 10', 'Burp Suite Pro'],
    handsOn: ['Web Pentest', 'Network Pentest', 'Internal Pentest']
  },
  {
    num: 8, title: 'Red Team Operations', icon: Skull, difficulty: 'Expert', hours: 35, labs: 25, projects: 4,
    badge: 'Red Operator',
    topics: ['Phishing Campaigns', 'Payload Crafting', 'Persistence', 'Lateral Movement', 'Privilege Escalation', 'Credential Dumping', 'Living Off The Land', 'Evasion Techniques', 'MITRE ATT&CK'],
    handsOn: ['Red Team Simulation']
  },
  {
    num: 9, title: 'Advanced Exploitation', icon: Brain, difficulty: 'Expert', hours: 40, labs: 20, projects: 3,
    badge: 'Exploit Engineer',
    topics: ['Buffer Overflow', 'Binary Exploitation', 'Reverse Engineering', 'Windows Internals', 'Linux Exploitation', 'Cloud Exploitation', 'Active Directory Attacks', 'Kerberos', 'Container Security'],
    handsOn: ['Exploit Development Lab']
  },
  {
    num: 10, title: 'Professional Certifications', icon: Award, difficulty: 'Expert', hours: 50, labs: 30, projects: 6,
    badge: 'Offensive Security Professional',
    topics: ['CEH', 'PNPT', 'eJPT', 'OSCP', 'CRTO', 'CRTP', 'CPTS', 'CBBH'],
    handsOn: ['Portfolio Builder', 'Resume Workshop', 'Interview Preparation']
  }
];

const CERTS = ['CEH', 'PNPT', 'eJPT', 'OSCP', 'CRTO', 'CRTP', 'CPTS', 'CBBH'];

const DIFFICULTY_COLORS = {
  Easy: '#22c55e',
  Medium: '#f59e0b',
  Hard: '#ef4444',
  Expert: '#a855f7',
};

export default function OffensiveRoadmap({ onBack, onNavigate }) {
  const [expandedLevel, setExpandedLevel] = useState(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (timelineRef.current) {
      const nodes = timelineRef.current.querySelectorAll('.timeline-node');
      gsap.fromTo(nodes, { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out'
      });
    }
  }, []);

  return (
    <div className="offensive-dashboard-wrapper select-none">
      <Header view="offensive" onBack={onBack} />

      <div className="offensive-dashboard">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-section">
            <span className="sidebar-section-title">LEARNING PATHS</span>
            <div className="sidebar-paths-list">
              <div className="sidebar-path-item active" onClick={() => onNavigate('offensive-detail')}>
                <Swords size={16} /><span>Offensive Security</span>
              </div>
              <div className="sidebar-path-item" onClick={() => onNavigate('defensive-roadmap')}>
                <Shield size={16} /><span>Defensive Security</span>
              </div>
            </div>
          </div>

          {/* Quick Level Nav */}
          <div className="sidebar-section" style={{ marginTop: '12px' }}>
            <span className="sidebar-section-title">ROADMAP LEVELS</span>
            <div className="rm-level-nav">
              {LEVELS.map(l => (
                <div key={l.num}
                  className="rm-level-nav-item"
                  onClick={() => setExpandedLevel(expandedLevel === l.num ? null : l.num)}
                >
                  <span className="rm-level-nav-num">{String(l.num).padStart(2, '0')}</span>
                  <span className="rm-level-nav-title">{l.title}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="dashboard-main-wrapper">
          {/* Breadcrumbs */}
          <nav className="dashboard-breadcrumbs">
            <span className="breadcrumb-link" onClick={() => onNavigate('offensive-detail')}>Offensive Security</span>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-active">Learning Roadmap</span>
          </nav>

          {/* Hero */}
          <section className="rm-hero">
            <div className="rm-hero-content">
              <h1 className="rm-hero-title">Become an Offensive Security Specialist</h1>
              <p className="rm-hero-desc">
                Master the mindset of an ethical hacker. Learn how attackers discover vulnerabilities,
                exploit systems ethically, and strengthen security.
              </p>
              <div className="rm-hero-progression">
                {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((stage, idx) => (
                  <React.Fragment key={stage}>
                    <span className="rm-stage active">{stage}</span>
                    {idx < 3 && <span className="rm-stage-arrow">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="rm-timeline-section" ref={timelineRef}>
            <h2 className="rm-section-title"><span className="rm-red-bar"></span>Learning Roadmap</h2>

            <div className="rm-timeline">
              {LEVELS.map((level, idx) => {
                const LevelIcon = level.icon;
                const isExpanded = expandedLevel === level.num;
                return (
                  <div key={level.num} className="timeline-node">
                    {/* Connector Line */}
                    {idx > 0 && <div className="timeline-connector"></div>}

                    {/* Node Circle */}
                    <div className="timeline-circle">
                      <LevelIcon size={18} />
                    </div>

                    {/* Node Content Card */}
                    <div className={`timeline-card ${isExpanded ? 'expanded' : ''}`} onClick={() => setExpandedLevel(isExpanded ? null : level.num)}>
                      <div className="timeline-card-header">
                        <div className="timeline-card-level">LEVEL {level.num}</div>
                        <div className="timeline-card-title-row">
                          <h3>{level.title}</h3>
                          <span className="timeline-difficulty" style={{ color: DIFFICULTY_COLORS[level.difficulty], borderColor: DIFFICULTY_COLORS[level.difficulty] + '40' }}>{level.difficulty}</span>
                        </div>
                        <div className="timeline-card-meta">
                          <span><Clock size={12} /> {level.hours} Hours</span>
                          <span><Beaker size={12} /> {level.labs} Labs</span>
                          <span><FolderGit2 size={12} /> {level.projects} Projects</span>
                        </div>
                      </div>

                      {/* Expand Arrow */}
                      <div className="timeline-expand-toggle">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>

                      {/* Expandable Details */}
                      {isExpanded && (
                        <div className="timeline-card-details">
                          <div className="timeline-detail-col">
                            <h4>Topics</h4>
                            <ul className="timeline-topic-list">
                              {level.topics.map((t, i) => (
                                <li key={i} style={{ color: 'var(--color-text-secondary)' }}>• {t}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="timeline-detail-col">
                            <h4>Hands-on Objectives</h4>
                            <ul className="timeline-topic-list">
                              {level.handsOn.map((h, i) => (
                                <li key={i} style={{ color: 'var(--color-text-secondary)' }}>• {h}</li>
                              ))}
                            </ul>
                            <div className="timeline-badge-row">
                              <Trophy size={14} style={{ color: '#f59e0b' }} />
                              <span>Milestone Badge: <strong>{level.badge}</strong></span>
                            </div>
                          </div>
                          
                          <button className="rm-btn-start">
                            <span>Open Module</span>
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Associated Certifications */}
          <section className="rm-cert-section">
            <h2 className="rm-section-title"><span className="rm-red-bar"></span>Associated Certifications</h2>
            <div className="rm-cert-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))' }}>
              {CERTS.map((c, idx) => (
                <div key={idx} className="rm-cert-card" style={{ textAlign: 'center', padding: '14px' }}>
                  <span className="rm-cert-name" style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>{c}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Back Button */}
          <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            <button className="rm-btn-back" onClick={() => onNavigate('offensive-detail')}>
              <ArrowLeft size={14} />
              <span>Back to Offensive Security</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
