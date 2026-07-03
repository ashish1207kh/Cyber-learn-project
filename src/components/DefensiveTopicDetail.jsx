import React from 'react';
import { 
  Swords, Shield, BookOpen, Trophy, Award, Bookmark, FileText, Activity, 
  Settings, ArrowRight, ArrowLeft, ArrowDown, Search, Users, Target, 
  ChevronDown, ChevronUp, Clock, Beaker, FolderGit2, CheckCircle, 
  TrendingUp, Terminal, Play, Laptop, Globe, Database, Key, Code, 
  Wifi, Router, Unlock, Package, Satellite, TerminalSquare, Server, Radar, ShieldCheck, MonitorCheck, Eye, ShieldAlert, Lock, ScanSearch
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
      next: "02. Incident Response",
      nextNum: "02"
    }
  },
  '02': {
    num: '02',
    title: 'Incident Response',
    subtitle: 'The Elite SWAT Team of Cyber Security',
    description: "If SIEM Monitoring is the security camera that spots a break-in, Incident Response (IR) is the elite SWAT team that rushes in to stop it. It is a structured process to manage the aftermath of a cyberattack, limit damage, and restore operations.",
    badges: ["High Stakes", "Advanced Skill", "Elite Pay"],
    metrics: [
      { val: "6", lbl: "Phases (NIST)" },
      { val: "24/7", lbl: "Operations" },
      { val: "High", lbl: "Demand" },
      { val: "4", lbl: "Certifications" },
      { val: "5", lbl: "Job Roles" }
    ],
    conceptTitle: "What is Incident Response?",
    conceptText: "Incident Response is a structured process that organizations use to handle and manage the aftermath of a cyberattack, data breach, or security incident. The main goal is to limit damage, contain the threat, erase the attacker's footprint, and restore normal business operations as quickly and securely as possible.",
    conceptFlow: [
      { title: "Identify", sub: "(Threat)", icon: ScanSearch },
      { title: "Contain", sub: "(Isolate)", icon: Lock, active: true },
      { title: "Eradicate", sub: "(Remove)", icon: ShieldAlert }
    ],
    blueprintDesc: "When a major ransomware attack or data breach hits a company, the Incident Response team takes full control. The scope spans a mix of technical panic-management and forensic deep-dives.",
    blueprintCards: [
      {
        icon: Users,
        title: "Potential Job Roles",
        list: ["Incident Responder", "CSIRT Analyst", "Threat Hunter", "Incident Commander", "Cyber Forensic Investigator"]
      },
      {
        icon: TrendingUp,
        title: "Average Salary",
        salary: "₹6.0 LPA - ₹10.0 LPA",
        salarySub: "INR / year",
        salaryRegion: "(Early Career)"
      },
      {
        icon: Globe,
        title: "Industries Hiring",
        list: ["Large Enterprises", "Critical Infrastructure", "Government Agencies", "Defense Sectors", "IR Consulting Firms"]
      },
      {
        icon: Activity,
        title: "Is It Worth It?",
        growthBadge: "Highly Worth It",
        desc: "A high-stakes, fast-paced job. Working around the clock under intense pressure to save organizations from catastrophic failure."
      }
    ],
    phasesTitle: "Step-by-Step Roadmap",
    phasesDesc: "To transition into or start a career in Incident Response, focus on this path:",
    phases: [
      { num: '01', title: 'Deep Systems Architecture', desc: 'Learn Windows and Linux internals (processes, registry, file systems, and how malware hides in memory). Understand enterprise networking inside out.', label: 'Fundamentals' },
      { num: '02', title: 'Learn Standard IR Frameworks', desc: 'Study the standard incident response lifecycles defined by NIST and SANS (Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned).', label: 'Frameworks' },
      { num: '03', title: 'Hands-on Containment', desc: 'Practice malware analysis basics. Learn how to use endpoint security and EDR tools like CrowdStrike Falcon, Carbon Black, or Wazuh.', label: 'Technical Skills' },
      { num: '04', title: 'Certifications to Stand Out', desc: 'Acquire highly respected industry certifications like CySA+, GCIH, ECIH, or CHFI to validate your advanced skills.', label: 'Validation' }
    ],
    toolsTitle: "Essential IR Tools",
    toolsDesc: "Master these essential tools used by professional Incident Response teams.",
    tools: [
      { name: 'CrowdStrike Falcon', cat: 'EDR', desc: 'Industry-leading endpoint detection and response platform used globally.' },
      { name: 'Carbon Black', cat: 'EDR', desc: 'Cloud-native endpoint security for monitoring and mitigating threats.' },
      { name: 'Wazuh', cat: 'Open Source', desc: 'Free, open-source security monitoring and incident response platform.' },
      { name: 'Sysinternals', cat: 'System Analysis', desc: 'Suite of advanced Windows tools for hunting malware hiding in OS internals.' }
    ],
    certs: [
      { name: 'CySA+', full: 'CompTIA Cybersecurity Analyst', desc: 'Validates skills in applying behavioral analytics to networks to combat threats.', diff: 'Mid-Level' },
      { name: 'GCIH', full: 'GIAC Certified Incident Handler', desc: 'Highly respected in the industry, focusing on detecting, responding, and resolving incidents.', diff: 'Advanced' },
      { name: 'ECIH', full: 'EC-Council Certified Incident Handler', desc: 'Comprehensive specialist-level program focusing on handling post-breach consequences.', diff: 'Advanced' },
      { name: 'CHFI', full: 'Computer Hacking Forensic Investigator', desc: 'Detailed methodological approach to computer forensics and evidence analysis.', diff: 'Advanced' }
    ],
    learnList: [
      "Windows and Linux internals (processes, registry, memory)",
      "Enterprise networking models and protocols",
      "NIST and SANS incident response lifecycles",
      "Malware analysis basics (trojans, ransomware execution)",
      "Using EDR tools like CrowdStrike Falcon, Carbon Black, Wazuh",
      "Containing compromised networks and isolating servers"
    ],
    readyText: "Start building your foundation in operating system internals and network security.",
    stats: {
      time: "25-35 Hours",
      diff: "Intermediate to Advanced",
      prereq: "SIEM Monitoring, Linux/Windows Admin",
      next: "03. Threat Intelligence",
      nextNum: "03"
    }
  },
  '03': {
    num: '03',
    title: 'Threat Intelligence',
    subtitle: 'The Spy Agency of Cyber Security',
    description: "If SIEM tracks the cameras and Incident Response fights the intruder, Threat Intelligence (TI) is the spy agency that studies the enemy before they even strike. It is the practice of gathering, analyzing, and organizing data about cybercriminals, their motives, targets, and methods (TTPs).",
    badges: ["Proactive Defense", "Analytical Skill", "Premium Pay"],
    metrics: [
      { val: "3", lbl: "Scope Layers" },
      { val: "High", lbl: "Demand" },
      { val: "OSINT", lbl: "Core Skill" },
      { val: "3", lbl: "Certifications" },
      { val: "4", lbl: "Job Roles" }
    ],
    conceptTitle: "What is Threat Intelligence?",
    conceptText: "Threat Intelligence bridges the gap between technical data and high-level corporate strategy. Instead of waiting to be attacked, TI analysts look at global hacker trends to predict who will target their organization next, allowing security teams to upgrade their defenses proactively.",
    conceptFlow: [
      { title: "Tactical", sub: "(IOCs)", icon: Activity },
      { title: "Strategic", sub: "(Trends)", icon: Globe, active: true },
      { title: "Geopolitical", sub: "(Risk)", icon: Target }
    ],
    blueprintDesc: "As cyberattacks become more sophisticated and state-sponsored, organizations can no longer survive on reactive security alone. Proactive defense is the future, making Threat Intelligence professionals highly valuable.",
    blueprintCards: [
      {
        icon: Users,
        title: "Early Career (1–2 Yrs)",
        salary: "₹5.5L - ₹9.5L",
        role: "Junior CTI Analyst / Associate"
      },
      {
        icon: TrendingUp,
        title: "Mid-Level (2–5 Yrs)",
        salary: "₹9.0L - ₹16.0L",
        role: "Cyber Threat Intelligence Analyst",
        highlight: true
      },
      {
        icon: ShieldCheck,
        title: "Senior (5+ Yrs)",
        salary: "₹16.0L - ₹28.0L+",
        role: "Senior CTI Consultant / Tier 3 Threat Hunter"
      }
    ],
    phasesTitle: "Step-by-Step Roadmap",
    phasesDesc: "To break into a Threat Intelligence role, follow this structured path:",
    phases: [
      { num: '01', title: 'Understand Attacker Frameworks', desc: 'Master the MITRE ATT&CK Framework and study the Cyber Kill Chain to understand the exact lifecycle of an attack.', label: 'Frameworks' },
      { num: '02', title: 'Intelligence Gathering & OSINT', desc: 'Learn Open Source Intelligence (OSINT) to track threat actors. Understand how to safely navigate dark web forums and threat feeds.', label: 'OSINT' },
      { num: '03', title: 'TI Platforms & Standards', desc: 'Learn how threat data is shared using formats like STIX/TAXII. Practice using Threat Intelligence Platforms (TIPs) like MISP.', label: 'Platforms' },
      { num: '04', title: 'Top Certifications', desc: 'Acquire foundational (CySA+, CTIA) or advanced (GCTI) certifications to prove your TI expertise.', label: 'Validation' }
    ],
    toolsTitle: "Essential TI Platforms",
    toolsDesc: "Master these platforms used to share and analyze threat data globally.",
    tools: [
      { name: 'MISP', cat: 'TIP Platform', desc: 'Malware Information Sharing Platform for gathering and sharing IOCs.' },
      { name: 'AlienVault OTX', cat: 'Threat Feed', desc: 'Open Threat Exchange providing community-sourced threat data.' },
      { name: 'VirusTotal', cat: 'Analysis', desc: 'Analyzes suspicious files, domains, IPs, and URLs to detect malware.' },
      { name: 'STIX/TAXII', cat: 'Standards', desc: 'Standardized formats for exchanging cyber threat intelligence.' }
    ],
    certs: [
      { name: 'CySA+', full: 'CompTIA CySA+', desc: 'Foundational certification applying behavioral analytics to networks.', diff: 'Intermediate' },
      { name: 'CTIA', full: 'EC-Council CTIA', desc: 'Certified Threat Intelligence Analyst focusing on gathering and analyzing threat info.', diff: 'Intermediate' },
      { name: 'GCTI', full: 'GIAC Cyber Threat Intelligence', desc: 'The gold standard for high-tier Threat Intelligence professionals.', diff: 'Advanced' }
    ],
    learnList: [
      "Mastering the MITRE ATT&CK Framework",
      "Studying the Cyber Kill Chain lifecycle",
      "Performing Open Source Intelligence (OSINT)",
      "Navigating dark web forums and paste sites safely",
      "Using STIX/TAXII for threat data sharing",
      "Practicing with MISP and AlienVault OTX"
    ],
    readyText: "If you love deep research, connecting dots across the dark web, and investigating attacker psychology, this is an incredibly rewarding specialization.",
    stats: {
      time: "20-30 Hours",
      diff: "Intermediate",
      prereq: "Networking, Security Fundamentals",
      next: "04. Digital Forensics",
      nextNum: "04"
    }
  }
};

// Generate placeholders for 03 to 10 to avoid fallback to 01
const placeholderNames = [
  "Threat Intelligence", "Digital Forensics", "Network Security",
  "Vulnerability Management", "Endpoint Security", "Log Analysis",
  "Patch Management", "User Awareness Training"
];

for (let i = 4; i <= 10; i++) {
  const num = i < 10 ? `0${i}` : `${i}`;
  DEFENSIVE_TOPICS[num] = {
    num: num,
    title: placeholderNames[i - 3],
    subtitle: 'Coming Soon',
    description: 'This module is currently under construction. Please check back later when we add the full content.',
    badges: ["Coming Soon"],
    metrics: [],
    conceptTitle: "Work in Progress",
    conceptText: "Content for this section will be added soon.",
    conceptFlow: [],
    blueprintDesc: "",
    blueprintCards: [],
    phasesTitle: "",
    phasesDesc: "",
    phases: [],
    toolsTitle: "",
    toolsDesc: "",
    tools: [],
    certs: [],
    learnList: [],
    readyText: "",
    stats: {
      time: "TBD",
      diff: "TBD",
      prereq: "TBD",
      next: "TBD",
      nextNum: ""
    }
  };
}

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
    { num: '02', name: 'Incident Response' },
    { num: '03', name: 'Threat Intelligence' },
    { num: '04', name: 'Digital Forensics' },
    { num: '05', name: 'Network Security' },
    { num: '06', name: 'Vulnerability Management' },
    { num: '07', name: 'Endpoint Security' },
    { num: '08', name: 'Log Analysis' },
    { num: '09', name: 'Patch Management' },
    { num: '10', name: 'User Awareness Training' }
  ];

  return (
    <div className="offensive-dashboard-wrapper select-none defensive-theme">
      <Header view="defensive" onBack={onBack} />

      <div className="offensive-dashboard">
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

          {/* Defensive Roadmap */}
          <div className="sidebar-section" style={{ marginTop: '20px' }}>
            <span className="sidebar-section-title">DEFENSIVE ROADMAP</span>
            <div className="sidebar-menu-list">
              {roadmapTopics.map((topic, idx) => (
                <div 
                  key={idx} 
                  className={`sidebar-menu-item roadmap-item-btn ${activeRoadmapTopic === topic.num ? 'active' : ''}`}
                  onClick={() => {
                    if (DEFENSIVE_TOPICS[topic.num]) {
                      setActiveRoadmapTopic(topic.num);
                    }
                  }}
                >
                  <span className="roadmap-num-badge">{topic.num}</span>
                  <span>{topic.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="sidebar-progress-card topic-sidebar-progress" style={{ marginTop: '20px' }}>
            <span className="sidebar-section-title" style={{ paddingLeft: 0, marginBottom: '10px', display: 'block' }}>YOUR PROGRESS</span>
            <div className="progress-dial-container">
              <div className="progress-dial-outer">
                <svg className="progress-dial-svg" viewBox="0 0 100 100">
                  <circle className="progress-dial-bg" cx="50" cy="50" r="40" />
                  <circle className="progress-dial-fill" cx="50" cy="50" r="40" style={{ strokeDashoffset: '220.96' }} />
                </svg>
                <div className="progress-dial-value">
                  <span className="dial-percent">10%</span>
                  <span className="dial-label">Overall Completion</span>
                </div>
              </div>
            </div>
            <div className="progress-stats-mini">
              <div>Completed: <strong>1 / 10</strong></div>
              <div>Current Topic: <strong>{activeTopic.title}</strong></div>
            </div>
            <button className="btn-sidebar-progress btn-continue-learning" style={{ width: '100%', marginTop: '14px' }}>
              <span>Continue Learning</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </aside>

        {/* 2. Main Content Panel */}
        <div className="dashboard-main-wrapper topic-main-layout">
          {/* Breadcrumbs */}
          <nav className="dashboard-breadcrumbs">
            <span className="breadcrumb-link" onClick={() => onNavigate('landing')}>Roadmaps</span>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-link" onClick={() => onNavigate('defensive-detail')}>Defensive Security</span>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-active">{activeTopic.num}</span>
          </nav>

          <div className="topic-content-grid-single">
            <div className="topic-left-column">
              {/* Hero Section */}
              <section className="topic-hero-banner">
                <div className="topic-hero-left">
                  <div className="topic-badge-header">
                    <span className="topic-badge-number">{activeTopic.num}</span>
                    <div>
                      <h1 className="topic-main-title">{activeTopic.title}</h1>
                      <h3 className="topic-sub-title">{activeTopic.subtitle}</h3>
                    </div>
                  </div>
                  <p className="topic-hero-description">
                    {activeTopic.description}
                  </p>
                  <div className="topic-badge-row">
                    {activeTopic.badges.map((b, i) => (
                      <span key={i} className="hero-pill-badge">{b}</span>
                    ))}
                  </div>

                  {/* Core Metrics Row */}
                  <div className="topic-metrics-grid">
                    {activeTopic.metrics.map((m, i) => (
                      <div key={i} className="metric-box">
                        <span className="metric-val">{m.val}</span>
                        <span className="metric-lbl">{m.lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="topic-hero-right-img">
                  <div className="hacker-hero-img-container" style={{ filter: 'hue-rotate(180deg)', boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)' }}>
                    <img src={hackerImg} alt="Blue Team Defender" />
                  </div>
                </div>
              </section>

              {/* Quick Stats Horizontal Bar */}
              <div className="quick-stats-horizontal-bar">
                <div className="quick-stat-item-horizontal">
                  <Clock size={16} />
                  <div>
                    <span>Estimated Time</span>
                    <strong>{activeTopic.stats.time}</strong>
                  </div>
                </div>
                <div className="quick-stat-item-horizontal">
                  <TrendingUp size={16} />
                  <div>
                    <span>Difficulty Level</span>
                    <strong>{activeTopic.stats.diff}</strong>
                  </div>
                </div>
                <div className="quick-stat-item-horizontal">
                  <Laptop size={16} />
                  <div>
                    <span>Prerequisites</span>
                    <strong>{activeTopic.stats.prereq}</strong>
                  </div>
                </div>
                <div className="quick-stat-item-horizontal" style={{ cursor: 'pointer' }} onClick={() => {
                  if (DEFENSIVE_TOPICS[activeTopic.stats.nextNum]) {
                    setActiveRoadmapTopic(activeTopic.stats.nextNum);
                  }
                }}>
                  <ArrowRight size={16} />
                  <div>
                    <span>Next Topic</span>
                    <strong>{activeTopic.stats.next}</strong>
                  </div>
                </div>
              </div>

              {/* What You'll Learn */}
              <section className="topic-section-block">
                <h2 className="section-block-title">What You'll Learn</h2>
                <div className="section-divider-red"></div>
                <ul className="learn-checklist-grid">
                  {activeTopic.learnList.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* What is Concept block */}
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
                            <StepIcon size={18} style={{ color: 'var(--theme-accent, #ff5555)' }} />
                          </div>
                          <h4>{step.title}</h4>
                          <p>{step.sub}</p>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </section>

              {/* Career Path & Blueprint */}
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
                          <CardIcon size={16} style={{ color: 'var(--theme-accent, #ff5555)' }} />
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
                              <Activity size={24} style={{ color: 'var(--theme-accent, #ff5555)' }} />
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

              {/* The Core Phases / Vectors */}
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

              {/* Essential Testing Tools */}
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

              {/* Recommended Certifications */}
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
