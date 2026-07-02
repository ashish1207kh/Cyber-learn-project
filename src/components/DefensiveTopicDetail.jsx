import React from 'react';
import { 
  Swords, Shield, BookOpen, Trophy, Award, Bookmark, FileText, Activity, 
  Settings, ArrowRight, ArrowLeft, ArrowDown, Search, Users, Target, 
  ChevronDown, ChevronUp, Clock, Beaker, FolderGit2, CheckCircle, 
  TrendingUp, Terminal, Play, Laptop, Globe, Database, Key, Code, 
  Wifi, Router, Unlock, Package, Satellite, TerminalSquare, Server, Radar, ShieldCheck, MonitorCheck, Eye, ShieldAlert
} from 'lucide-react';
import Header from './Header';
import hackerImg from '../assets/cyber-hacker-red.jpg';

export const DEFENSIVE_TOPICS = {
  '01': {
    num: '01',
    title: 'SIEM Monitoring',
    subtitle: 'Security Information and Event Management',
    description: "SIEM stands for Security Information and Event Management. Think of it as the central nervous system or the 24/7 security camera room of an organization's digital network.",
    badges: ["Beginner to Intermediate", "Core Skill", "High Demand"],
    metrics: [
      { val: "4", lbl: "Roadmap Steps" },
      { val: "3", lbl: "Core Platforms" },
      { val: "24/7", lbl: "Monitoring" },
      { val: "4", lbl: "Certifications" },
      { val: "5", lbl: "Job Roles" }
    ],
    conceptTitle: "What is SIEM Monitoring?",
    conceptText: "SIEM monitoring involves using specialized software tools (like Splunk, Microsoft Sentinel, or IBM QRadar) to automatically gather and aggregate log data, metrics, and security alerts from across an entire company—servers, firewalls, routers, and employee laptops. Analysts monitor this live data stream to detect unusual activity, flag potential cyberattacks in real time, and investigate security breaches before they cause severe damage.",
    conceptFlow: [
      { title: "Log Sources", sub: "(Raw Data)", icon: Server },
      { title: "SIEM Engine", sub: "(Correlation)", icon: Database, active: true },
      { title: "SOC Analysts", sub: "(Detection)", icon: ShieldAlert }
    ],
    blueprintDesc: "The scope of SIEM monitoring is massive and ever-growing. Since every modern company generates data and faces cyber threats, SIEM is a non-negotiable core component of any corporate Security Operations Center (SOC).",
    blueprintCards: [
      {
        icon: Users,
        title: "Potential Job Roles",
        list: ["SOC Analyst (Tier 1/L1, L2, L3)", "SIEM Administrator", "Detection Engineer", "Security Engineer", "SIEM Architect"]
      },
      {
        icon: TrendingUp,
        title: "Average Entry Salary",
        salary: "₹3.5 LPA - ₹6.5 LPA",
        salarySub: "INR / year",
        salaryRegion: "(Fresher / Trainee)"
      },
      {
        icon: Globe,
        title: "Industries Hiring",
        list: ["Banking & Finance", "Healthcare", "E-commerce", "Cloud Service Providers", "MSSPs"]
      },
      {
        icon: Activity,
        title: "Is It Worth It?",
        growthBadge: "Absolutely Worth It",
        desc: "Best entry point into the cybersecurity industry. Legally required compliance guarantees job security."
      }
    ],
    phasesTitle: "Step-by-Step Roadmap",
    phasesDesc: "To become a professional SIEM Monitoring Analyst, follow this clear pathway:",
    phases: [
      { num: '01', title: 'Core Fundamentals', desc: 'Master basic Networking concepts (OSI Model, TCP/IP, IP addressing). Learn Operating System basics (Linux commands and Windows Event Logs).', label: 'Foundation' },
      { num: '02', title: 'Security & Log Basics', desc: 'Learn what common security devices do (Firewalls, IDS/IPS, EDR). Understand how to read common log files (Syslog, HTTP logs, Auth logs).', label: 'Log Analysis' },
      { num: '03', title: 'Master SIEM Tooling', desc: 'Get hands-on experience with market-leading platforms. Create free lab environments for Splunk or Microsoft Sentinel. Practice writing basic log queries (SPL, KQL).', label: 'Hands-on Lab' },
      { num: '04', title: 'Certifications to Stand Out', desc: 'Acquire industry certifications to boost your resume and prove your skills to employers.', label: 'Validation' }
    ],
    toolsTitle: "Essential SIEM Tools",
    toolsDesc: "Master these essential platforms used by modern Security Operations Centers.",
    tools: [
      { name: 'Splunk', cat: 'SIEM Platform', desc: 'The industry-leading platform for searching, monitoring, and analyzing machine-generated big data.' },
      { name: 'Microsoft Sentinel', cat: 'Cloud SIEM', desc: 'A scalable, cloud-native SIEM and SOAR solution from Microsoft.' },
      { name: 'IBM QRadar', cat: 'Enterprise SIEM', desc: 'Provides comprehensive visibility into enterprise network activity and detects threats.' },
      { name: 'Elastic Stack', cat: 'Log Management', desc: 'Open-source stack (ELK) for searching, analyzing, and visualizing log data in real-time.' }
    ],
    certs: [
      { name: 'Security+', full: 'CompTIA Security+', desc: 'Global certification that validates the baseline skills necessary to perform core security functions.', diff: 'Beginner' },
      { name: 'Splunk User', full: 'Splunk Core Certified Power User', desc: 'Validates foundational knowledge of Splunk search and reporting commands.', diff: 'Beginner' },
      { name: 'CySA+', full: 'CompTIA Cybersecurity Analyst+', desc: 'Applies behavioral analytics to networks and devices to prevent, detect and combat cybersecurity threats.', diff: 'Intermediate' },
      { name: 'SC-200', full: 'Microsoft Security Operations Analyst', desc: 'Validates skills in mitigating threats using Microsoft Sentinel, Microsoft 365 Defender, and Azure Defender.', diff: 'Intermediate' }
    ],
    learnList: [
      "Mastering basic Networking concepts (OSI Model, TCP/IP)",
      "Learning Operating System basics (Linux commands, Windows Logs)",
      "Understanding common security devices (Firewalls, IDS/IPS, EDR)",
      "Reading common log files (Syslog, HTTP, Authentication logs)",
      "Creating lab environments for Splunk and Sentinel",
      "Writing basic log queries (SPL for Splunk, KQL for Sentinel)"
    ],
    readyText: "Gaining practical lab experience or premium vendor certifications can boost entry-level offers significantly.",
    stats: {
      time: "20-30 Hours",
      diff: "Beginner to Intermediate",
      prereq: "Networking Basics, Linux Fundamentals",
      next: "02. Cyber Security Fundamentals",
      nextNum: "02"
    }
  }
};

export default function DefensiveTopicDetail({ topicId = '01', onBack, onNavigate }) {
  const [activeRoadmapTopic, setActiveRoadmapTopic] = React.useState(topicId);

  React.useEffect(() => {
    setActiveRoadmapTopic(topicId);
  }, [topicId]);

  const activeTopic = DEFENSIVE_TOPICS[activeRoadmapTopic] || DEFENSIVE_TOPICS['01'];

  const sidebarPaths = [
    { name: 'Offensive Security', icon: Swords, active: false, id: 'offensive-detail' },
    { name: 'Defensive Security', icon: ShieldCheck, active: true, id: 'defensive-detail' },
    { name: 'GNC (Governance, Risk & Compliance)', icon: Shield, active: false },
    { name: 'Purple Team', icon: Target, active: false }
  ];

  const roadmapTopics = [
    { num: '01', name: 'SIEM Monitoring' },
    { num: '02', name: 'Cyber Security Fundamentals' },
    { num: '03', name: 'Networking & Security Basics' },
    { num: '04', name: 'Windows & Linux Administration' },
    { num: '05', name: 'Security Monitoring' },
    { num: '06', name: 'Threat Detection' },
    { num: '07', name: 'Incident Response' },
    { num: '08', name: 'Digital Forensics' },
    { num: '09', name: 'Blue Team Operations' },
    { num: '10', name: 'Professional Certifications' }
  ];

  return (
    <div className="offensive-dashboard-wrapper select-none defensive-theme">
      <Header view="defensive" onBack={onBack} />

      <div className="offensive-dashboard">
        <aside className="dashboard-sidebar">
          <div className="sidebar-section">
            <span className="sidebar-section-title">LEARNING PATHS</span>
            <div className="sidebar-paths-list">
              {sidebarPaths.map(path => (
                <div 
                  key={path.name} 
                  className={`sidebar-path-item ${path.active ? 'active' : ''}`}
                  onClick={() => path.id && onNavigate(path.id)}
                  style={{ cursor: path.id ? 'pointer' : 'default' }}
                >
                  <path.icon size={16} /><span>{path.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <span className="sidebar-section-title">ROADMAP MODULES</span>
            <div className="sidebar-modules-list">
              {roadmapTopics.map(topic => (
                <div 
                  key={topic.num} 
                  className={`sidebar-module-item ${activeRoadmapTopic === topic.num ? 'active' : ''}`}
                  onClick={() => onNavigate('defensive-topic-detail', topic.num)}
                >
                  <span className="module-num">{topic.num}</span>
                  <span className="module-name">{topic.name}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="dashboard-main-wrapper">
          <nav className="dashboard-breadcrumbs">
            <span className="breadcrumb-link" onClick={() => onNavigate('defensive-detail')}>Defensive Security</span>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-link" onClick={() => onNavigate('defensive-roadmap')}>Learning Roadmap</span>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-active">{activeTopic.title}</span>
          </nav>

          <div className="topic-main-area">
            <div className="topic-header-card">
              <div className="topic-header-bg-image" style={{ backgroundImage: `url(${hackerImg})`, filter: 'hue-rotate(180deg)' }}></div>
              <div className="topic-header-content">
                <div className="topic-header-badge">Module {activeTopic.num}</div>
                <h1>{activeTopic.title}</h1>
                <h3>{activeTopic.subtitle}</h3>
                <p>{activeTopic.description}</p>
                <div className="topic-badges">
                  {activeTopic.badges.map(b => (
                    <span key={b} className="topic-pill"><ShieldCheck size={12}/> {b}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="topic-details-grid">
              <section className="topic-section-block">
                <div className="metrics-row">
                  {activeTopic.metrics.map((m, idx) => (
                    <div key={idx} className="metric-box">
                      <span className="metric-val">{m.val}</span>
                      <span className="metric-lbl">{m.lbl}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="topic-section-block">
                <h2 className="section-block-title">What You Will Learn</h2>
                <div className="section-divider-red"></div>
                <ul className="learning-checklist">
                  {activeTopic.learnList.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="topic-section-block">
                <h2 className="section-block-title">{activeTopic.conceptTitle}</h2>
                <div className="section-divider-red"></div>
                <p className="section-block-text">
                  {activeTopic.conceptText}
                </p>

                <div className="pentest-flow-row">
                  {activeTopic.conceptFlow.map((step, i) => {
                    const StepIcon = step.icon;
                    return (
                      <React.Fragment key={i}>
                        {i > 0 && <div className="flow-connector-line"></div>}
                        <div className={`flow-step-card ${step.active ? 'active' : ''}`}>
                          <div className="flow-step-icon-outer">
                            <StepIcon size={18} />
                          </div>
                          <h4>{step.title}</h4>
                          <p>{step.sub}</p>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </section>

              <section className="topic-section-block">
                <h2 className="section-block-title">Career Path & Blueprint</h2>
                <div className="section-divider-red"></div>
                <p className="section-block-text">
                  {activeTopic.blueprintDesc}
                </p>
                <div className="blueprint-grid">
                  {activeTopic.blueprintCards.map((card, i) => {
                    const CardIcon = card.icon;
                    return (
                      <div key={i} className={`blueprint-card ${card.salary ? '' : 'flex-center-column'}`}>
                        <div className="blueprint-card-header">
                          <CardIcon size={16} />
                          <h4>{card.title}</h4>
                        </div>
                        {card.list && (
                          <ul>
                            {card.list.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        )}
                        {card.salary && (
                          <>
                            <div className="blueprint-salary-value">{card.salary}</div>
                            <div className="blueprint-salary-sub">{card.salarySub}</div>
                            <div className="blueprint-salary-region">{card.salaryRegion}</div>
                          </>
                        )}
                        {card.growthBadge && (
                          <>
                            <div className="blueprint-growth-icon">
                              <Activity size={24} />
                            </div>
                            <div className="growth-badge">{card.growthBadge}</div>
                            <p>{card.desc}</p>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="topic-section-block">
                <h2 className="section-block-title">{activeTopic.phasesTitle}</h2>
                <div className="section-divider-red"></div>
                <p className="section-block-text">
                  {activeTopic.phasesDesc}
                </p>
                <div className="phases-flow-grid">
                  {activeTopic.phases.map((phase, idx) => (
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

              <section className="topic-section-block">
                <h2 className="section-block-title">{activeTopic.toolsTitle}</h2>
                <div className="section-divider-red"></div>
                <p className="section-block-text">
                  {activeTopic.toolsDesc}
                </p>
                <div className="tools-grid-5">
                  {activeTopic.tools.map((tool, idx) => (
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

              <section className="topic-section-block">
                <h2 className="section-block-title">Recommended Certifications</h2>
                <div className="section-divider-red"></div>
                <p className="section-block-text">
                  Boost your career with industry-recognized certifications.
                </p>
                <div className="recommended-certs-grid">
                  {activeTopic.certs.map((cert, idx) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}
