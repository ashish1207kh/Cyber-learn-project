import React, { useState } from 'react';
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
  ArrowLeft, 
  Search, 
  Users, 
  Target, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Beaker, 
  FolderGit2,
  CheckCircle,
  TrendingUp,
  Terminal,
  Play,
  Flame,
  HelpCircle,
  BookMarked,
  Sparkles,
  ExternalLink,
  Laptop
} from 'lucide-react';
import Header from './Header';
import hackerImg from '../assets/cyber-hacker-red.jpg';

export default function OffensiveTopicDetail({ onBack, onNavigate }) {
  const [activeRoadmapTopic, setActiveRoadmapTopic] = useState('01');

  // Left Sidebar Paths
  const sidebarPaths = [
    { name: 'Offensive Security', icon: Swords, active: true },
    { name: 'Defensive Security', icon: Shield, active: false },
    { name: 'GNC (Governance, Risk & Compliance)', icon: Shield, active: false },
    { name: 'Purple Team', icon: Target, active: false }
  ];

  // Offensive Roadmap Topics (01 to 10)
  const roadmapTopics = [
    { num: '01', name: 'Penetration Testing' },
    { num: '02', name: 'Social Engineering' },
    { num: '03', name: 'OSINT Reconnaissance' },
    { num: '04', name: 'Exploitation Techniques' },
    { num: '05', name: 'Post-Exploitation' },
    { num: '06', name: 'Red Teaming' },
    { num: '07', name: 'Malware Development' },
    { num: '08', name: 'Web App Testing' },
    { num: '09', name: 'Wireless Attacks' },
    { num: '10', name: 'Reporting & Documentation' }
  ];

  return (
    <div className="offensive-dashboard-wrapper select-none">
      <Header view="offensive" onBack={onBack} />

      <div className="offensive-dashboard">
        {/* 1. Left Sidebar */}
        <aside className="dashboard-sidebar topic-sidebar">
          {/* Learning Paths */}
          <div className="sidebar-section">
            <span className="sidebar-section-title">LEARNING PATHS</span>
            <div className="sidebar-paths-list flex-column-gap">
              {sidebarPaths.map((path, idx) => {
                const PathIcon = path.icon;
                return (
                  <div 
                    key={idx} 
                    className={`sidebar-path-item ${path.active ? 'active' : ''}`}
                    onClick={() => {
                      if (path.name === 'Defensive Security') onNavigate('defensive-detail');
                      else if (path.name === 'Offensive Security') onNavigate('offensive-detail');
                    }}
                  >
                    <PathIcon size={14} />
                    <span>{path.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Offensive Roadmap */}
          <div className="sidebar-section" style={{ marginTop: '20px' }}>
            <span className="sidebar-section-title">OFFENSIVE ROADMAP</span>
            <div className="sidebar-menu-list">
              {roadmapTopics.map((topic, idx) => (
                <div 
                  key={idx} 
                  className={`sidebar-menu-item roadmap-item-btn ${activeRoadmapTopic === topic.num ? 'active' : ''}`}
                  onClick={() => {
                    setActiveRoadmapTopic(topic.num);
                    if (topic.num !== '01') {
                      // Navigate or handle other topics when clicked
                    }
                  }}
                >
                  <span className="roadmap-num-badge">{topic.num}</span>
                  <span>{topic.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Your Progress */}
          <div className="sidebar-progress-card topic-sidebar-progress" style={{ marginTop: '20px' }}>
            <span className="sidebar-section-title" style={{ paddingLeft: 0, marginBottom: '10px', display: 'block' }}>YOUR PROGRESS</span>
            <div className="progress-dial-container">
              <div className="progress-dial-outer">
                <svg className="progress-dial-svg" viewBox="0 0 100 100">
                  <circle className="progress-dial-bg" cx="50" cy="50" r="40" />
                  <circle className="progress-dial-fill" cx="50" cy="50" r="40" style={{ strokeDashoffset: '180.96' }} />
                </svg>
                <div className="progress-dial-value">
                  <span className="dial-percent">28%</span>
                  <span className="dial-label">Overall Completion</span>
                </div>
              </div>
            </div>
            <div className="progress-stats-mini">
              <div>Completed: <strong>2 / 10</strong></div>
              <div>Current Topic: <strong>Penetration Testing</strong></div>
            </div>
            <button className="btn-sidebar-progress btn-continue-learning" style={{ width: '100%', marginTop: '14px' }}>
              <span>Continue Learning</span>
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Next Topic Preview */}
          <div className="next-topic-preview-card" style={{ marginTop: '16px' }}>
            <div className="preview-label">NEXT TOPIC</div>
            <h4>02. Social Engineering</h4>
            <p>Unlocks after completion</p>
            <button className="btn-preview-view">
              <span>View Preview</span>
              <Play size={10} />
            </button>
          </div>

          {/* Quote Card */}
          <div className="sidebar-quote-card" style={{ marginTop: '16px' }}>
            <div className="quote-hacker-avatar">
              <div className="quote-avatar-glow"></div>
            </div>
            <p className="quote-text">
              "Ethical hacking is not about breaking systems, it's about strengthening them."
            </p>
          </div>
        </aside>

        {/* 2. Main Content Panel */}
        <div className="dashboard-main-wrapper topic-main-layout">
          {/* Breadcrumbs */}
          <nav className="dashboard-breadcrumbs">
            <span className="breadcrumb-link" onClick={() => onNavigate('landing')}>Roadmaps</span>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-link" onClick={() => onNavigate('offensive-detail')}>Offensive Security</span>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-active">01</span>
          </nav>

          {/* Grid Layout (Middle Content & Right Panel) */}
          <div className="topic-content-grid">
            {/* Middle Main Content */}
            <div className="topic-left-column">
              {/* Hero Section */}
              <section className="topic-hero-banner">
                <div className="topic-hero-left">
                  <div className="topic-badge-header">
                    <span className="topic-badge-number">01</span>
                    <div>
                      <h1 className="topic-main-title">Penetration Testing</h1>
                      <h3 className="topic-sub-title">Ethical Hacking</h3>
                    </div>
                  </div>
                  <p className="topic-hero-description">
                    Learn how professional ethical hackers think and perform authorized attacks to discover vulnerabilities before malicious hackers can exploit them. Master the art of penetration testing and secure real-world systems.
                  </p>
                  <div className="topic-badge-row">
                    <span className="hero-pill-badge">Beginner to Intermediate</span>
                    <span className="hero-pill-badge">Core Skill</span>
                    <span className="hero-pill-badge">High Demand</span>
                  </div>

                  {/* Core Metrics Row */}
                  <div className="topic-metrics-grid">
                    <div className="metric-box">
                      <span className="metric-val">10</span>
                      <span className="metric-lbl">Sub Topics</span>
                    </div>
                    <div className="metric-box">
                      <span className="metric-val">12+</span>
                      <span className="metric-lbl">Hands-on Labs</span>
                    </div>
                    <div className="metric-box">
                      <span className="metric-val">25+</span>
                      <span className="metric-lbl">Tools Covered</span>
                    </div>
                    <div className="metric-box">
                      <span className="metric-val">7</span>
                      <span className="metric-lbl">Real-world Scenarios</span>
                    </div>
                    <div className="metric-box">
                      <span className="metric-val">3</span>
                      <span className="metric-lbl">Certifications Recommended</span>
                    </div>
                  </div>
                </div>
                <div className="topic-hero-right-img">
                  <div className="hacker-hero-img-container">
                    <img src={hackerImg} alt="Hacker Red Hoodie" />
                  </div>
                </div>
              </section>

              {/* What is Pentesting */}
              <section className="topic-section-block">
                <h2 className="section-block-title">What is Penetration Testing?</h2>
                <div className="section-divider-red"></div>
                <p className="section-block-text">
                  Penetration testing—or <strong>pentesting</strong>—is an authorized, simulated cyberattack against an organization's IT infrastructure (networks, applications, and systems) to discover security vulnerabilities before malicious hackers can exploit them. Think of it as hiring a security expert to audit your home's security by attempting a controlled break-in.
                </p>

                {/* Pentesting Concept Process Flow */}
                <div className="pentest-flow-row">
                  <div className="flow-step-card">
                    <div className="flow-step-icon-outer">
                      <Terminal size={18} style={{ color: '#ef4444' }} />
                    </div>
                    <h4>Attacker</h4>
                    <p>(Think)</p>
                  </div>
                  <div className="flow-connector-line"></div>
                  <div className="flow-step-card active">
                    <div className="flow-step-icon-outer">
                      <Laptop size={18} style={{ color: '#ef4444' }} />
                    </div>
                    <h4>Penetration Testing</h4>
                    <p>(Simulate)</p>
                  </div>
                  <div className="flow-connector-line"></div>
                  <div className="flow-step-card">
                    <div className="flow-step-icon-outer">
                      <Shield size={18} style={{ color: '#ef4444' }} />
                    </div>
                    <h4>Stronger Defense</h4>
                    <p>(Secure)</p>
                  </div>
                </div>
              </section>

              {/* Career Path & Blueprint */}
              <section className="topic-section-block">
                <h2 className="section-block-title">Career Path & Blueprint</h2>
                <div className="section-divider-red"></div>
                <p className="section-block-text">
                  Build a successful career in cybersecurity by mastering penetration testing. High demand, great opportunities, and rewarding salaries await you.
                </p>
                <div className="blueprint-grid">
                  <div className="blueprint-card">
                    <div className="blueprint-card-header">
                      <Users size={16} style={{ color: '#ef4444' }} />
                      <h4>Potential Job Roles</h4>
                    </div>
                    <ul>
                      <li>Junior Penetration Tester</li>
                      <li>Ethical Hacker</li>
                      <li>Security Consultant</li>
                      <li>Vulnerability Analyst</li>
                    </ul>
                  </div>

                  <div className="blueprint-card">
                    <div className="blueprint-card-header">
                      <TrendingUp size={16} style={{ color: '#ef4444' }} />
                      <h4>Average Entry Salary</h4>
                    </div>
                    <div className="blueprint-salary-value">
                      $75,000 - $105,000
                    </div>
                    <div className="blueprint-salary-sub">USD / year</div>
                    <div className="blueprint-salary-region">(varies by region)</div>
                  </div>

                  <div className="blueprint-card">
                    <div className="blueprint-card-header">
                      <BookMarked size={16} style={{ color: '#ef4444' }} />
                      <h4>Core Skills Required</h4>
                    </div>
                    <ul>
                      <li>Networking (TCP/IP)</li>
                      <li>Linux / Windows Admin</li>
                      <li>Scripting (Python, Bash)</li>
                      <li>Problem Solving</li>
                      <li>Analytical Thinking</li>
                    </ul>
                  </div>

                  <div className="blueprint-card text-center flex-center-column">
                    <div className="blueprint-growth-icon">
                      <Activity size={24} style={{ color: '#ef4444' }} />
                    </div>
                    <h4>Career Growth</h4>
                    <div className="growth-badge">High Demand & Growth</div>
                    <p>Excellent Career Prospects</p>
                  </div>
                </div>
              </section>

              {/* The 5 Core Phases of a Pentest */}
              <section className="topic-section-block">
                <h2 className="section-block-title">The 5 Core Phases of a Pentest</h2>
                <div className="section-divider-red"></div>
                <p className="section-block-text">
                  A professional penetration test follows a structured methodology to ensure maximum effectiveness.
                </p>
                <div className="phases-flow-grid">
                  {[
                    { num: '01', title: 'Planning & Reconnaissance', desc: 'Define scope, gather information, and collect intelligence using OSINT.', label: 'Foundation' },
                    { num: '02', title: 'Scanning & Enumeration', desc: 'Actively scan target systems to identify open ports, services, and vulnerabilities.', label: 'Information Gathering' },
                    { num: '03', title: 'Gaining Access (Exploitation)', desc: 'Exploit vulnerabilities to gain initial access and execute code.', label: 'Exploitation' },
                    { num: '04', title: 'Maintaining Access (Persistence)', desc: 'Maintain access, escalate privileges, and move laterally within the network.', label: 'Post-Exploitation' },
                    { num: '05', title: 'Analysis & Reporting', desc: 'Analyze findings, clean up footprints, and deliver detailed security report.', label: 'Reporting' }
                  ].map((phase, idx) => (
                    <div key={idx} className="phase-node-card">
                      <div className="phase-node-header">
                        <span className="phase-node-num">{phase.num}</span>
                        <h4>{phase.title}</h4>
                      </div>
                      <p className="phase-node-desc">{phase.desc}</p>
                      <div className="phase-badge-tag">{phase.label}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Essential Testing Tools */}
              <section className="topic-section-block">
                <h2 className="section-block-title">Essential Testing Tools (Top 5)</h2>
                <div className="section-divider-red"></div>
                <p className="section-block-text">
                  Master these essential tools used by professional penetration testers.
                </p>
                <div className="tools-grid-5">
                  {[
                    { name: 'Nmap', cat: 'Network Scanning', desc: 'Discovers hosts, services, and vulnerabilities on network systems.' },
                    { name: 'Burp Suite', cat: 'Web Application', desc: 'Intercepts and analyzes web traffic to find web application vulnerabilities.' },
                    { name: 'Metasploit', cat: 'Exploitation Framework', desc: 'Develop, test, and execute exploits against target systems.' },
                    { name: 'Wireshark', cat: 'Network Analysis', desc: 'Analyzes network packets and protocols in real-time for insights.' },
                    { name: 'John the Ripper', cat: 'Password Cracking', desc: 'Cracks passwords and hashes using various attack methods.' }
                  ].map((tool, idx) => (
                    <div key={idx} className="tool-card-v2">
                      <div className="tool-card-icon-v2">
                        <Terminal size={18} />
                      </div>
                      <h4>{tool.name}</h4>
                      <span className="tool-card-cat">{tool.cat}</span>
                      <p className="tool-card-desc-v2">{tool.desc}</p>
                      <button className="tool-btn-learn">
                        <span>Learn More</span>
                        <ArrowRight size={10} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recommended Certifications */}
              <section className="topic-section-block">
                <h2 className="section-block-title">Recommended Certifications</h2>
                <div className="section-divider-red"></div>
                <p className="section-block-text">
                  Boost your career with industry-recognized certifications.
                </p>
                <div className="recommended-certs-grid">
                  {[
                    { name: 'eJPT', full: 'ElearnSecurity Junior Penetration Tester', desc: 'Perfect start for beginners with hands-on approach.', diff: 'Beginner' },
                    { name: 'CEH', full: 'Certified Ethical Hacker', desc: 'Industry recognized certification for ethical hacking professionals.', diff: 'Beginner' },
                    { name: 'PenTest+', full: 'CompTIA PenTest+', desc: 'Covers penetration testing techniques and security management.', diff: 'Intermediate' }
                  ].map((cert, idx) => (
                    <div key={idx} className="recommended-cert-card-v2">
                      <div className="cert-badge-icon-v2">
                        <Award size={18} />
                      </div>
                      <div className="recommended-cert-text">
                        <h4>{cert.name}</h4>
                        <span className="recommended-cert-fullname">{cert.full}</span>
                        <p>{cert.desc}</p>
                        <div className="recommended-cert-difficulty">
                          <span>Difficulty: </span>
                          <strong>{cert.diff}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar Panel */}
            <div className="topic-right-column">
              {/* What You'll Learn */}
              <div className="right-panel-card">
                <h3>What You'll Learn</h3>
                <ul className="learn-checklist">
                  <li>
                    <CheckCircle size={14} className="check-icon" />
                    <span>Penetration testing methodologies and best practices</span>
                  </li>
                  <li>
                    <CheckCircle size={14} className="check-icon" />
                    <span>Information gathering and reconnaissance techniques</span>
                  </li>
                  <li>
                    <CheckCircle size={14} className="check-icon" />
                    <span>Vulnerability scanning and enumeration</span>
                  </li>
                  <li>
                    <CheckCircle size={14} className="check-icon" />
                    <span>Exploitation techniques and tools usage</span>
                  </li>
                  <li>
                    <CheckCircle size={14} className="check-icon" />
                    <span>Post-exploitation and privilege escalation</span>
                  </li>
                  <li>
                    <CheckCircle size={14} className="check-icon" />
                    <span>Professional reporting and remediation</span>
                  </li>
                  <li>
                    <CheckCircle size={14} className="check-icon" />
                    <span>Real-world scenarios and hands-on labs</span>
                  </li>
                </ul>
              </div>

              {/* Ready to Start? */}
              <div className="right-panel-card ready-start-card">
                <h3>Ready to Start?</h3>
                <p>Begin your penetration testing journey and become an ethical hacking professional.</p>
                <button className="btn-ready-start">
                  <span>Start Learning</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Quick Stats */}
              <div className="right-panel-card quick-stats-card">
                <h3>Quick Stats</h3>
                <div className="quick-stat-item">
                  <Clock size={14} />
                  <div>
                    <span>Estimated Time</span>
                    <strong>25-30 Hours</strong>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <TrendingUp size={14} />
                  <div>
                    <span>Difficulty Level</span>
                    <strong>Beginner to Intermediate</strong>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <Laptop size={14} />
                  <div>
                    <span>Prerequisites</span>
                    <strong>Networking Basics, Linux Fundamentals</strong>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <ArrowRight size={14} />
                  <div>
                    <span>Next Topic</span>
                    <strong>02. Social Engineering</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
