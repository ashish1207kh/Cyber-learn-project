/* eslint-disable */
import React from 'react';
import { 
  Swords, 
  Shield, 
  BookOpen, 
  Award, 
  ArrowRight, 
  Copy,
  Check,
  ChevronRight,
  Server,
  Globe,
  Crosshair,
  Terminal,
  Activity
} from 'lucide-react';
import Header from './Header';
import hackerImg from '../assets/cyber-hacker-red.jpg';

function HorizontalTimeline() {
  const steps = [
    { title: "01. Pre-Engagement & Rules", desc: "Define scope, establish legal boundaries (NDA, RoE), and set communication channels. No testing occurs here." },
    { title: "02. Reconnaissance & OSINT", desc: "Passive Data Gathering: Scraping open source intelligence (OSINT). Testers search WHOIS, public code repos for leaked keys, and social media." },
    { title: "03. Scanning & Enumeration", desc: "Active Interaction: Sending packets to the target. Use tools like Nmap to map open ports, live systems, and OS versions." },
    { title: "04. Vulnerability Assessment", desc: "Analyzing the scan data against known vulnerability databases (CVEs). Use automated tools (Nessus) to find potential unpatched flaws." },
    { title: "05. Exploitation", desc: "Weaponization & Gaining Access: Launching targeted attacks (e.g., using Metasploit) to bypass defenses and execute code on the target." },
    { title: "06. Post-Exploitation", desc: "Maintaining Access & Privilege Escalation: Attempting to elevate local user access to root/domain admin and moving laterally." },
    { title: "07. Reporting & Remediation", desc: "The final, vital document detailing exactly what was found, how it was executed, and remediation steps for the Blue Team." }
  ];

  return (
    <div className="timeline-container">
      {steps.map((step, idx) => (
        <div key={idx} className="timeline-node">
          <h4>{step.title}</h4>
          <div className="timeline-tooltip">
            <strong>{step.title}</strong>
            <p style={{ marginTop: '8px', fontSize: '13px', color: '#cbd5e1' }}>{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function BranchingFlowchart() {
  return (
    <div className="flowchart-container">
      <div className="flowchart-root">
        01. Penetration Testing
      </div>
      <div className="flowchart-branches">
        <div className="flowchart-card">
          <Server size={32} className="flowchart-icon" />
          <h4>Network & Infrastructure</h4>
          <span className="role">Junior Net Tester</span>
          <p>Finding an unsecured server or misconfigured router.</p>
          <div className="flowchart-certs">
            <span className="cyber-badge">eJPT</span>
            <span className="cyber-badge">CompTIA PenTest+</span>
          </div>
        </div>
        
        <div className="flowchart-card">
          <Globe size={32} className="flowchart-icon" />
          <h4>Web Application Security</h4>
          <span className="role">App Security Analyst</span>
          <p>Exploiting an input form to dump a customer database (SQLi).</p>
          <div className="flowchart-certs">
            <span className="cyber-badge">GWAPT</span>
            <span className="cyber-badge">OSWE</span>
          </div>
        </div>

        <div className="flowchart-card">
          <Crosshair size={32} className="flowchart-icon" />
          <h4>Adversary Simulation</h4>
          <span className="role">Red Teamer</span>
          <p>Simulating an APT while trying to bypass all Blue Team detection mechanisms.</p>
          <div className="flowchart-certs">
            <span className="cyber-badge">OSCP</span>
            <span className="cyber-badge">CRTO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolsTable() {
  const tools = [
    { name: "Nmap", icon: Activity, focus: "Network Scanning", desc: "Maps the battlefield. Shows open ports and services." },
    { name: "Burp Suite", icon: Globe, focus: "Web Application", desc: "Proxies web traffic. Manual analysis of SQLi, XSS, and logic flaws." },
    { name: "Metasploit", icon: Crosshair, focus: "Exploitation Framework", desc: "Launches weaponized exploits (like EternalBlue) against known flaws." },
    { name: "Wireshark", icon: Activity, focus: "Network Traffic", desc: "Analyzes live PCAPs to sniff passwords in cleartext (e.g., FTP, Telnet)." },
    { name: "John the Ripper", icon: Terminal, focus: "Password Cracking", desc: "Performs brute-force, dictionary, and rainbow table attacks on hashes." }
  ];

  return (
    <div className="cyber-table-container">
      <table className="cyber-table">
        <thead>
          <tr>
            <th>Tool</th>
            <th>Focus Area</th>
            <th>Visual Purpose</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((t, i) => (
            <tr key={i}>
              <td>
                <strong>
                  <t.icon size={16} />
                  {t.name}
                </strong>
              </td>
              <td>{t.focus}</td>
              <td>{t.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Content data for each topic - deep syllabus, simplified with examples and interactive flows
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
        id: "sec-concept",
        title: "1. The Essential Concept",
        content: "The core objective of penetration testing is authorized, simulated warfare. While an automated scanner might find an unpatched window, it takes a human attacker (the pentester) to realize that the window can be combined with a ladder found elsewhere to breach the main entrance."
      },
      {
        id: "sec-methodology",
        title: "2. Visualization of Methodology",
        content: "To succeed as a student or professional, you must master the standardized lifecycle. This prevents chaotic, illegal testing and ensures reproducibility.",
        customComponent: "Timeline"
      },
      {
        id: "sec-tools",
        title: "3. Essential Testing Lab Tools (Top 5)",
        content: "Every professional pentester carries a specialized toolkit. Here are the must-know applications:",
        customComponent: "ToolsTable"
      },
      {
        id: "sec-roadmap",
        title: "4. Your Career & Development Roadmap",
        content: "This section directly helps you pick your path. Pentesting is not just an entry-level skill; it leads to highly specialized and lucrative careers.",
        customComponent: "Flowchart"
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
          "Authority: Spoofing executives, IT admins, or police officials to force immediate obedience. People are naturally inclined to obey commands from recognized figures.",
          "Urgency: Creating false deadlines (e.g., account suspension warnings, financial penalties) to bypass logical thinking and force immediate action.",
          "Scarcity: Offering limited-time access or resources to manipulate target actions based on fear of missing out.",
          "Social Proof: Creating peer-pressure scenarios where target complies because they believe 'everyone else is doing it'."
        ],
        example: "An attacker calls a customer service representative claiming to be the Chief Technology Officer (CTO). They state that they are locked out of an active client project and demand a password reset immediately due to an upcoming board meeting deadline (combining Authority and Urgency)."
      },
      {
        id: "sec-vectors",
        title: "2. Threat Attack Vectors",
        content: "Study the tactical delivery mechanisms of professional social engineering campaigns:",
        bulletPoints: [
          "Phishing (Email): Sending customized fraudulent emails containing malicious links, attachments, or macro documents designed to harvest credentials or install malware.",
          "Vishing (Voice): Phone support scams spoofing corporate helpdesks or financial institutions to verbally extract passwords, multi-factor codes, or personal data.",
          "Tailgating (Physical): Exploiting social courtesy (e.g., holding a door open for someone with a box) to follow authorized workers into secure office buildings without badge authorization."
        ],
        example: "An attacker dresses as a UPS delivery courier holding a heavy box. As an employee badges into the corporate entrance, the attacker smiles and asks them to hold the door. The employee politely holds the door, letting the unauthorized attacker bypass physical security badges."
      }
    ],
    certs: [
      { name: 'SEPP', full: 'Certified Social Engineering Pentester', desc: 'Focuses on advanced manipulation, OSINT, and facility breach.', diff: 'Intermediate' }
    ]
  }
};

const placeholderNamesOffensive = [
  "OSINT Reconnaissance", "Exploitation Techniques", "Post-Exploitation",
  "Red Teaming", "Web App Hacking", "Wireless Hacking",
  "Cloud Security Testing", "Hardware Hacking", "Malware Analysis",
  "Exploit Development", "IoT Security", "Physical Security Breach",
  "Bug Bounty Hunting"
];

for (let i = 3; i <= 15; i++) {
  const num = i < 10 ? `0${i}` : `${i}`;
  TOPIC_DETAILS[num] = {
    num: num,
    title: placeholderNamesOffensive[i - 3],
    subtitle: 'Coming Soon',
    description: `The complete learning path and curriculum for ${placeholderNamesOffensive[i - 3]} is currently under development. Please check back later when we add the full content and interactive diagrams.`,
    badges: ["In Development", "Coming Soon"],
    stats: { time: "TBD", diff: "TBD", prereq: "TBD" },
    sections: [
      {
        id: "sec-coming-soon",
        title: "Content Under Construction",
        content: `We are currently building the comprehensive training module for ${placeholderNamesOffensive[i - 3]}. This section will feature step-by-step methodologies, interactive architecture diagrams, command snippets, and deep technical breakdowns.`,
        bulletPoints: [
          "Detailed methodology and frameworks",
          "Interactive terminal commands",
          "Advanced technical diagrams and use-cases"
        ]
      }
    ],
    certs: []
  };
}

// Reconnaissance flow diagram component
function ReconFlowDiagram() {
  return (
    <div className="flow-diagram-container">
      <div className="flow-step">
        <div className="flow-step-num">1</div>
        <div className="flow-step-content">
          <h4>Passive OSINT</h4>
          <p>Collect DNS records, domain WHOIS info, and employee details via LinkedIn without warning the target.</p>
        </div>
      </div>
      <div className="flow-arrow">→</div>
      <div className="flow-step">
        <div className="flow-step-num">2</div>
        <div className="flow-step-content">
          <h4>Asset Mapping</h4>
          <p>Enumerate subdomains and virtual hosts using wordlists to build a map of target servers.</p>
        </div>
      </div>
      <div className="flow-arrow">→</div>
      <div className="flow-step">
        <div className="flow-step-num">3</div>
        <div className="flow-step-content">
          <h4>Vulnerability Discovery</h4>
          <p>Search directories, open buckets, and public exposures (Shodan) for entry routes.</p>
        </div>
      </div>
    </div>
  );
}

// TCP Handshake sequence flowchart component
function TCPHandshakeDiagram() {
  return (
    <div className="handshake-diagram">
      <div className="handshake-actor-labels">
        <span>Attacker (Scanner)</span>
        <span>Victim (Target Server)</span>
      </div>
      <div className="handshake-flow-lines">
        <div className="handshake-line syn">
          <div className="actor-dot"></div>
          <div className="arrow-line"><span>1. SYN (Synchronize Request)</span></div>
          <div className="actor-dot"></div>
        </div>
        <div className="handshake-line syn-ack">
          <div className="actor-dot"></div>
          <div className="arrow-line-rev"><span>2. SYN-ACK (Acknowledge Connection)</span></div>
          <div className="actor-dot"></div>
        </div>
        <div className="handshake-line ack">
          <div className="actor-dot"></div>
          <div className="arrow-line"><span>3. RST (Reset / Close to hide connection)</span></div>
          <div className="actor-dot"></div>
        </div>
      </div>
    </div>
  );
}

// Buffer Overflow visual layout component
function BufferOverflowDiagram() {
  return (
    <div className="buffer-overflow-diagram">
      <h4>Normal Memory stack</h4>
      <div className="memory-stack">
        <div className="stack-block buffer">Local Variable Buffer (Safe Space)</div>
        <div className="stack-block ebp">Saved EBP</div>
        <div className="stack-block eip safe">EIP (Points to next instruction)</div>
      </div>
      
      <h4>Exploited Memory stack (Overflowed)</h4>
      <div className="memory-stack exploited">
        <div className="stack-block buffer overflowed">Shellcode Payload (Overwritten Buffer)</div>
        <div className="stack-block ebp overflowed">Junk Characters ("A" * Offset)</div>
        <div className="stack-block eip hijacked">JMP ESP (Hijacked Pointer to Shellcode)</div>
      </div>
    </div>
  );
}

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
  const [expandedExampleId, setExpandedExampleId] = React.useState(null);

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
    { num: '06', name: 'Red Teaming' },
    { num: '07', name: 'Web App Hacking' },
    { num: '08', name: 'Wireless Hacking' },
    { num: '09', name: 'Cloud Security Testing' },
    { num: '10', name: 'Hardware Hacking' },
    { num: '11', name: 'Malware Analysis' },
    { num: '12', name: 'Exploit Development' },
    { num: '13', name: 'IoT Security' },
    { num: '14', name: 'Physical Security Breach' },
    { num: '15', name: 'Bug Bounty Hunting' }
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

          {/* Syllabus Index attached directly under the menu header */}
          <div className="sidebar-section" style={{ marginTop: '20px' }}>
            <span className="sidebar-section-title">SYLLABUS INDEX</span>
            <div className="sidebar-menu-list">
              {activeTopic.sections.map((sec, idx) => (
                <a 
                  key={idx} 
                  href={`#${sec.id}`}
                  className="sidebar-menu-item outline-link"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(sec.id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <ChevronRight size={12} style={{ marginRight: '6px', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px' }}>{sec.title}</span>
                </a>
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

              {/* Study syllabus section blocks - Outline sidebar removed to maximize reading space */}
              <div className="gitbook-content-split-full">
                {/* ── SYLLABUS CORE CONTENT ── */}
                <div className="gitbook-main-document">
                  {activeTopic.sections.map((sec, idx) => (
                    <section 
                      key={idx} 
                      id={sec.id} 
                      className="gitbook-section-card"
                      style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '24px', marginBottom: '16px' }}
                    >
                      <h2 style={{ margin: '0 0 14px 0', fontSize: '22px', color: '#ffffff' }}>{sec.title}</h2>
                      
                      <p className="gitbook-section-text">{sec.content}</p>
                      
                      {sec.customComponent === 'Timeline' && <HorizontalTimeline />}
                      {sec.customComponent === 'ToolsTable' && <ToolsTable />}
                      {sec.customComponent === 'Flowchart' && <BranchingFlowchart />}

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

                      {/* CONDITIONAL DIAGRAMS */}
                      {sec.id === 'sec-recon' && <ReconFlowDiagram />}
                      {sec.id === 'sec-scanning' && <TCPHandshakeDiagram />}
                      {sec.id === 'sec-exploit' && <BufferOverflowDiagram />}

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

                      {/* PRACTICAL EXAMPLE BOX */}
                      {sec.example && (
                        <div className="real-world-example-box">
                          <div 
                            className="example-box-header" 
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                            onClick={() => setExpandedExampleId(expandedExampleId === sec.id ? null : sec.id)}
                          >
                            <h4 style={{ margin: 0 }}>Real-World Practical Example</h4>
                            <span style={{ fontSize: '11px', color: '#ff5555', fontWeight: '800', letterSpacing: '0.5px' }}>
                              {expandedExampleId === sec.id ? '[-] HIDE EXAMPLE' : '[+] SHOW EXAMPLE'}
                            </span>
                          </div>
                          {expandedExampleId === sec.id && (
                            <p style={{ marginTop: '12px', animation: 'fadeIn 0.25s ease', color: '#cbd5e1', fontSize: '13.5px', lineHeight: '1.6' }}>
                              {sec.example}
                            </p>
                          )}
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
                    <h2>{activeTopic.sections.length + 1}. Recommended Professional Certifications</h2>
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
