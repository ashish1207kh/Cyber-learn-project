import React from 'react';
import { 
  Swords, 
  Shield, 
  BookOpen, 
  Award, 
  FileText, 
  ArrowRight, 
  Clock, 
  TrendingUp,
  Terminal,
  Laptop,
  Copy,
  Check,
  Cpu,
  Globe,
  Settings,
  Layers,
  ChevronRight
} from 'lucide-react';
import Header from './Header';
import hackerImg from '../assets/cyber-hacker-red.jpg';
import offensiveScannerImg from '../assets/offensive-scanner-graph.jpg';

// Content data for each topic - deep syllabus & clickable sub-modules redirects
export const TOPIC_DETAILS = {
  '01': {
    num: '01',
    title: 'Penetration Testing',
    subtitle: 'Ethical Hacking & Vulnerability Assessment',
    description: "A comprehensive curriculum to master the mindset, tactics, and legal methodologies of professional ethical hacking. Learn to find, exploit, and remediate critical security flaws in target networks and infrastructures.",
    badges: ["Core Skill", "High Demand", "Hands-on Focus"],
    stats: { time: "30 Hours", diff: "Intermediate", prereq: "Networking Basics, Linux CLI" },
    sections: [
      {
        id: "sec-recon",
        title: "1. Reconnaissance & OSINT Methodology",
        content: "Reconnaissance is the foundational phase of any security audit. It is divided into passive gathering (gathering data without interacting directly with the target) and active profiling.",
        bulletPoints: [
          "Passive OSINT: Harvesting public domain records, DNS servers, WHOIS databases, and corporate subdomains.",
          "Employee Profiling: Locating email naming conventions, leaked passwords, and employee profiles on public professional portals.",
          "Target Asset Mapping: Correlating external cloud buckets, unmapped subdomains, and staging environments to build a comprehensive target blueprint."
        ],
        callout: "💡 SECURITY INSIGHT: Pentesters spend up to 70% of their assessment time in this stage. A thorough reconnaissance phase significantly increases the success rate of subsequent phases.",
        subModules: [
          { id: "dns-recon", name: "DNS Reconnaissance & Whois Enumeration" },
          { id: "subdomain-discovery", name: "Subdomain Discovery & Virtual Host Hunting" },
          { id: "google-dorking", name: "Advanced Google Dorking Database (GHDB)" }
        ]
      },
      {
        id: "sec-scanning",
        title: "2. Port Discovery & Service Enumeration",
        content: "Active scanning involves interacting directly with the target's open ports to determine what operating systems and services are listening. Port states are classified as Open, Closed, or Filtered.",
        bulletPoints: [
          "TCP Connect Scanning (-sT): Performs a full 3-way handshake to verify if a port is open. Loud but accurate.",
          "SYN Stealth Scanning (-sS): Sends only the initial SYN packet. Faster and less likely to trigger firewall alerts.",
          "UDP Scanning (-sU): Identifies stateless UDP services (e.g., DNS, SNMP) which require custom packet replies."
        ],
        command: "nmap -sV -sC -Pn -oN scan_results.txt 10.10.224.18",
        commandExpl: [
          { flag: "-sV", desc: "Service and Version detection: Probes open ports to identify application names." },
          { flag: "-sC", desc: "Script Scan: Runs default Lua scripts to test ports for common vulnerabilities." },
          { flag: "-Pn", desc: "No Ping: Skip ICMP ping checks, assuming target is online to bypass firewalls." }
        ],
        subModules: [
          { id: "nmap-nse", name: "Nmap Advanced Script Engine (NSE) Usage" },
          { id: "banner-grabbing", name: "SMTP & SMB Banner Grabbing Techniques" },
          { id: "udp-scanning", name: "UDP Protocol Port Scanning Mechanics" }
        ]
      },
      {
        id: "sec-exploit",
        title: "3. Exploitation & Gaining Access",
        content: "Exploitation is the weaponization phase. Testers identify design flaws, unpatched software, or misconfigurations to execute code on the target system.",
        bulletPoints: [
          "Arbitrary Code Execution (ACE): Forcing the target computer to run unauthorized hacker-controlled commands.",
          "Staged Payloads: A tiny loader is sent first, which downloads the larger exploit payload. Useful when buffer space is small.",
          "Non-Staged Payloads: The entire exploit code and shell payload are sent in a single network packet.",
          "Shell Connections: Bind Shells open a port on the victim (easily blocked); Reverse Shells force the victim to connect back out."
        ],
        subModules: [
          { id: "buffer-overflow", name: "Buffer Overflow Vulnerability Exploits" },
          { id: "metasploit-handlers", name: "Metasploit Exploit Multi-Handlers Config" },
          { id: "exploit-payloads", name: "Manually Modifying Exploit Payloads" }
        ]
      },
      {
        id: "sec-priv",
        title: "4. Privilege Escalation Techniques",
        content: "Initial footholds usually grant restricted system privileges (like 'www-data' or 'apache'). Privilege Escalation is the process of elevating access to root/administrator level.",
        bulletPoints: [
          "Linux SUID Exploitation: Running system binaries with owner privileges that allow shell spawning (e.g., misconfigured find or vim).",
          "Windows Service Hijacking: Replacing service executables or modifying registry paths to execute admin code.",
          "Kernel Exploits: Triggering memory corruption flaws within the OS kernel to obtain kernel-level system permissions."
        ],
        callout: "⚠️ WARNING: Elevating privileges changes the target system's security context. Document SUID settings and service paths before attempting modifications.",
        subModules: [
          { id: "suid-escalation", name: "Abusing SUID Executable Permissions" },
          { id: "unquoted-service-paths", name: "Windows Unquoted Service Paths Attacks" },
          { id: "kernel-exploitation", name: "Kernel Exploitation & Kernel Auditing" }
        ]
      },
      {
        id: "sec-reporting",
        title: "5. Reporting, Risk Scoring & Remediation",
        content: "A successful pentest must provide actionable remediation guides for software developers to fix security flaws.",
        bulletPoints: [
          "Risk Prioritization: Using Common Vulnerability Scoring System (CVSS v3.0) to rank vulnerabilities from Low to Critical.",
          "Evidence Compilation: Providing proof-of-concept scripts and screenshot logs for verification.",
          "Remediation Steps: Recommending software patches, port closures, and secure host configurations."
        ],
        subModules: [
          { id: "audit-reporting", name: "Writing Executive Summaries for Audits" },
          { id: "cvss-scoring", name: "CVSS Vector Calculation and Scoring" }
        ]
      }
    ],
    certs: [
      { name: 'eJPT', full: 'ElearnSecurity Junior Penetration Tester', desc: 'Validates baseline practical hands-on ethical hacking skills.', diff: 'Beginner' },
      { name: 'OSCP', full: 'OffSec Certified Professional', desc: 'The industry-standard hands-on exploit and privilege escalation exam.', diff: 'Advanced' }
    ]
  },
  '02': {
    num: '02',
    title: 'Social Engineering',
    subtitle: 'The Human Hacking Element',
    description: "Study how psychological triggers, pretexts, and social manipulation are utilized by attackers to bypass technical security controls through human elements.",
    badges: ["Core Skill", "Human Risk", "Psychology Focus"],
    stats: { time: "20 Hours", diff: "Beginner to Intermediate", prereq: "OSINT Basics, Pretexting" },
    sections: [
      {
        id: "sec-concept",
        title: "1. Core Cognitive Triggers",
        content: "Social engineers exploit human psychology triggers rather than software flaws. Master the 6 core cognitive triggers:",
        bulletPoints: [
          "Authority: Spoofing executives, IT admins, or police officials to force immediate obedience.",
          "Urgency: Creating false deadlines (e.g., account suspension warnings) to bypass logical thinking.",
          "Scarcity: Offering limited-time access or resources to manipulate target actions.",
          "Social Proof: Creating peer-pressure scenarios where target complies because 'others did too'."
        ]
      },
      {
        id: "sec-vectors",
        title: "2. Threat Attack Vectors",
        content: "Study the tactical delivery mechanisms of professional social engineering campaigns:",
        bulletPoints: [
          "Phishing (Email): Sending customized fraudulent emails containing malicious links or macro documents.",
          "Vishing (Voice): Phone support scams spoofing corporate helpdesks to verbally extract passwords.",
          "Tailgating (Physical): Exploiting social courtesy to follow authorized workers into secure office doors."
        ]
      }
    ],
    certs: [
      { name: 'SEPP', full: 'Certified Social Engineering Pentester', desc: 'Focuses on advanced manipulation, OSINT, and facility breach.', diff: 'Intermediate' }
    ]
  }
};

// Copy Terminal Command block helper
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

export default function OffensiveTopicDetail({ topicId = '01', onBack, onNavigate }) {
  const [activeRoadmapTopic, setActiveRoadmapTopic] = React.useState(topicId);

  React.useEffect(() => {
    setActiveRoadmapTopic(topicId);
  }, [topicId]);

  const activeTopic = TOPIC_DETAILS[activeRoadmapTopic] || TOPIC_DETAILS['01'];

  // Left Sidebar Paths
  const sidebarPaths = [
    { name: 'Offensive Security', icon: Swords, active: true },
    { name: 'Defensive Security', icon: Shield, active: false },
    { name: 'GNC (Governance, Risk & Compliance)', icon: BookOpen, active: false }
  ];

  // Offensive Roadmap Topics
  const roadmapTopics = [
    { num: '01', name: 'Penetration Testing' },
    { num: '02', name: 'Social Engineering' },
    { num: '03', name: 'OSINT Reconnaissance' },
    { num: '04', name: 'Exploitation Techniques' },
    { num: '05', name: 'Post-Exploitation' },
    { num: '06', name: 'Red Teaming' }
  ];

  return (
    <div className="offensive-dashboard-wrapper select-none">
      <Header view="offensive" onBack={onBack} />

      <div className="offensive-dashboard">
        {/* 1. Left Sidebar */}
        <aside className="dashboard-sidebar topic-sidebar">
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

          {/* GitBook Style Layout */}
          <div className="topic-content-grid-single">
            <div className="topic-left-column">
              {/* Hero Banner */}
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
                </div>
                <div className="topic-hero-right-img">
                  <div className="hacker-hero-img-container">
                    <img src={hackerImg} alt="Hacker Hero illustration" />
                  </div>
                </div>
              </section>

              {/* Study syllabus section blocks */}
              <div className="gitbook-content-split">
                
                {/* ── STICKY SYLLABUS OUTLINE (Left Column) ── */}
                <div className="gitbook-outline-sidebar">
                  <div className="outline-card">
                    <h4>Syllabus Index</h4>
                    <ul>
                      {activeTopic.sections.map((sec, idx) => (
                        <li key={idx}>
                          <a href={`#${sec.id}`} className="outline-link">
                            <ChevronRight size={12} />
                            <span>{sec.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ── SYLLABUS CORE CONTENT (Right Column) ── */}
                <div className="gitbook-main-document">
                  {activeTopic.sections.map((sec, idx) => (
                    <section key={idx} id={sec.id} className="gitbook-section-card">
                      <h2>{sec.title}</h2>
                      <p className="gitbook-section-text">{sec.content}</p>
                      
                      {sec.bulletPoints && (
                        <ul className="gitbook-bullet-list">
                          {sec.bulletPoints.map((bp, i) => (
                            <li key={i}>
                              <span className="gitbook-bullet-icon">•</span>
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {sec.command && (
                        <div style={{ margin: '24px 0' }}>
                          <TerminalCommandBlock command={sec.command} />
                        </div>
                      )}

                      {sec.commandExpl && (
                        <div className="htb-command-expl-wrapper">
                          <h4>Command Parameter Breakdown</h4>
                          <div className="command-expl-grid">
                            {sec.commandExpl.map((expl, i) => (
                              <div key={i} className="command-expl-row">
                                <span className="command-flag-badge">{expl.flag}</span>
                                <span className="command-flag-desc">{expl.desc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {sec.callout && (
                        <div className="htb-concept-callout" style={{ margin: '20px 0' }}>
                          <span className="callout-icon">💡</span>
                          <p>{sec.callout}</p>
                        </div>
                      )}

                      {/* Klik panna vera page ku redirect aagura Deep Sub-modules */}
                      {sec.subModules && (
                        <div className="subtopic-redirect-wrapper" style={{ marginTop: '24px' }}>
                          <h4 style={{ color: '#ffffff', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                            🔗 Click to explore deep-dive modules:
                          </h4>
                          <div className="subtopic-links-grid">
                            {sec.subModules.map((sub, sIdx) => (
                              <button 
                                key={sIdx}
                                className="subtopic-redirect-card-btn"
                                onClick={() => onNavigate('offensive-subtopic-detail', sub.id)}
                              >
                                <span>{sub.name}</span>
                                <ArrowRight size={12} className="card-btn-arrow" />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </section>
                  ))}

                  {/* Certifications Block */}
                  <section className="gitbook-section-card" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '30px' }}>
                    <h2>6. Recommended Professional Certifications</h2>
                    <p className="gitbook-section-text">Recommended pathways for validating your ethical hacking skills in the industry:</p>
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
      </div>
    </div>
  );
}
