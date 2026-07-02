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
  Laptop
} from 'lucide-react';
import Header from './Header';
import hackerImg from '../assets/cyber-hacker-red.jpg';

// Content data for each topic to keep the layout identical
const TOPIC_DETAILS = {
  '01': {
    num: '01',
    title: 'Penetration Testing',
    subtitle: 'Ethical Hacking',
    description: "Learn how professional ethical hackers think and perform authorized attacks to discover vulnerabilities before malicious hackers can exploit them. Master the art of penetration testing and secure real-world systems.",
    badges: ["Beginner to Intermediate", "Core Skill", "High Demand"],
    metrics: [
      { val: "10", lbl: "Sub Topics" },
      { val: "12+", lbl: "Hands-on Labs" },
      { val: "25+", lbl: "Tools Covered" },
      { val: "7", lbl: "Real-world Scenarios" },
      { val: "3", lbl: "Certifications Recommended" }
    ],
    conceptTitle: "What is Penetration Testing?",
    conceptText: "Penetration testing—or pentesting—is an authorized, simulated cyberattack against an organization's IT infrastructure (networks, applications, and systems) to discover security vulnerabilities before malicious hackers can exploit them. Think of it as hiring a security expert to audit your home's security by attempting a controlled break-in.",
    conceptFlow: [
      { title: "Attacker", sub: "(Think)", icon: Terminal },
      { title: "Penetration Testing", sub: "(Simulate)", icon: Laptop, active: true },
      { title: "Stronger Defense", sub: "(Secure)", icon: Shield }
    ],
    blueprintDesc: "Build a successful career in cybersecurity by mastering penetration testing. High demand, great opportunities, and rewarding salaries await you.",
    blueprintCards: [
      {
        icon: Users,
        title: "Potential Job Roles",
        list: ["Junior Penetration Tester", "Ethical Hacker", "Security Consultant", "Vulnerability Analyst"]
      },
      {
        icon: TrendingUp,
        title: "Average Entry Salary",
        salary: "$75,000 - $105,000",
        salarySub: "USD / year",
        salaryRegion: "(varies by region)"
      },
      {
        icon: FileText,
        title: "Core Skills Required",
        list: ["Networking (TCP/IP)", "Linux / Windows Admin", "Scripting (Python, Bash)", "Problem Solving", "Analytical Thinking"]
      },
      {
        icon: Activity,
        title: "Career Growth",
        growthBadge: "High Demand & Growth",
        desc: "Excellent Career Prospects"
      }
    ],
    phasesTitle: "The 5 Core Phases of a Pentest",
    phasesDesc: "A professional penetration test follows a structured methodology to ensure maximum effectiveness.",
    phases: [
      { num: '01', title: 'Planning & Reconnaissance', desc: 'Define scope, gather information, and collect intelligence using OSINT.', label: 'Foundation' },
      { num: '02', title: 'Scanning & Enumeration', desc: 'Actively scan target systems to identify open ports, services, and vulnerabilities.', label: 'Information Gathering' },
      { num: '03', title: 'Gaining Access (Exploitation)', desc: 'Exploit vulnerabilities to gain initial access and execute code.', label: 'Exploitation' },
      { num: '04', title: 'Maintaining Access (Persistence)', desc: 'Maintain access, escalate privileges, and move laterally within the network.', label: 'Post-Exploitation' },
      { num: '05', title: 'Analysis & Reporting', desc: 'Analyze findings, clean up footprints, and deliver detailed security report.', label: 'Reporting' }
    ],
    toolsTitle: "Essential Testing Tools (Top 5)",
    toolsDesc: "Master these essential tools used by professional penetration testers.",
    tools: [
      { name: 'Nmap', cat: 'Network Scanning', desc: 'Discovers hosts, services, and vulnerabilities on network systems.' },
      { name: 'Burp Suite', cat: 'Web Application', desc: 'Intercepts and analyzes web traffic to find web application vulnerabilities.' },
      { name: 'Metasploit', cat: 'Exploitation Framework', desc: 'Develop, test, and execute exploits against target systems.' },
      { name: 'Wireshark', cat: 'Network Analysis', desc: 'Analyzes network packets and protocols in real-time for insights.' },
      { name: 'John the Ripper', cat: 'Password Cracking', desc: 'Cracks passwords and hashes using various attack methods.' }
    ],
    certs: [
      { name: 'eJPT', full: 'ElearnSecurity Junior Penetration Tester', desc: 'Perfect start for beginners with hands-on approach.', diff: 'Beginner' },
      { name: 'CEH', full: 'Certified Ethical Hacker', desc: 'Industry recognized certification for ethical hacking professionals.', diff: 'Beginner' },
      { name: 'PenTest+', full: 'CompTIA PenTest+', desc: 'Covers penetration testing techniques and security management.', diff: 'Intermediate' }
    ],
    learnList: [
      "Penetration testing methodologies and best practices",
      "Information gathering and reconnaissance techniques",
      "Vulnerability scanning and enumeration",
      "Exploitation techniques and tools usage",
      "Post-exploitation and privilege escalation",
      "Professional reporting and remediation",
      "Real-world scenarios and hands-on labs"
    ],
    readyText: "Begin your penetration testing journey and become an ethical hacking professional.",
    stats: {
      time: "25-30 Hours",
      diff: "Beginner to Intermediate",
      prereq: "Networking Basics, Linux Fundamentals",
      next: "02. Social Engineering",
      nextNum: "02"
    }
  },
  '02': {
    num: '02',
    title: 'Social Engineering',
    subtitle: 'The Human Hacking Element',
    description: "No matter how advanced an organization’s firewall or encryption is, security always fails if a human is tricked into opening the front door. Social Engineering is the art of manipulating, influencing, or deceiving people into giving up confidential information.",
    badges: ["Beginner to Intermediate", "Core Skill", "High Demand"],
    metrics: [
      { val: "4", lbl: "Attack Vectors" },
      { val: "6", lbl: "Cognitive Triggers" },
      { val: "15+", lbl: "Scenario Labs" },
      { val: "5", lbl: "Real-world Cases" },
      { val: "2", lbl: "Certifications Recommended" }
    ],
    conceptTitle: "What is Social Engineering?",
    conceptText: "No matter how advanced an organization’s firewall or encryption is, security always fails if a human is tricked into opening the front door. Social Engineering is the art of manipulating, influencing, or deceiving people into giving up confidential information, bypassing physical security controls, or executing malicious software.",
    conceptFlow: [
      { title: "Psychology", sub: "(Trigger)", icon: Users },
      { title: "Social Engineering", sub: "(Manipulate)", icon: Laptop, active: true },
      { title: "Bypassed Access", sub: "(Exploit)", icon: Shield }
    ],
    blueprintDesc: "Build a successful career in cybersecurity by mastering behavioral psychology and pretexting attacks. Excellent prospects await in adversary simulation.",
    blueprintCards: [
      {
        icon: Users,
        title: "Potential Job Roles",
        list: ["Social Engineering Consultant", "Red Team Operator", "Human Risk Analyst", "Security Awareness Training Director"]
      },
      {
        icon: TrendingUp,
        title: "Average Entry Salary",
        salary: "$80,000 - $110,000",
        salarySub: "USD / year",
        salaryRegion: "(varies by region)"
      },
      {
        icon: FileText,
        title: "Core Skills Required",
        list: ["Behavioral Psychology", "OSINT Target Profiling", "Pretexting & Communication", "Scripting (Phishing)", "Physical Security Concepts"]
      },
      {
        icon: Activity,
        title: "Career Growth",
        growthBadge: "High Demand & Growth",
        desc: "Excellent Career Prospects"
      }
    ],
    phasesTitle: "The 4 Most Common Attack Vectors",
    phasesDesc: "To help your students understand real-world roles, break down the tactical methods used in professional social engineering assessments:",
    phases: [
      { num: '01', title: 'Phishing (Email)', desc: 'Pentesters craft fake emails (fraudulent IT warnings or HR payroll updates) to test if employees click malicious links or input credentials.', label: 'Email Threat' },
      { num: '02', title: 'Vishing (Voice Phishing)', desc: 'Attackers spoof caller ID to look like IT support or bank executives to extract sensitive MFA codes verbally over the phone.', label: 'Phone Threat' },
      { num: '03', title: 'Smishing (SMS Phishing)', desc: 'Targeting corporate mobile devices using panic-inducing alerts (e.g., account suspended) to steal session tokens.', label: 'Mobile Threat' },
      { num: '04', title: 'Tailgating & Piggybacking', desc: 'An attacker closely follows an authorized employee through secure badge-access doors, exploiting natural politeness.', label: 'Physical Threat' }
    ],
    toolsTitle: "Essential Simulation Tools (Top 5)",
    toolsDesc: "Master these essential tools and frameworks used to execute social engineering assessments.",
    tools: [
      { name: 'GoPhish', cat: 'Phishing Framework', desc: 'Simulates enterprise phishing campaigns and monitors click-through rates.' },
      { name: 'SET', cat: 'Attack Toolkit', desc: 'The Social-Engineer Toolkit. Launches spear phishing and credential harvesting attacks.' },
      { name: 'Evilginx', cat: 'MFA Bypass Proxy', desc: 'Man-in-the-middle proxy framework used to capture credentials and 2FA session cookies.' },
      { name: 'Social Mapper', cat: 'OSINT Profiler', desc: 'Uses facial recognition to profile targets across multiple social networks.' },
      { name: 'Maltego', cat: 'Footprinting mapping', desc: 'Maps and visualizes relation charts of target organizations and employees.' }
    ],
    certs: [
      { name: 'CAPS', full: 'Certified Anti-Phishing Specialist', desc: 'Focused on designing and analyzing organizational phishing metrics.', diff: 'Beginner' },
      { name: 'SEPP', full: 'Certified Social Engineering Pentester', desc: 'Focuses on advanced manipulation, OSINT, and physical facility breaches.', diff: 'Intermediate' }
    ],
    learnList: [
      "Human psychology exploitation vectors & pretexting",
      "Phishing simulation frameworks & metrics analysis",
      "Voice pretexting & spoofing caller ID (Vishing)",
      "Physical facility entry, lock picking & tailgating",
      "OSINT target profiling & relation mapping",
      "Defensive awareness security training models"
    ],
    readyText: "Begin your Social Engineering journey and learn how to secure the human element in cyber security.",
    stats: {
      time: "20-25 Hours",
      diff: "Beginner to Intermediate",
      prereq: "OSINT Basics, Technical Pretexting",
      next: "03. OSINT Reconnaissance",
      nextNum: "03"
    }
  }
};

export default function OffensiveTopicDetail({ topicId = '01', onBack, onNavigate }) {
  // Use active state internally but fallback to prop
  const [activeRoadmapTopic, setActiveRoadmapTopic] = React.useState(topicId);

  // Sync state if prop changes
  React.useEffect(() => {
    setActiveRoadmapTopic(topicId);
  }, [topicId]);

  const activeTopic = TOPIC_DETAILS[activeRoadmapTopic] || TOPIC_DETAILS['01'];

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
                    if (TOPIC_DETAILS[topic.num]) {
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
              <h4>02. Social Engineering</h4>
              <p>Unlocks after completion</p>
              <button className="btn-preview-view">
                <span>View Preview</span>
                <Play size={10} />
              </button>
            </div>
          ) : (
            <div className="next-topic-preview-card" style={{ marginTop: '16px' }}>
              <div className="preview-label">NEXT TOPIC</div>
              <h4>03. OSINT Reconnaissance</h4>
              <p>Unlocks after completion</p>
              <button className="btn-preview-view">
                <span>View Preview</span>
                <Play size={10} />
              </button>
            </div>
          )}

          {/* Quote Card */}
          <div className="sidebar-quote-card" style={{ marginTop: '16px' }}>
            <div className="quote-hacker-avatar">
              <div className="quote-avatar-glow"></div>
            </div>
            <p className="quote-text">
              {activeRoadmapTopic === '01' 
                ? `"Ethical hacking is not about breaking systems, it's about strengthening them."`
                : `"The weakest link in the security chain is the human element."`
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
            <span className="breadcrumb-link" onClick={() => onNavigate('offensive-detail')}>Offensive Security</span>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-active">{activeTopic.num}</span>
          </nav>

          {/* Grid Layout (Middle Content & Right Panel) */}
          <div className="topic-content-grid">
            {/* Middle Main Content */}
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
                  <div className="hacker-hero-img-container">
                    <img src={hackerImg} alt="Hacker Red Hoodie" />
                  </div>
                </div>
              </section>

              {/* What is Concept block */}
              <section className="topic-section-block">
                <h2 className="section-block-title">{activeTopic.conceptTitle}</h2>
                <div className="section-divider-red"></div>
                <p className="section-block-text">
                  {activeTopic.conceptText}
                </p>

                {/* Concept Process Flow */}
                <div className="pentest-flow-row">
                  {activeTopic.conceptFlow.map((step, i) => {
                    const StepIcon = step.icon;
                    return (
                      <React.Fragment key={i}>
                        {i > 0 && <div className="flow-connector-line"></div>}
                        <div className={`flow-step-card ${step.active ? 'active' : ''}`}>
                          <div className="flow-step-icon-outer">
                            <StepIcon size={18} style={{ color: '#ff5555' }} />
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
                          <CardIcon size={16} style={{ color: '#ff5555' }} />
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
                              <Activity size={24} style={{ color: '#ff5555' }} />
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

            {/* Right Sidebar Panel */}
            <div className="topic-right-column">
              {/* What You'll Learn */}
              <div className="right-panel-card">
                <h3>What You'll Learn</h3>
                <ul className="learn-checklist">
                  {activeTopic.learnList.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ready to Start? */}
              <div className="right-panel-card ready-start-card">
                <h3>Ready to Start?</h3>
                <p>{activeTopic.readyText}</p>
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
                    <strong>{activeTopic.stats.time}</strong>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <TrendingUp size={14} />
                  <div>
                    <span>Difficulty Level</span>
                    <strong>{activeTopic.stats.diff}</strong>
                  </div>
                </div>
                <div className="quick-stat-item">
                  <Laptop size={14} />
                  <div>
                    <span>Prerequisites</span>
                    <strong>{activeTopic.stats.prereq}</strong>
                  </div>
                </div>
                <div className="quick-stat-item" style={{ cursor: 'pointer' }} onClick={() => {
                  if (TOPIC_DETAILS[activeTopic.stats.nextNum]) {
                    setActiveRoadmapTopic(activeTopic.stats.nextNum);
                  }
                }}>
                  <ArrowRight size={14} />
                  <div>
                    <span>Next Topic</span>
                    <strong>{activeTopic.stats.next}</strong>
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
