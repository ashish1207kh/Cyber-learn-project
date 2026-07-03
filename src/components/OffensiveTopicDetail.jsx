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
        id: "sec-recon",
        title: "1. Reconnaissance & OSINT Methodology",
        content: "Reconnaissance is the foundational phase of any security audit. It is divided into passive gathering (gathering data without interacting directly with the target) and active profiling. Pentesters must map out the entire external attack surface before attempting exploitation.",
        bulletPoints: [
          "Passive OSINT: Harvesting public domain records, DNS servers, WHOIS databases, and corporate subdomains. Use tools like `whois`, `dig`, and `nslookup` to analyze MX, TXT, A, and AAAA records.",
          "DNS Zone Transfers: Testing for misconfigured DNS servers allowing AXFR queries which reveal all DNS mappings. Command: `dig axfr @ns1.target.com target.com`.",
          "Subdomain discovery: Automating search queries using subdomain enumeration tools (like Subfinder, Amass, and Assetfinder) combined with wordlists for brute-forcing (Gobuster DNS mode).",
          "Employee Profiling: Locating corporate email naming conventions, leaked passwords on breach databases, and employee profiles on public professional portals like LinkedIn.",
          "Target Asset Mapping: Searching public asset indexes like Shodan, Censys, and Zoomeye to find exposed services, outdated operating systems, and unprotected AWS S3 buckets."
        ],
        callout: "💡 SECURITY INSIGHT: Pentesters spend up to 70% of their assessment time in this stage. A thorough reconnaissance phase significantly increases the success rate of subsequent phases by mapping all potential entry points.",
        example: "A security analyst is auditing 'acmecorp.com'. By querying public Certificate Transparency logs, they discover a subdomain 'staging-api.acmecorp.com'. Visiting it reveals an open directory index containing backup zip files (.zip) with active SQL credentials and API keys.",
        subModules: [
          { id: "dns-recon", name: "DNS Reconnaissance & Whois Enumeration" },
          { id: "subdomain-discovery", name: "Subdomain Discovery & Virtual Host Hunting" },
          { id: "google-dorking", name: "Advanced Google Dorking Database (GHDB)" }
        ]
      },
      {
        id: "sec-scanning",
        title: "2. Port Discovery & Service Enumeration",
        content: "Active scanning involves interacting directly with the target's open ports to determine what operating systems and services are listening. Port states are classified as Open, Closed, or Filtered based on TCP response behavior.",
        bulletPoints: [
          "TCP Connect Scanning (-sT): Performs a full 3-way handshake (SYN -> SYN-ACK -> ACK) to verify if a port is open. Extremely accurate but easily logged by firewalls.",
          "SYN Stealth Scanning (-sS): Sends only the initial SYN packet. If it receives a SYN-ACK, it responds with a RST packet instead of ACK, closing the connection before it is logged by application firewalls.",
          "UDP Scanning (-sU): Identifies stateless UDP services (e.g., DNS, SNMP, TFTP) which do not use handshakes and require custom packet replies to determine if they are alive.",
          "Service Version Detection (-sV) & Default Scripts (-sC): Probes open ports to identify application names and runs Lua scripts from the Nmap Scripting Engine (NSE) to check for common vulnerabilities."
        ],
        command: "nmap -sV -sC -Pn -p- -T4 -oN scan_results.txt 10.10.224.18",
        commandExpl: [
          { flag: "-sV", desc: "Service and Version detection: Probes open ports to identify application names." },
          { flag: "-sC", desc: "Script Scan: Runs default Lua scripts to test ports for common vulnerabilities." },
          { flag: "-Pn", desc: "No Ping: Skip ICMP ping checks, assuming target is online to bypass firewalls." },
          { flag: "-p-", desc: "Scan all 65,535 ports instead of only the top 1,000 most common ports." },
          { flag: "-T4", desc: "Timing Template: Speeds up execution by using aggressive timeouts and parallel probes." }
        ],
        example: "Running Nmap on 10.10.224.18 reveals that port 21 (FTP) is open and allows anonymous logins, port 80 (HTTP) runs an outdated Apache server, and port 445 (SMB) runs Samba version 3.0.20, which is known to be vulnerable to exploit CVE-2007-2447.",
        subModules: [
          { id: "nmap-nse", name: "Nmap Advanced Script Engine (NSE) Usage" },
          { id: "banner-grabbing", name: "SMTP & SMB Banner Grabbing Techniques" },
          { id: "udp-scanning", name: "UDP Protocol Port Scanning Mechanics" }
        ]
      },
      {
        id: "sec-exploit",
        title: "3. Exploitation & Gaining Access",
        content: "Exploitation is the weaponization phase. Testers identify design flaws, unpatched software, or misconfigurations to execute code on the target system. Standard exploitation involves finding CVEs, choosing a matching payload, and launching the attack.",
        bulletPoints: [
          "Buffer Overflow Vulnerability: Overwriting CPU registers (specifically the EIP - Extended Instruction Pointer) to redirect program execution flow to malicious shellcode.",
          "Staged Payloads: A tiny loader is sent first, which establishes a stable network socket and downloads the larger exploit payload. Useful when buffer space is small.",
          "Non-Staged Payloads: The entire exploit code and shell payload are sent in a single network transmission (e.g., `linux/x64/shell_reverse_tcp`).",
          "Reverse Shell vs Bind Shell: A Bind shell listens on a port on the victim machine (frequently blocked by ingress firewalls). A Reverse shell forces the victim machine to connect back out to the attacker's machine (bypassing egress controls)."
        ],
        callout: "🛡️ EXPLOIT WORKFLOW: Identify service version -> Search Exploit-DB (`searchsploit`) -> Configure exploit parameters (LHOST, RHOST, LPORT) -> Fire exploit -> Upgrade shell using python pty.",
        example: "The Samba 3.0.20 service identified earlier is vulnerable to command injection. An attacker uses the Metasploit module 'exploit/multi/samba/usermap_script', sets LHOST to their system IP, and fires the exploit. The vulnerable server executes the shellcode and opens a reverse shell connection back to the attacker, giving command-line access as the user daemon.",
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
          "Linux SUID Exploitation: Running system binaries that have the Set Owner User ID permission bit set. If an SUID file is owned by root, it runs with root privileges. We abuse tools on GTFOBins (e.g., misconfigured find, vim, or nano) to spawn root shells.",
          "Windows Service Hijacking: Exploiting Unquoted Service Paths (where spaces in service paths are resolved recursively) or weak permissions on service executables to run custom admin payloads.",
          "Kernel Exploits: Triggering memory corruption vulnerabilities (e.g., Dirty COW, CVE-2021-3156) in the operating system's kernel to bypass normal access control lists and obtain root access."
        ],
        command: "find / -perm -u=s -type f 2>/dev/null",
        commandExpl: [
          { flag: "/", desc: "Search starting from the root directory of the filesystem." },
          { flag: "-perm -u=s", desc: "Look specifically for files with the SUID (Setuid) permission bit set." },
          { flag: "-type f", desc: "Filter results to only return files, excluding directories." },
          { flag: "2>/dev/null", desc: "Redirect error messages (like Permission Denied) to null device to keep output clean." }
        ],
        callout: "⚠️ WARNING: Elevating privileges changes the target system's security context. Document SUID settings and service paths before attempting modifications. Always try local enumeration tools like LinPEAS or WinPEAS first.",
        example: "On a Linux machine, running 'find / -perm -u=s -type f' returns '/usr/bin/find'. Since find has SUID root privileges, the attacker executes: 'find . -exec /bin/sh -p \\; -quit'. This immediately runs shell spawn code under the root context, upgrading the attacker to full root administrator.",
        subModules: [
          { id: "suid-escalation", name: "Abusing SUID Executable Permissions" },
          { id: "unquoted-service-paths", name: "Windows Unquoted Service Paths Attacks" },
          { id: "kernel-exploitation", name: "Kernel Exploitation & Kernel Auditing" }
        ]
      },
      {
        id: "sec-reporting",
        title: "5. Reporting, Risk Scoring & Remediation",
        content: "A successful pentest must provide actionable remediation guides for software developers to fix security flaws. The final report is the actual product delivered to clients.",
        bulletPoints: [
          "Risk Prioritization: Using Common Vulnerability Scoring System (CVSS v3.0) parameters (Attack Vector, Attack Complexity, Privileges Required, User Interaction) to rank flaws from Low to Critical.",
          "Evidence Compilation: Providing proof-of-concept scripts, step-by-step reproduction instructions, and censored screenshot logs for verification.",
          "Remediation Steps: Recommending software patches, software updates, port closures, firewall rule adjustments, and secure host configurations."
        ],
        example: "The pentester documents the findings, scoring the Samba vulnerability as Critical (CVSS 10.0) and the SUID vulnerability as High (CVSS 7.8). In the remediation report, they instruct developers to patch Samba immediately, disable anonymous FTP logins, and remove SUID flags from user-executable binaries (chmod -s /usr/bin/find).",
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
