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
  ChevronRight,
  Database,
  Server,
  Activity,
  Play
} from 'lucide-react';
import Header from './Header';
import analystImg from '../assets/cyber-analyst-blue.jpg';

// Content data for each defensive topic
export const DEFENSIVE_TOPICS = {
  '01': {
    num: '01',
    title: 'SIEM Monitoring',
    subtitle: 'Security Information and Event Management',
    description: "Learn how modern Security Operations Centers (SOC) capture, analyze, and correlate telemetry data across an entire enterprise network to identify cyber threats before they escalate.",
    badges: ["Core Skill", "High Demand", "Defensive Operations"],
    stats: { time: "25 Hours", diff: "Beginner to Intermediate", prereq: "Networking Basics, Linux/Windows Logs" },
    sections: [
      {
        id: "sec-logs",
        title: "1. Log Generation & Parsing",
        content: "Every system, application, and network device generates logs detailing its activities. Defense starts with capturing these footprints and converting raw text into standardized formats.",
        bulletPoints: [
          "Syslog Protocol: Standard protocol for forwarding system messages. Understand facilities (auth, cron, mail) and severity levels (0-Emergency to 7-Debug).",
          "Windows Event Logs: XML-based log structure. Key event IDs to monitor: 4624 (Successful Logon), 4625 (Failed Logon), 4688 (Process Creation).",
          "Log Normalization: Cleaning up logs from different systems (IIS, Apache, Windows, Cisco) into a standard format so they can be parsed together."
        ],
        command: "tail -f /var/log/auth.log | grep 'Failed password'",
        commandExpl: [
          { flag: "tail -f", desc: "Follow tail: Outputs log file lines in real-time as they are written." },
          { flag: "/var/log/auth.log", desc: "The standard file path for authentication logs on Debian/Ubuntu systems." },
          { flag: "grep 'Failed'", desc: "Filter logs to only show lines containing failed authentication attempts." }
        ],
        example: "An attacker attempts to brute-force a SSH port. The target Linux server generates multiple log entries reading 'Failed password for root from 192.168.10.45 port 54890 ssh2'. The SIEM parser extracts the source IP, target port, and username into a structured schema.",
        subModules: [
          { id: "windows-events", name: "Deep Dive: Windows Security Event IDs" },
          { id: "syslog-rfc", name: "RFC 5424 Syslog Protocol Mechanics" }
        ]
      },
      {
        id: "sec-aggregation",
        title: "2. Data Aggregation & Storage",
        content: "A corporate network generates millions of logs daily. These must be collected securely and shipped to a central repository without losing data.",
        bulletPoints: [
          "Log Forwarders: Lightweight agents (like Splunk Universal Forwarder or Elastic Filebeat) installed on servers to collect logs and forward them to SIEM indexing hubs.",
          "Secure Transport: Encrypting log data in transit using TLS to prevent malicious tampering or eavesdropping.",
          "Indexing & Retention: Categorizing logs by timestamp and source host, and archiving old indices for legal compliance."
        ],
        example: "A company deploys Splunk Universal Forwarder on 50 web servers. The forwarder monitors Apache access logs and securely ships them over port 9997 to a central Splunk Indexer, where they are indexed and made searchable within seconds.",
        subModules: [
          { id: "logstash-pipelines", name: "Building Logstash Ingestion Pipelines" },
          { id: "splunk-forwarding", name: "Configuring Splunk Universal Forwarders" }
        ]
      },
      {
        id: "sec-correlation",
        title: "3. Alerting & Correlation Rules",
        content: "Correlation rules are the logic blocks of SIEM. They link isolated log events together to identify complex, multi-stage cyberattacks.",
        bulletPoints: [
          "Single-Host Alerts: E.g., Trigger alert if 10 failed logins happen within 1 minute on a single machine.",
          "Multi-Stage Correlation: E.g., Trigger critical alert if a server has 10 failed logins, followed by 1 successful login, followed by process creation of cmd.exe.",
          "False Positives: Tuning correlation parameters to minimize false alert noise, letting analysts focus on genuine threat alerts."
        ],
        callout: "💡 ANALYST TIP: Well-written correlation rules look for behaviors (like lateral movement or privilege escalation) rather than static signatures (like specific IP addresses).",
        example: "A correlation rule triggers a priority alert when it sees user 'john_doe' logging in from a local office IP in New York and, 5 minutes later, successfully logging in to a server from an IP address located in Germany (Impossible Travel Alert).",
        subModules: [
          { id: "yara-rules", name: "YARA Rule Writing for Malware Alerts" },
          { id: "sentinel-kql", name: "KQL Rules for Microsoft Sentinel" }
        ]
      }
    ],
    certs: [
      { name: 'Splunk Core', full: 'Splunk Core Certified Power User', desc: 'Validates ability to navigate and create dashboards and alerts in Splunk.', diff: 'Beginner' },
      { name: 'CySA+', full: 'CompTIA Cybersecurity Analyst', desc: 'Industry certification focused on incident response, security operations, and log analysis.', diff: 'Intermediate' }
    ]
  },
  '02': {
    num: '02',
    title: 'Incident Response',
    subtitle: 'The Elite SWAT Team of Cyber Security',
    description: "Incident Response (IR) is the structured process of detecting, isolating, and eradicating cyber threats to minimize business disruption during a security breach.",
    badges: ["Core Skill", "High Stakes", "Fast Paced"],
    stats: { time: "30 Hours", diff: "Intermediate to Advanced", prereq: "SIEM Monitoring, Systems Internals" },
    sections: [
      {
        id: "sec-ir-phases",
        title: "1. NIST / SANS Incident Response Phases",
        content: "A professional incident responder follows a strict, step-by-step framework to respond to attacks. This prevents panic and ensures evidence is preserved.",
        bulletPoints: [
          "Preparation: Hardening systems, training personnel, and creating response playbooks before an incident happens.",
          "Identification: Detecting threat alerts and verifying if they are actual security incidents.",
          "Containment: Isolating compromised hosts from the network (e.g., placing a machine in a sandbox VLAN) to stop lateral infection.",
          "Eradication: Removing all threat files, killing active hacker shells, and patching the initial entry loophole.",
          "Recovery: Safely restoring production systems and verifying that no malicious activities remain.",
          "Lessons Learned: Documenting the incident to improve future defenses and update playbooks."
        ],
        example: "A SOC analyst detects Ransomware encrypting files on a server. Following the IR playbook, they immediately isolate the server (Containment) by disabling its network interface. They then scan the file system, delete the ransomware executable (Eradication), and restore files from an offline backup (Recovery).",
        subModules: [
          { id: "sans-incident-handling", name: "SANS 6-Step Incident Handling Guide" },
          { id: "playbook-creation", name: "Writing Incident Response Playbooks" }
        ]
      },
      {
        id: "sec-forensics",
        title: "2. RAM & File System Analysis",
        content: "Attackers often hide malware inside running system memory. Responders must acquire and analyze memory dumps and disk images to find indicators of compromise.",
        bulletPoints: [
          "Memory Forensics: Analyzing active RAM to locate running malicious processes, active network connections, and unencrypted credentials.",
          "Disk Forensics: Parsing file system metadata (like MFT or journal logs) to find deleted malware files and identify file creation dates.",
          "EDR (Endpoint Detection & Response): Using agent software (like CrowdStrike, SentinelOne, or Wazuh) to query system memory and processes across thousands of endpoints."
        ],
        command: "vol.py -f memory_dump.raw windows.info",
        commandExpl: [
          { flag: "vol.py", desc: "Volatility Command: Invokes the Volatility memory forensics framework tool." },
          { flag: "-f memory_dump.raw", desc: "File: Specifies the raw file system memory image to analyze." },
          { flag: "windows.info", desc: "Plugin: Extracts operating system info, kernel versions, and architecture." }
        ],
        example: "An analyst performs memory forensics on a compromised workstation. Using Volatility, they list active network sockets and discover an unknown process 'svchost.exe' connected to an external malicious server. This reveals a fileless Trojan executing directly in memory.",
        subModules: [
          { id: "volatility-deep", name: "Volatility 3 Advanced Memory Plugins" },
          { id: "timeline-forensics", name: "Timeline Analysis & Supertimeline Creation" }
        ]
      }
    ],
    certs: [
      { name: 'GCIH', full: 'GIAC Certified Incident Handler', desc: 'Validates incident handling, threat detection, and exploit analysis skills.', diff: 'Advanced' },
      { name: 'CHFI', full: 'Computer Hacking Forensic Investigator', desc: 'Focuses on digital forensic processes, evidence gathering, and analysis.', diff: 'Advanced' }
    ]
  }
};

// Log aggregation flow diagram component
function LogFlowDiagram() {
  return (
    <div className="flow-diagram-container">
      <div className="flow-step">
        <div className="flow-step-num">1</div>
        <div className="flow-step-content">
          <h4>Log Generation</h4>
          <p>Firewalls, web servers, and Windows active directory servers generate raw security logs in real-time.</p>
        </div>
      </div>
      <div className="flow-arrow">→</div>
      <div className="flow-step">
        <div className="flow-step-num">2</div>
        <div className="flow-step-content">
          <h4>Aggregation</h4>
          <p>Log Forwarders (Filebeat, Splunk agents) encrypt logs and ship them to index repositories.</p>
        </div>
      </div>
      <div className="flow-arrow">→</div>
      <div className="flow-step">
        <div className="flow-step-num">3</div>
        <div className="flow-step-content">
          <h4>Alerting Rules</h4>
          <p>Correlation queries scan the logs and trigger instant alerts when attack patterns match.</p>
        </div>
      </div>
    </div>
  );
}

// Incident Response lifecycle component
function IncidentResponseDiagram() {
  return (
    <div className="handshake-diagram">
      <div className="handshake-actor-labels">
        <span>Incident Action Step</span>
        <span>Target Outcome</span>
      </div>
      <div className="handshake-flow-lines">
        <div className="handshake-line syn">
          <div className="actor-dot"></div>
          <div className="arrow-line"><span>1. Identification (Spot threat alerts)</span></div>
          <div className="actor-dot"></div>
        </div>
        <div className="handshake-line syn-ack">
          <div className="actor-dot"></div>
          <div className="arrow-line-rev"><span>2. Containment (Isolate infected servers)</span></div>
          <div className="actor-dot"></div>
        </div>
        <div className="handshake-line ack">
          <div className="actor-dot"></div>
          <div className="arrow-line"><span>3. Eradication (Remove threat files)</span></div>
          <div className="actor-dot"></div>
        </div>
      </div>
    </div>
  );
}

// Memory Analysis Stack Component
function MemoryStackDiagram() {
  return (
    <div className="buffer-overflow-diagram">
      <h4>Host System Memory Structure</h4>
      <div className="memory-stack">
        <div className="stack-block buffer">OS Kernel Space (Protected)</div>
        <div className="stack-block ebp">User Processes Space</div>
        <div className="stack-block eip safe">Volatile RAM Dump Area</div>
      </div>
      
      <h4>Malware Forensic Detection (RAM Dump)</h4>
      <div className="memory-stack exploited">
        <div className="stack-block buffer overflowed">Normal Processes (explorer.exe)</div>
        <div className="stack-block ebp overflowed">Injected DLLs / API Hooking</div>
        <div className="stack-block eip hijacked">Detected Malicious Socket (Volatility)</div>
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

export default function DefensiveTopicDetail({ topicId = '01', onBack, onNavigate }) {
  const [activeRoadmapTopic, setActiveRoadmapTopic] = React.useState(topicId);
  const [expandedExampleId, setExpandedExampleId] = React.useState(null);

  React.useEffect(() => {
    setActiveRoadmapTopic(topicId);
  }, [topicId]);

  const activeTopic = DEFENSIVE_TOPICS[activeRoadmapTopic] || DEFENSIVE_TOPICS['01'];

  // Left Sidebar Paths
  const sidebarPaths = [
    { name: 'Offensive Security', icon: Swords, active: false },
    { name: 'Defensive Security', icon: Shield, active: true },
    { name: 'GNC (Governance, Risk & Compliance)', icon: BookOpen, active: false }
  ];

  // Defensive Roadmap Topics
  const roadmapTopics = [
    { num: '01', name: 'SIEM Monitoring' },
    { num: '02', name: 'Incident Response' },
    { num: '03', name: 'Threat Hunting' },
    { num: '04', name: 'Digital Forensics' },
    { num: '05', name: 'Vulnerability Management' },
    { num: '06', name: 'Security Operations' }
  ];

  return (
    <div className="defensive-dashboard-wrapper defensive-theme select-none">
      <Header view="defensive" onBack={onBack} />

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
            <span className="breadcrumb-link" onClick={() => onNavigate('defensive-detail')}>Defensive Security</span>
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
                    <img src={analystImg} alt="Analyst Hero illustration" />
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
                      {sec.id === 'sec-logs' && <LogFlowDiagram />}
                      {sec.id === 'sec-ir-phases' && <IncidentResponseDiagram />}
                      {sec.id === 'sec-forensics' && <MemoryStackDiagram />}

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
                                onClick={() => onNavigate('defensive-subtopic-detail', sub.id)}
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
                    <p className="gitbook-section-text">Recommended pathways for validating your security analyst skills in the industry:</p>
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
