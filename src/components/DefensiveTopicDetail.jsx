import React from 'react';
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
  ArrowDown,
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
  Laptop,
  Copy,
  Check,
  Server,
  Database,
  ShieldAlert,
  ScanSearch,
  Lock,
  Globe
} from 'lucide-react';
import Header from './Header';
import hackerImg from '../assets/cyber-hacker-red.jpg';
import analystImg from '../assets/cyber-analyst-blue.jpg';
import defensiveSocImg from '../assets/defensive-soc-dashboard.jpg';

// Content data for each defensive topic to keep layout identical and interactive
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
        salary: "$65,000 - $85,000",
        salarySub: "USD / year",
        salaryRegion: "(varies by region)"
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
      { name: 'CySA+', full: 'CompTIA Cybersecurity Analyst+', desc: 'Applies behavioral analytics to networks and devices to prevent, detect and combat threats.', diff: 'Intermediate' }
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
    },
    questions: [
      {
        taskNum: 1,
        question: "What does the abbreviation SIEM stand for in cyber security?",
        correctAnswer: "Security Information and Event Management",
        hint: "Look at the first paragraph under the Task 1 header."
      },
      {
        taskNum: 2,
        question: "What SOC role represents the baseline Tier 1 security monitoring operations entry level?",
        correctAnswer: "SOC Analyst",
        hint: "Check the potential job roles listed in Task 2."
      },
      {
        taskNum: 3,
        question: "What is the second phase focused on under the SIEM analyst roadmap?",
        correctAnswer: "Log Analysis",
        hint: "Look at the step 02 label under the roadmap grid."
      },
      {
        taskNum: 4,
        question: "Which industry-leading enterprise SIEM platform uses Search Processing Language (SPL) for querying logs?",
        correctAnswer: "Splunk",
        hint: "Read the description of Splunk in the tools table."
      },
      {
        taskNum: 5,
        question: "Which Microsoft certification validates Sentinel cloud SIEM operations analyst skills?",
        correctAnswer: "SC-200",
        hint: "Usually Microsoft Sentinel security analyst cert code is SC-200."
      }
    ]
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
        salary: "$80,000 - $115,000",
        salarySub: "USD / year",
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
    toolsTitle: "Essential Incident Response Tools",
    toolsDesc: "Master these key forensic and containment platforms used by response teams.",
    tools: [
      { name: 'Volatility', cat: 'Memory Forensics', desc: 'An advanced open-source memory forensics framework used to analyze RAM images for malware.' },
      { name: 'Autopsy', cat: 'Disk Analysis', desc: 'A digital forensics platform and graphical interface to analyze hard drives and smartphones.' },
      { name: 'Wazuh', cat: 'EDR / HIDS', desc: 'Free open-source host security monitoring solution for endpoint detection.' },
      { name: 'Wireshark', cat: 'Packet Analysis', desc: 'Intercepts and inspects live network packet captures to locate attacker lateral traffic.' }
    ],
    certs: [
      { name: 'GCIH', full: 'GIAC Certified Incident Handler', desc: 'Validates a practitioner\'s ability to detect, respond, and resolve security incidents.', diff: 'Advanced' },
      { name: 'ECIH', full: 'EC-Council Certified Incident Handler', desc: 'Covers structured systems security incident response and handling methodologies.', diff: 'Intermediate' },
      { name: 'CHFI', full: 'Computer Hacking Forensic Investigator', desc: 'Focuses on digital forensic processes, evidence collection, and analysis.', diff: 'Advanced' }
    ],
    learnList: [
      "Incident response methodologies (NIST and SANS standard phases)",
      "Analyzing running system memory and hard drives for forensic evidence",
      "Analyzing malware behaviors and tracking network footprints",
      "Deploying and configuring EDR (Endpoint Detection) tools",
      "Executing post-incident reviews and containment strategies"
    ],
    readyText: "Start learning forensics tools and frameworks to secure corporate enterprises.",
    stats: {
      time: "30-40 Hours",
      diff: "Intermediate to Advanced",
      prereq: "Networking, Linux/Windows Fundamentals",
      next: "03. Threat Hunting",
      nextNum: "03"
    },
    questions: [
      {
        taskNum: 1,
        question: "What is the primary target objective during the Containment phase of incident response?",
        correctAnswer: "Isolate",
        hint: "Check the concept flow diagram in Task 1."
      },
      {
        taskNum: 2,
        question: "What is the average starting salary range lower limit in USD for an Incident Responder?",
        correctAnswer: "$80,000",
        hint: "Check the Average Salary card under the Career Path section."
      },
      {
        taskNum: 3,
        question: "Which standards organization defines the preparation, containment, and recovery lifecycle framework?",
        correctAnswer: "NIST",
        hint: "Read the phase 02 description under Task 3."
      },
      {
        taskNum: 4,
        question: "Which open source tool is widely used for conducting RAM image memory forensics investigations?",
        correctAnswer: "Volatility",
        hint: "Look at the tools list under Task 4."
      },
      {
        taskNum: 5,
        question: "Which highly-regarded GIAC certification validates advanced threat incident handling skills?",
        correctAnswer: "GCIH",
        hint: "Look at the certs list under Task 5."
      }
    ]
  }
};

// Interactive Question Component for HTB/THM feel (Defensive cyan theme)
function HTBQuestion({ questionText, correctAnswer, hint }) {
  const [userInput, setUserInput] = React.useState('');
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [showHint, setShowHint] = React.useState(false);

  const handleSubmit = () => {
    if (userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      alert("Incorrect answer! Try again.");
    }
  };

  return (
    <div className="htb-question-box">
      <div className="htb-question-header">
        <span className="htb-q-bullet">Q</span>
        <span className="htb-q-text">{questionText}</span>
      </div>
      <div className="htb-question-input-row">
        <input 
          type="text" 
          placeholder={isCorrect ? correctAnswer : "Answer..."} 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={isCorrect}
          className={`htb-input ${isCorrect ? 'correct' : ''}`}
        />
        {!isCorrect ? (
          <button className="btn-htb-submit" onClick={handleSubmit}>Submit Answer</button>
        ) : (
          <span className="htb-correct-badge flex-center">
            <CheckCircle size={14} style={{ marginRight: '4px' }} />
            <span>Correct!</span>
          </span>
        )}
      </div>
      {hint && !isCorrect && (
        <div className="htb-hint-row">
          <span className="hint-toggle" onClick={() => setShowHint(!showHint)}>
            {showHint ? "Hide Hint" : "Need Hint?"}
          </span>
          {showHint && <p className="hint-text">{hint}</p>}
        </div>
      )}
    </div>
  );
}

// Copy Terminal Command block
function TerminalCommandBlock({ command }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="htb-terminal-box">
      <div className="htb-terminal-header">
        <div className="htb-terminal-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <span className="htb-terminal-title">Terminal Console</span>
        <button className="btn-copy-command" onClick={handleCopy}>
          {copied ? <Check size={12} style={{ color: '#4ade80' }} /> : <Copy size={12} />}
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      <div className="htb-terminal-body">
        <code>$ {command}</code>
      </div>
    </div>
  );
}

export default function DefensiveTopicDetail({ topicId = '01', onBack, onNavigate }) {
  // Use active state internally but fallback to prop
  const [activeRoadmapTopic, setActiveRoadmapTopic] = React.useState(topicId);

  // Sync state if prop changes
  React.useEffect(() => {
    setActiveRoadmapTopic(topicId);
  }, [topicId]);

  const activeTopic = DEFENSIVE_TOPICS[activeRoadmapTopic] || DEFENSIVE_TOPICS['01'];

  // Left Sidebar Paths
  const sidebarPaths = [
    { name: 'Offensive Security', icon: Swords, active: false },
    { name: 'Defensive Security', icon: Shield, active: true },
    { name: 'GNC (Governance, Risk & Compliance)', icon: Shield, active: false },
    { name: 'Purple Team', icon: Target, active: false }
  ];

  // Defensive Roadmap Topics (01 to 06 available)
  const roadmapTopics = [
    { num: '01', name: 'SIEM Monitoring' },
    { num: '02', name: 'Incident Response' },
    { num: '03', name: 'Threat Hunting' },
    { num: '04', name: 'Digital Forensics' },
    { num: '05', name: 'Vulnerability Management' },
    { num: '06', name: 'Security Operations' }
  ];

  // Map questions for active task num
  const getQuestionForTask = (taskNum) => {
    return activeTopic.questions?.find(q => q.taskNum === taskNum);
  };

  return (
    <div className="offensive-dashboard-wrapper defensive-theme select-none">
      <Header view="defensive" onBack={onBack} />

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

          {/* Your Progress */}
          <div className="sidebar-progress-card topic-sidebar-progress" style={{ marginTop: '20px' }}>
            <span className="sidebar-section-title" style={{ paddingLeft: 0, marginBottom: '10px', display: 'block' }}>YOUR PROGRESS</span>
            <div className="progress-dial-container">
              <div className="progress-dial-outer">
                <svg className="progress-dial-svg" viewBox="0 0 100 100">
                  <circle className="progress-dial-bg" cx="50" cy="50" r="40" />
                  <circle className="progress-dial-fill" cx="50" cy="50" r="40" style={{ strokeDashoffset: '201.06' }} />
                </svg>
                <div className="progress-dial-value">
                  <span className="dial-percent">20%</span>
                  <span className="dial-label">Room Completion</span>
                </div>
              </div>
            </div>
            <div className="progress-stats-mini">
              <div>Completed: <strong>1 / 6</strong></div>
              <div>Current Topic: <strong>{activeTopic.title}</strong></div>
            </div>
            <button className="btn-sidebar-progress btn-continue-learning" style={{ width: '100%', marginTop: '14px' }}>
              <span>Continue Learning</span>
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Next Topic Preview */}
          {activeRoadmapTopic === '01' ? (
            <div className="next-topic-preview-card" style={{ marginTop: '16px' }} onClick={() => setActiveRoadmapTopic('02')}>
              <div className="preview-label">NEXT TOPIC</div>
              <h4>02. Incident Response</h4>
              <p>Unlocks after completion</p>
              <button className="btn-preview-view">
                <span>View Preview</span>
                <Play size={10} />
              </button>
            </div>
          ) : (
            <div className="next-topic-preview-card" style={{ marginTop: '16px' }}>
              <div className="preview-label">NEXT TOPIC</div>
              <h4>03. Threat Hunting</h4>
              <p>Unlocks after completion</p>
              <button className="btn-preview-view">
                <span>View Preview</span>
                <Play size={10} />
              </button>
            </div>
          )}

          {/* Quote Card */}
          <div className="sidebar-quote-card" style={{ marginTop: '16px' }}>
            <div className="quote-hacker-avatar" style={{ borderColor: 'rgba(6, 182, 212, 0.4)' }}>
              <div className="quote-avatar-glow" style={{ background: 'rgba(6, 182, 212, 0.2)' }}></div>
            </div>
            <p className="quote-text">
              {activeRoadmapTopic === '01' 
                ? `"The best defense is a well-correlated offense of log events."`
                : `"If you sweat in peace (preparing logs), you bleed less in war (breach)."`
              }
            </p>
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

          {/* Grid Layout (Re-structured to single wide layout for readability) */}
          <div className="topic-content-grid-single">
            <div className="topic-left-column">
              {/* Hero Section */}
              <section className="topic-hero-banner" style={{ border: '1px solid rgba(6, 182, 212, 0.25)', background: 'radial-gradient(circle at 100% 50%, rgba(6, 182, 212, 0.12), transparent 60%), rgba(8, 12, 22, 0.95)' }}>
                <div className="topic-hero-left">
                  <div className="topic-badge-header">
                    <span className="topic-badge-number">{activeTopic.num}</span>
                    <div>
                      <h1 className="topic-main-title">{activeTopic.title}</h1>
                      <h3 className="topic-sub-title" style={{ color: '#06b6d4' }}>{activeTopic.subtitle}</h3>
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
                  <div className="hacker-hero-img-container" style={{ borderColor: 'rgba(6, 182, 212, 0.4)', boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)' }}>
                    <img src={analystImg} alt="SOC Operations room" />
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

              {/* ── TASK 1: ESSENTIAL CONCEPT ── */}
              <section className="topic-section-block htb-task-container">
                <div className="htb-task-header">
                  <span className="htb-task-badge">Task 1</span>
                  <h2>{activeTopic.conceptTitle}</h2>
                </div>
                <div className="section-divider-red"></div>
                
                <p className="section-block-text">
                  {activeTopic.conceptText}
                </p>

                {/* SIEM Specific image */}
                {activeRoadmapTopic === '01' && (
                  <div className="htb-task-media-wrap">
                    <img src={defensiveSocImg} alt="SOC Dashboard Graphic" className="htb-task-img" />
                    <span className="htb-task-caption">Figure 1.1: Security Operations Center live SIEM dashboard correlation flow.</span>
                  </div>
                )}

                {/* Concept Process Flow */}
                <div className="pentest-flow-row">
                  {activeTopic.conceptFlow.map((step, i) => {
                    const StepIcon = step.icon;
                    return (
                      <React.Fragment key={i}>
                        {i > 0 && <div className="flow-connector-line"></div>}
                        <div className={`flow-step-card ${step.active ? 'active' : ''}`}>
                          <div className="flow-step-icon-outer">
                            <StepIcon size={18} style={{ color: '#06b6d4' }} />
                          </div>
                          <h4>{step.title}</h4>
                          <p>{step.sub}</p>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* HTB Question Check */}
                {getQuestionForTask(1) && (
                  <HTBQuestion 
                    questionText={getQuestionForTask(1).question}
                    correctAnswer={getQuestionForTask(1).correctAnswer}
                    hint={getQuestionForTask(1).hint}
                  />
                )}
              </section>

              {/* ── TASK 2: CAREER PATH & BLUEPRINT ── */}
              <section className="topic-section-block htb-task-container">
                <div className="htb-task-header">
                  <span className="htb-task-badge">Task 2</span>
                  <h2>Career Path & Blueprint</h2>
                </div>
                <div className="section-divider-red"></div>
                
                <p className="section-block-text">
                  {activeTopic.blueprintDesc}
                </p>

                <div className="blueprint-grid">
                  {activeTopic.blueprintCards.map((card, i) => {
                    const CardIcon = card.icon;
                    return (
                      <div key={i} className={`blueprint-card ${card.salary ? '' : 'flex-center-column'}`} style={{ borderColor: 'rgba(6, 182, 212, 0.15)' }}>
                        <div className="blueprint-card-header">
                          <CardIcon size={16} style={{ color: '#06b6d4' }} />
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
                            <div className="blueprint-salary-value" style={{ color: '#4ade80' }}>{card.salary}</div>
                            <div className="blueprint-salary-sub">{card.salarySub}</div>
                            <div className="blueprint-salary-region">{card.salaryRegion}</div>
                          </>
                        )}
                        {card.growthBadge && (
                          <>
                            <div className="blueprint-growth-icon" style={{ borderColor: 'rgba(6, 182, 212, 0.3)', background: 'rgba(6, 182, 212, 0.1)' }}>
                              <Activity size={24} style={{ color: '#06b6d4' }} />
                            </div>
                            <div className="growth-badge" style={{ color: '#4ade80', background: 'rgba(74, 222, 128, 0.08)', borderColor: 'rgba(74, 222, 128, 0.25)' }}>{card.growthBadge}</div>
                            <p>{card.desc}</p>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* HTB Question Check */}
                {getQuestionForTask(2) && (
                  <HTBQuestion 
                    questionText={getQuestionForTask(2).question}
                    correctAnswer={getQuestionForTask(2).correctAnswer}
                    hint={getQuestionForTask(2).hint}
                  />
                )}
              </section>

              {/* ── TASK 3: ATTACK VECTORS & METHODOLOGIES ── */}
              <section className="topic-section-block htb-task-container">
                <div className="htb-task-header">
                  <span className="htb-task-badge">Task 3</span>
                  <h2>{activeTopic.phasesTitle}</h2>
                </div>
                <div className="section-divider-red"></div>
                
                <p className="section-block-text">
                  {activeTopic.phasesDesc}
                </p>

                <div className="phases-flow-grid">
                  {activeTopic.phases.map((phase, idx) => (
                    <div key={idx} className="phase-node-card" style={{ borderColor: 'rgba(6, 182, 212, 0.15)' }}>
                      <div className="phase-node-header">
                        <span className="phase-node-num" style={{ color: '#06b6d4', background: 'rgba(6, 182, 212, 0.1)', borderColor: 'rgba(6, 182, 212, 0.3)' }}>{phase.num}</span>
                        <h4>{phase.title}</h4>
                      </div>
                      <p className="phase-node-desc">{phase.desc}</p>
                      <div className="phase-badge-tag" style={{ color: '#06b6d4', background: 'rgba(6, 182, 212, 0.08)', borderColor: 'rgba(6, 182, 212, 0.25)' }}>{phase.label}</div>
                    </div>
                  ))}
                </div>

                {/* HTB Question Check */}
                {getQuestionForTask(3) && (
                  <HTBQuestion 
                    questionText={getQuestionForTask(3).question}
                    correctAnswer={getQuestionForTask(3).correctAnswer}
                    hint={getQuestionForTask(3).hint}
                  />
                )}
              </section>

              {/* ── TASK 4: PRACTICE LAB TOOLSETS ── */}
              <section className="topic-section-block htb-task-container">
                <div className="htb-task-header">
                  <span className="htb-task-badge">Task 4</span>
                  <h2>{activeTopic.toolsTitle}</h2>
                </div>
                <div className="section-divider-red"></div>
                
                <p className="section-block-text">
                  {activeTopic.toolsDesc}
                </p>

                {/* Terminal Commands Guide Box */}
                {activeRoadmapTopic === '01' ? (
                  <div style={{ marginBottom: '28px' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: '10px', fontSize: '14.5px' }}>Command Line Practice: Splunk Log Ingestion</h4>
                    <TerminalCommandBlock command="sudo /opt/splunk/bin/splunk start --accept-license" />
                  </div>
                ) : (
                  <div style={{ marginBottom: '28px' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: '10px', fontSize: '14.5px' }}>Command Line Practice: Wazuh Agent Activation</h4>
                    <TerminalCommandBlock command="sudo systemctl restart wazuh-agent" />
                  </div>
                )}

                <div className="tools-grid-5">
                  {activeTopic.tools.map((tool, idx) => (
                    <div key={idx} className="tool-card-v2">
                      <div className="tool-card-icon-v2" style={{ color: '#06b6d4', borderColor: 'rgba(6, 182, 212, 0.25)' }}>
                        <Terminal size={18} />
                      </div>
                      <h4>{tool.name}</h4>
                      <span className="tool-card-cat">{tool.cat}</span>
                      <p className="tool-card-desc-v2">{tool.desc}</p>
                      <button className="tool-btn-learn" style={{ color: '#06b6d4', borderColor: 'rgba(6, 182, 212, 0.2)' }}>
                        <span>Learn More</span>
                        <ArrowRight size={10} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* HTB Question Check */}
                {getQuestionForTask(4) && (
                  <HTBQuestion 
                    questionText={getQuestionForTask(4).question}
                    correctAnswer={getQuestionForTask(4).correctAnswer}
                    hint={getQuestionForTask(4).hint}
                  />
                )}
              </section>

              {/* ── TASK 5: RECOMMENDED CERTIFICATIONS ── */}
              <section className="topic-section-block htb-task-container">
                <div className="htb-task-header">
                  <span className="htb-task-badge">Task 5</span>
                  <h2>Recommended Certifications</h2>
                </div>
                <div className="section-divider-red"></div>
                
                <p className="section-block-text">
                  Boost your career with industry-recognized certifications.
                </p>
                <div className="recommended-certs-grid">
                  {activeTopic.certs.map((cert, idx) => (
                    <div key={idx} className="recommended-cert-card-v2">
                      <div className="cert-badge-icon-v2" style={{ color: '#06b6d4', borderColor: 'rgba(6, 182, 212, 0.3)' }}>
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

                {/* HTB Question Check */}
                {getQuestionForTask(5) && (
                  <HTBQuestion 
                    questionText={getQuestionForTask(5).question}
                    correctAnswer={getQuestionForTask(5).correctAnswer}
                    hint={getQuestionForTask(5).hint}
                  />
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
