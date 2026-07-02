import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  Shield, Swords, Network, Terminal, Code2, Globe2, Crosshair,
  Target, Skull, Brain, Award, ArrowRight, ArrowLeft,
  Clock, Beaker, FolderGit2, ChevronDown, ChevronUp, Trophy,
  ShieldAlert, ShieldCheck, Radar, ScanSearch, MonitorCheck, Eye, BugOff
} from 'lucide-react';
import Header from './Header';

const LEVELS = [
  {
    num: 1, title: 'SIEM Monitoring', icon: Radar, difficulty: 'Medium', hours: 20, labs: 16, projects: 4,
    badge: 'SIEM Analyst',
    topics: ['SIEM Concepts', 'Splunk', 'Microsoft Sentinel', 'ELK Stack', 'QRadar', 'Log Sources', 'Correlation Rules', 'Detection Rules', 'Dashboards', 'Alert Tuning'],
    handsOn: ['Create SIEM Dashboard', 'Write Detection Rules']
  },
  {
    num: 2, title: 'Incident Response', icon: ShieldAlert, difficulty: 'Hard', hours: 25, labs: 20, projects: 4,
    badge: 'Incident Responder',
    topics: ['Preparation', 'Identification', 'Containment', 'Eradication', 'Recovery', 'Lessons Learned', 'Playbooks', 'Crisis Management', 'Communication', 'Reporting'],
    handsOn: ['Ransomware Response', 'SOC Simulation']
  },
  {
    num: 3, title: 'Threat Intelligence', icon: ScanSearch, difficulty: 'Hard', hours: 22, labs: 18, projects: 3,
    badge: 'Threat Hunter',
    topics: ['Threat Intelligence', 'MITRE ATT&CK', 'IOC', 'IOA', 'Threat Hunting', 'YARA', 'Sigma Rules', 'Detection Engineering', 'Behavior Analytics', 'Anomaly Detection'],
    handsOn: ['Threat Hunting', 'IOC Analysis']
  },
  {
    num: 4, title: 'Digital Forensics', icon: Eye, difficulty: 'Expert', hours: 30, labs: 24, projects: 3,
    badge: 'Digital Investigator',
    topics: ['Memory Forensics', 'Disk Forensics', 'Network Forensics', 'Email Analysis', 'Malware Analysis', 'Evidence Collection', 'Chain of Custody', 'Timeline Analysis', 'Autopsy', 'Volatility'],
    handsOn: ['Investigate Security Incident', 'Memory Analysis']
  },
  {
    num: 5, title: 'Network Security', icon: Network, difficulty: 'Medium', hours: 18, labs: 15, projects: 3,
    badge: 'Network Defender',
    topics: ['TCP/IP', 'OSI Model', 'Routing', 'Switching', 'Firewalls', 'VPN', 'IDS', 'IPS', 'DNS', 'DHCP'],
    handsOn: ['Packet Analysis', 'Firewall Rules', 'Network Monitoring']
  },
  {
    num: 6, title: 'Vulnerability Management', icon: ShieldCheck, difficulty: 'Medium', hours: 15, labs: 12, projects: 2,
    badge: 'Vuln Analyst',
    topics: ['Vulnerability Scanning', 'Nessus', 'Qualys', 'OpenVAS', 'CVSS', 'Patching Strategies', 'Risk Assessment', 'Reporting', 'Remediation', 'Compliance'],
    handsOn: ['Run Vulnerability Scans', 'Analyze Reports']
  },
  {
    num: 7, title: 'Endpoint Security', icon: Terminal, difficulty: 'Medium', hours: 16, labs: 14, projects: 3,
    badge: 'Endpoint Guardian',
    topics: ['Windows Administration', 'Linux Administration', 'EDR', 'XDR', 'Antivirus', 'System Hardening', 'Active Directory Basics', 'Group Policies', 'Permissions', 'Services'],
    handsOn: ['Secure Windows', 'Secure Linux']
  },
  {
    num: 8, title: 'Log Analysis', icon: MonitorCheck, difficulty: 'Medium', hours: 18, labs: 15, projects: 3,
    badge: 'Log Analyst',
    topics: ['Security Monitoring', 'Event Collection', 'Security Alerts', 'Endpoint Monitoring', 'Syslog', 'Windows Event Logs', 'Audit Logs', 'SOC Workflow', 'Monitoring Strategies'],
    handsOn: ['Monitor Logs', 'Analyze Alerts']
  },
  {
    num: 9, title: 'Patch Management', icon: Shield, difficulty: 'Easy', hours: 10, labs: 8, projects: 1,
    badge: 'Patch Administrator',
    topics: ['Patch Lifecycle', 'WSUS', 'SCCM', 'Linux Package Managers', 'Automated Patching', 'Testing Patches', 'Rollbacks', 'Downtime Management'],
    handsOn: ['Deploy Patches', 'Manage Updates']
  },
  {
    num: 10, title: 'User Awareness Training', icon: Award, difficulty: 'Easy', hours: 10, labs: 5, projects: 2,
    badge: 'Security Educator',
    topics: ['Phishing Simulations', 'Social Engineering Awareness', 'Password Policies', 'MFA', 'Data Privacy', 'Compliance Training', 'Insider Threats', 'Reporting Incidents'],
    handsOn: ['Create Phishing Campaign', 'Analyze User Behavior']
  }
];

const CERTS = ['Security+', 'CySA+', 'BTL1', 'SC-200', 'SC-300', 'Splunk User', 'eCDFP', 'GCIA', 'GCFA'];

const DIFFICULTY_COLORS = {
  Easy: '#22c55e',
  Medium: '#f59e0b',
  Hard: '#ef4444',
  Expert: '#a855f7',
};

export default function DefensiveRoadmap({ onBack, onNavigate }) {
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
    <div className="defensive-dashboard-wrapper select-none">
      <Header view="defensive" onBack={onBack} />

      <div className="defensive-dashboard">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-section">
            <span className="sidebar-section-title">LEARNING PATHS</span>
            <div className="sidebar-paths-list">
              <div className="sidebar-path-item-blue" onClick={() => onNavigate('offensive-roadmap')}>
                <Swords size={16} /><span>Offensive Security</span>
              </div>
              <div className="sidebar-path-item-blue active" onClick={() => onNavigate('defensive-detail')}>
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
            <span className="breadcrumb-link" onClick={() => onNavigate('defensive-detail')}>Defensive Security</span>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-active-blue">Learning Roadmap</span>
          </nav>

          {/* Hero */}
          <section className="rm-hero rm-hero-blue">
            <div className="rm-hero-content">
              <h1 className="rm-hero-title rm-hero-title-blue">Become a Defensive Security Specialist</h1>
              <p className="rm-hero-desc">
                Master the art of defending organizations against cyber threats.
                Learn to monitor, detect, analyze, respond, and recover from attacks.
              </p>
              <div className="rm-hero-progression">
                {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((stage, idx) => (
                  <React.Fragment key={stage}>
                    <span className="rm-stage active-blue">{stage}</span>
                    {idx < 3 && <span className="rm-stage-arrow">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="rm-timeline-section" ref={timelineRef}>
            <h2 className="rm-section-title"><span className="rm-blue-bar"></span>Learning Roadmap</h2>

            <div className="rm-timeline">
              {LEVELS.map((level, idx) => {
                const LevelIcon = level.icon;
                const isExpanded = expandedLevel === level.num;
                return (
                  <div key={level.num} className="timeline-node">
                    {/* Connector Line */}
                    {idx > 0 && <div className="timeline-connector completed-blue"></div>}

                    {/* Node Circle */}
                    <div className="timeline-circle completed-blue">
                      <LevelIcon size={18} />
                    </div>

                    {/* Node Content Card */}
                    <div className={`timeline-card timeline-card-blue ${isExpanded ? 'expanded' : ''}`} onClick={() => setExpandedLevel(isExpanded ? null : level.num)}>
                      <div className="timeline-card-header">
                        <div className="timeline-card-level timeline-card-level-blue">LEVEL {level.num}</div>
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
                            <h4>Hands-on Labs</h4>
                            <ul className="timeline-topic-list">
                              {level.handsOn.map((h, i) => (
                                <li key={i} style={{ color: 'var(--color-text-secondary)' }}>• {h}</li>
                              ))}
                            </ul>
                            <div className="timeline-badge-row timeline-badge-row-blue">
                              <Trophy size={14} style={{ color: '#0088ff' }} />
                              <span>Milestone Badge: <strong>{level.badge}</strong></span>
                            </div>
                          </div>
                          
                          <button 
                            className="rm-btn-start rm-btn-start-blue"
                            onClick={(e) => {
                              e.stopPropagation();
                              onNavigate('defensive-topic-detail', String(level.num).padStart(2, '0'));
                            }}
                          >
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
            <h2 className="rm-section-title"><span className="rm-blue-bar"></span>Associated Certifications</h2>
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
            <button className="rm-btn-back" onClick={() => onNavigate('defensive-detail')}>
              <ArrowLeft size={14} />
              <span>Back to Defensive Security</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
