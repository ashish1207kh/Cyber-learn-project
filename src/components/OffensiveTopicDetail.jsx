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
  Activity,
  ShieldAlert,
  Clock,
  ThumbsUp,
  Repeat,
  Star,
  Users,
  PhoneCall,
  MessageSquareWarning,
  UserX,
  Mail,
  Search,
  Network,
  FileSearch,
  Database,
  Bug,
  Rocket,
  Package,
  Laptop,
  TerminalSquare,
  RefreshCw,
  Key,
  Map,
  HardDrive,
  Box,
  DoorOpen,
  Target,
  Eye,
  CreditCard,
  Unlock,
  Wifi
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

function CognitiveTriggersTree() {
  const triggers = [
    { title: "Authority", icon: ShieldAlert, desc: `"I am the CEO, do this right now."` },
    { title: "Urgency", icon: Clock, desc: `"Change your password in 5 minutes or lock."` },
    { title: "Liking", icon: ThumbsUp, desc: `"We met at the tech conference last week."` },
    { title: "Reciprocity", icon: Repeat, desc: `"I helped you fix a ticket, do me a favor."` },
    { title: "Scarcity", icon: Star, desc: `"Only 2 VIP corporate accounts left."` },
    { title: "Consensus", icon: Users, desc: `"Everyone else in HR has signed this."` }
  ];

  return (
    <div className="cognitive-tree-container">
      <div className="cognitive-header">
        <h4>Human Psychology Exploit Vectors</h4>
      </div>
      <div className="cognitive-grid">
        {triggers.map((trig, i) => (
          <div key={i} className="cognitive-node">
            <trig.icon size={28} className="cognitive-icon" />
            <h5>{trig.title}</h5>
            <p>{trig.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AttackVectorsGrid() {
  const vectors = [
    { title: "Phishing (Email)", icon: Mail, desc: "The most common corporate attack vector. Pentesters craft highly convincing fake emails to test if employees click malicious links or input corporate credentials." },
    { title: "Vishing (Voice Phishing)", icon: PhoneCall, desc: "Phone-based deception. Spoofing caller ID to look like internal IT support or a bank executive to extract sensitive multi-factor authentication (MFA) codes verbally." },
    { title: "Smishing (SMS Phishing)", icon: MessageSquareWarning, desc: "Text message attacks targeting corporate mobile devices using panic-inducing alerts to steal session tokens via mobile browsers." },
    { title: "Tailgating (Physical)", icon: UserX, desc: "An attacker closely follows an authorized employee through a secure badge-access door, often carrying a box to exploit the employee's natural politeness." }
  ];

  return (
    <div className="attack-vectors-grid">
      {vectors.map((vec, i) => (
        <div key={i} className="attack-vector-card">
          <div className="attack-vector-header">
            <div className="attack-vector-icon-wrap">
              <vec.icon size={24} />
            </div>
            <h4>{vec.title}</h4>
          </div>
          <p>{vec.desc}</p>
        </div>
      ))}
    </div>
  );
}

function DataFlowMap() {
  return (
    <div className="dataflow-container">
      <div className="dataflow-sources">
        <div className="dataflow-node">
          <Globe size={28} className="dataflow-icon" />
          <h5>Domain Records</h5>
          <p>Reveals IP Ranges & Subdomains</p>
        </div>
        <div className="dataflow-node">
          <Users size={28} className="dataflow-icon" />
          <h5>Social Media</h5>
          <p>Reveals Employee Roles & Emails</p>
        </div>
        <div className="dataflow-node">
          <Database size={28} className="dataflow-icon" />
          <h5>Code Repositories</h5>
          <p>Reveals Leaked API Keys & Code</p>
        </div>
      </div>
      
      <div className="dataflow-correlation">
        OSINT RECON CORRELATION
      </div>
      
      <div className="dataflow-result">
        <h4>🚀 ACTIONABLE ATTACK MAP</h4>
        <ul>
          <li><Check size={16} color="#4ade80" /> <span>Target Subdomain: staging.company.com (Unpatched)</span></li>
          <li><Check size={16} color="#4ade80" /> <span>Valid Corporate Email: j.doe@company.com</span></li>
          <li><Check size={16} color="#4ade80" /> <span>Technology Stack: Leaked Apache version 2.4.49</span></li>
        </ul>
      </div>
    </div>
  );
}

function OsintQuadrantsGrid() {
  const quadrants = [
    { title: "Advanced Google Dorking", icon: Search, desc: "Pentesters use specialized syntax within public search engines to uncover hidden files, indexing errors, and sensitive data that should not be public.", tool: "Google Search Operators" },
    { title: "Infrastructure Mapping", icon: Network, desc: "Finding out every server, subdomain, and IP address registered to a company. Discovering exposed webcams, industrial control systems, or unencrypted databases.", tool: "Amass, Subfinder, Shodan" },
    { title: "Corporate & Employee Profiling", icon: Users, desc: "Gathering intelligence on human elements to feed directly into Social Engineering. Scraping profiles to discover names of IT admins.", tool: "theHarvester, Hunter.io" },
    { title: "Metadata Analysis", icon: FileSearch, desc: "Extracting hidden data (metadata) such as author names, software versions used, operating systems, and internal file paths from public documents.", tool: "ExifTool, FOCA" }
  ];

  return (
    <div className="osint-quadrants-grid">
      {quadrants.map((q, i) => (
        <div key={i} className="osint-quadrant-card">
          <div className="quadrant-number">0{i+1}</div>
          <q.icon size={28} className="osint-quadrant-icon" />
          <h4>{q.title}</h4>
          <p>{q.desc}</p>
          <div className="osint-tools-tag">
            <Terminal size={14} />
            {q.tool}
          </div>
        </div>
      ))}
    </div>
  );
}

function WeaponizationPipeline() {
  return (
    <div className="weaponization-pipeline-container">
      <div className="pipeline-node">
        <div className="pipeline-node-icon">
          <Bug size={32} />
        </div>
        <div className="pipeline-node-content">
          <h4>🔍 THE VULNERABILITY</h4>
          <p>A flaw or weakness in code (e.g., a buffer overflow or unvalidated text input field).</p>
        </div>
      </div>
      <div className="pipeline-connector"></div>
      <div className="pipeline-node">
        <div className="pipeline-node-icon">
          <Rocket size={32} />
        </div>
        <div className="pipeline-node-content">
          <h4>🚀 THE EXPLOIT (The Delivery Vehicle)</h4>
          <p>The specific piece of code engineered to take advantage of that vulnerability.</p>
        </div>
      </div>
      <div className="pipeline-connector"></div>
      <div className="pipeline-node" style={{ borderColor: 'var(--color-offensive)' }}>
        <div className="pipeline-node-icon">
          <Package size={32} />
        </div>
        <div className="pipeline-node-content">
          <h4>📦 THE PAYLOAD (The Cargo)</h4>
          <p>The malicious code executed <em>after</em> the exploit succeeds (e.g., opening a shell).</p>
        </div>
      </div>
    </div>
  );
}

function ExploitationMechanisms() {
  const mechanisms = [
    { title: "Remote Code Execution (RCE)", icon: Server, desc: "Allows an attacker to execute arbitrary commands over a network connection without any physical access or valid credentials.", example: "EternalBlue (MS17-010)" },
    { title: "Client-Side Exploitation", icon: Laptop, desc: "Targets users inside guarded networks. Malicious payloads are embedded inside files (PDFs, Word docs) and trigger when interacted with.", example: "Malicious Macro Documents" },
    { title: "Shells: Bind vs. Reverse", icon: TerminalSquare, desc: "Bind Shell: Exploit opens a port on the target machine. Reverse Shell: Exploit forces the target machine to connect outward to the attacker.", example: "Netcat Reverse Shell" }
  ];

  return (
    <div className="mechanisms-grid">
      {mechanisms.map((mech, i) => (
        <div key={i} className="mechanism-card">
          <div className="mechanism-header">
            <div className="mechanism-icon-wrap">
              <mech.icon size={24} />
            </div>
            <h4>{mech.title}</h4>
          </div>
          <p>{mech.desc}</p>
          <div className="mechanism-example">
            <strong>Real-World Example:</strong>
            {mech.example}
          </div>
        </div>
      ))}
    </div>
  );
}

function StrategicObjectives() {
  const objectives = [
    { title: "Persistence", icon: RefreshCw, desc: "Setting up backdoors to ensure access survives reboots." },
    { title: "Privilege Escalation", icon: Key, desc: "Moving from a standard user account to a root or Domain Admin account." },
    { title: "Lateral Movement", icon: Map, desc: "Pivoting from the initial system to scan/compromise others." }
  ];

  return (
    <div className="strategic-objectives-container">
      {objectives.map((obj, i) => (
        <div key={i} className="objective-node">
          <div className="objective-icon-wrap">
            <obj.icon size={28} />
          </div>
          <h4>{obj.title}</h4>
          <p>{obj.desc}</p>
        </div>
      ))}
    </div>
  );
}

function PostExploitTactics() {
  const tactics = [
    {
      title: "1. Privilege Escalation (Vertical Movement)",
      icon: Key,
      desc: "When a tester first exploits a machine, they usually inherit the permissions of the vulnerable service (often a low-privilege service account).",
      details: [
        { label: "Windows Systems:", val: "Hunt for misconfigured services, vulnerable kernel drivers, or cleartext passwords to elevate to NT AUTHORITY\\SYSTEM." },
        { label: "Linux Systems:", val: "Check for weak sudo permissions (sudo -l), misconfigured SUID binaries, or old unpatched kernels to gain a root shell." }
      ]
    },
    {
      title: "2. Pillaging (Data Gathering)",
      icon: HardDrive,
      desc: "Once administrative control is achieved, the tester begins gathering internal data to demonstrate the business impact of a breach.",
      details: [
        { label: "What to look for:", val: "Database connection strings, browser-saved passwords, sensitive customer files, and internal network architecture." },
        { label: "Credential Dumping:", val: "Using tools like Mimikatz to extract password hashes or cleartext passwords straight from volatile memory (RAM)." }
      ]
    },
    {
      title: "3. Lateral Movement & Pivoting (Horizontal Movement)",
      icon: Map,
      desc: "Corporate environments put up strong perimeters but often have weak internal segmentations. Pentesters use the compromised machine as a \"jump box\" or proxy.",
      details: [
        { label: "How it works:", val: "The tester routes their tools through the compromised machine to scan and attack hidden internal networks (like HR or financial networks) that are completely invisible from the public internet." }
      ]
    }
  ];

  return (
    <div className="tactics-stack">
      {tactics.map((tactic, i) => (
        <div key={i} className="tactic-card">
          <div className="tactic-sidebar">
            <tactic.icon size={32} />
            <span>Tactic 0{i + 1}</span>
          </div>
          <div className="tactic-content">
            <h4>{tactic.title}</h4>
            <p>{tactic.desc}</p>
            <div className="tactic-details">
              <ul>
                {tactic.details.map((detail, idx) => (
                  <li key={idx}>
                    <span style={{ color: 'var(--color-offensive)' }}>❯</span>
                    <span><strong>{detail.label}</strong> {detail.val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PentestVsRedTeamTable() {
  const features = [
    { name: "Primary Goal", pt: "Identify and document as many vulnerabilities as possible.", rt: "Simulate a specific real-world threat actor to test detection/response." },
    { name: "Visibility", pt: <strong>Loud & Announced.</strong>, ptDesc: " The internal IT team knows the test is happening.", rt: <strong>Stealthy & Unannounced.</strong>, rtDesc: " The internal defense team has no idea it's a simulation." },
    { name: "Scope", pt: "Restricted to specific IP addresses, networks, or applications.", rt: "Wide-open. Includes technical, social, physical, and digital vectors." },
    { name: "Metric of Success", pt: "A long list of found patches and flaws.", rt: "Reaching a specific goal (e.g., accessing the CEO's inbox) without being detected." }
  ];

  return (
    <div className="comparison-table-wrapper">
      <div className="comparison-header">
        <div className="comparison-header-cell">Feature</div>
        <div className="comparison-header-cell pt">Penetration Testing (Topic 01)</div>
        <div className="comparison-header-cell rt">Red Teaming (Topic 06)</div>
      </div>
      {features.map((f, i) => (
        <div key={i} className="comparison-row">
          <div className="comparison-cell feature-name">{f.name}</div>
          <div className="comparison-cell pt-cell">
            {f.pt}{f.ptDesc}
          </div>
          <div className="comparison-cell rt-cell">
            {f.rt}{f.rtDesc}
          </div>
        </div>
      ))}
    </div>
  );
}

function RedTeamLifecycle() {
  const steps = [
    { title: "Target Intelligence (OSINT)", icon: Search, desc: "Building profiles without touching target infrastructure." },
    { title: "Weaponization & Infrastructure", icon: Box, desc: "Buying fake domains, setting up C2 (Command & Control)." },
    { title: "Initial Access (The Breach)", icon: DoorOpen, desc: "Using custom phishing or physical tailgating to get inside." },
    { title: "Evasion & Stealth", icon: Ghost, desc: "Bypassing EDR (Antivirus) and blending into normal traffic." },
    { title: "Objective Completion", icon: Target, desc: "Exfiltrating \"mock\" sensitive data to prove impact." }
  ];

  return (
    <div className="lifecycle-tracker">
      <h4 style={{ color: '#fff', marginBottom: '20px' }}>🚀 TARGET EMBARKATION</h4>
      {steps.map((step, i) => (
        <div key={i} className="lifecycle-step">
          <div className="lifecycle-icon-wrap">
            <step.icon size={16} />
          </div>
          <div className="lifecycle-content">
            <h4><span className="lifecycle-num">{i + 1}.</span> {step.title}</h4>
            <p>{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PhysicalAttackLifecycle() {
  const steps = [
    { title: "Physical Reconnaissance", icon: Eye, desc: "Mapping security guard schedules, cameras, and blind spots." },
    { title: "Bypass & Clone", icon: Key, desc: "Capturing badge frequencies or preparing lock-picking tools." },
    { title: "Infiltration (The Entry)", icon: DoorOpen, desc: "Tailgating an employee or bypassing a locked door." },
    { title: "Objective Execution", icon: Server, desc: "Dropping a rogue network device or finding sensitive papers." }
  ];

  return (
    <div className="physical-lifecycle-tracker">
      <h4 style={{ color: '#fff', marginBottom: '20px' }}>🏢 TARGET FACILITY</h4>
      {steps.map((step, i) => (
        <div key={i} className="physical-step">
          <div className="physical-icon-wrap">
            <step.icon size={24} />
          </div>
          <div className="physical-content">
            <h4>{i + 1}. {step.title}</h4>
            <p>{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PhysicalPentesterToolkit() {
  const tools = [
    {
      title: "1. RFID and Badge Cloners",
      icon: CreditCard,
      desc: "Most corporate offices use proximity badges (RFID/NFC) to unlock doors.",
      details: [
        { label: "The Tool:", val: "Flipper Zero or Proxmark3." },
        { label: "The Attack:", val: "The tester stands close to an employee, reads the badge frequency wirelessly, clones it onto a blank card, and walks straight through the front door." }
      ]
    },
    {
      title: "2. Lock Picking & Bypass Tools",
      icon: Unlock,
      desc: "When digital systems can't be tricked, mechanical vulnerabilities are exploited.",
      details: [
        { label: "Lock Picks:", val: "For opening traditional padlocks or file cabinets." },
        { label: "Under-Door Tools (UDT):", val: "A long, flexible rod designed to slide under a door, reach up, and pull down the inside lever handle." },
        { label: "Shims & Raking Tools:", val: "Designed to slide into latches or padlocks to slip the mechanism open in seconds." }
      ]
    },
    {
      title: "3. Rogue Network Hardware",
      icon: Wifi,
      desc: "Once inside, the tester plugs a covert hardware device into an empty network port.",
      details: [
        { label: "The Tool:", val: "Hak5 Pineapple or a custom Raspberry Pi Drop Box." },
        { label: "The Result:", val: "Establishes a hidden, encrypted cellular connection back to the tester's home base, granting permanent internal network access." }
      ]
    }
  ];

  return (
    <div className="tactical-toolkit-grid">
      {tools.map((tool, i) => (
        <div key={i} className="toolkit-card">
          <div className="toolkit-header">
            <div className="toolkit-icon-wrap">
              <tool.icon size={32} />
            </div>
            <h4>{tool.title}</h4>
          </div>
          <div className="toolkit-body">
            <p>{tool.desc}</p>
            <ul className="toolkit-list">
              {tool.details.map((detail, idx) => (
                <li key={idx}>
                  <span><strong>{detail.label}</strong> {detail.val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
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
        title: "1. The Essential Concept: Hacking the Human Operating System",
        content: "No matter how advanced an organization’s firewall or encryption is, security always fails if a human is tricked into opening the front door. Social Engineering is the art of manipulating, influencing, or deceiving people into giving up confidential information, bypassing physical security controls, or executing malicious software."
      },
      {
        id: "sec-cognitive",
        title: "2. Core Cognitive Triggers (Why it Works)",
        content: "Social engineers exploit deep-rooted human behaviors. When designing this section for your students, highlight these 6 Core Triggers:",
        customComponent: "CognitiveTree"
      },
      {
        id: "sec-vectors",
        title: "3. The 4 Most Common Attack Vectors",
        content: "To help your students understand real-world roles, break down the tactical methods used in professional social engineering assessments:",
        customComponent: "AttackGrid"
      },
      {
        id: "sec-roadmap",
        title: "4. Your Career & Development Roadmap",
        content: "For professionals and students looking to specialize in this niche, it requires a unique blend of technical expertise and behavioral psychology.",
        bulletPoints: [
          "Specialized Roles: Social Engineering Consultant, Red Team Operator, Human Risk Analyst, Security Awareness Training Director.",
          "What a Day Looks Like: Researching targets online (OSINT), scripting customized phishing campaigns, setting up tracking servers, or attempting to physically breach corporate office buildings in disguise."
        ]
      }
    ],
    certs: [
      { name: 'CAPS', full: 'Certified Anti-Phishing Specialist', desc: 'Great for learning how to design and analyze organizational phishing metrics.', diff: 'Beginner' },
      { name: 'SEPP', full: 'Certified Social Engineering Pentester', desc: 'Focuses on advanced manipulation, OSINT, and facility breach.', diff: 'Intermediate' }
    ]
  },
  '03': {
    num: '03',
    title: 'OSINT Reconnaissance',
    subtitle: 'Open Source Intelligence',
    description: "In the real world, hackers and ethical pentesters spend up to 70% of their time here. You cannot attack a target effectively if you don't know what it owns, who works there, and what technologies they use.",
    badges: ["Core Skill", "Recon Phase", "Passive Testing"],
    stats: { time: "15 Hours", diff: "Beginner", prereq: "None" },
    sections: [
      {
        id: "sec-concept",
        title: "1. The Essential Concept: The Invisible Footprint",
        content: "Open Source Intelligence (OSINT) is the practice of legally collecting, analyzing, and correlating publicly available data to build a comprehensive blueprint of a target. This phase is completely passive, meaning the tester never interacts directly with the client's servers or systems. They gather information left out in the open by the organization or its employees."
      },
      {
        id: "sec-dataflow",
        title: "2. Interactive Data Flow Mapping",
        content: "To help your students visualize how raw public data converts into actionable weaponized intelligence, map out the data discovery pipeline:",
        customComponent: "DataFlowMap"
      },
      {
        id: "sec-quadrants",
        title: "3. The 4 Quadrants of Professional OSINT",
        content: "Break this topic down for your students into four distinct technological vectors:",
        customComponent: "OsintQuadrants"
      },
      {
        id: "sec-roadmap",
        title: "4. Your Career & Development Roadmap",
        content: "OSINT is one of the fastest-growing sub-disciplines in cybersecurity, expanding far beyond just penetration testing.",
        bulletPoints: [
          "Specialized Roles: Threat Intelligence Analyst, OSINT Investigator, Fraud Examiner, Geopolitical Risk Analyst, Red Team Infrastructure Engineer.",
          "What a Day Looks Like: Tracking down stolen corporate assets, identifying leaked source code, analyzing corporate data leaks, or tracking malicious advanced persistent threat (APT) hacker groups based on infrastructure indicators."
        ]
      }
    ],
    certs: [
      { name: 'OSINT-C', full: 'Certified OSINT Specialist', desc: 'A highly practical certification focusing entirely on modern intelligence-gathering techniques.', diff: 'Beginner' }
    ]
  },
  '04': {
    num: '04',
    title: 'Exploitation Techniques',
    subtitle: 'Taking Control',
    description: "This is the milestone where students learn how vulnerabilities are actually weaponized to breach systems. You will learn the mechanics behind the final act of compromising a target.",
    badges: ["Core Skill", "Weaponization", "Execution Phase"],
    stats: { time: "25 Hours", diff: "Intermediate to Advanced", prereq: "Penetration Testing, Scripting Basics" },
    sections: [
      {
        id: "sec-concept",
        title: "1. The Essential Concept: Crossing the Perimeter",
        content: "Exploitation is the definitive act of taking advantage of a software bug, design flaw, or configuration mistake to force a computer system to behave in an unintended way. Usually, the goal is Arbitrary Code Execution (ACE)—forcing the target machine to run commands or scripts provided by the hacker, effectively handing over control."
      },
      {
        id: "sec-pipeline",
        title: "2. Anatomy of an Exploit",
        content: "To prevent students from viewing exploitation as \"magic,\" break down a successful attack into its three precise technical components:",
        customComponent: "WeaponizationPipeline"
      },
      {
        id: "sec-mechanisms",
        title: "3. The Big Three Exploitation Mechanisms",
        content: "Provide your students with a granular look at how modern professionals categorize exploitation techniques:",
        customComponent: "ExploitationMechanisms"
      },
      {
        id: "sec-roadmap",
        title: "4. Your Career & Development Roadmap",
        content: "Exploitation requires deep technical mastery of architecture, networking protocols, and code.",
        bulletPoints: [
          "Specialized Job Roles: Exploit Developer, Vulnerability Researcher, Red Team Infrastructure Engineer, Penetration Tester.",
          "What a Day Looks Like: Analyzing software code via reverse engineering, studying zero-day patches, writing custom scripts in Python, C, or Assembly, and building bypass mechanisms for security defenses."
        ]
      }
    ],
    certs: [
      { name: 'OSCP', full: 'OffSec Certified Professional', desc: 'The gold standard hands-on certification that forces students to manually find, modify, and execute exploits.', diff: 'Advanced' }
    ]
  },
  '05': {
    num: '05',
    title: 'Post-Exploitation',
    subtitle: 'Deepening the Breach',
    description: "This phase answers the ultimate question after an exploit succeeds: \"I have an initial foothold on a single low-level account... now what?\" It is the transition from a single compromised machine to an entire compromised corporate infrastructure.",
    badges: ["Core Skill", "AD Focused", "Stealth"],
    stats: { time: "30 Hours", diff: "Advanced", prereq: "Exploitation Techniques, AD Basics" },
    sections: [
      {
        id: "sec-concept",
        title: "1. The Essential Concept: The Art of Survival and Expansion",
        content: "Post-Exploitation is the phase where an authorized tester evaluates what assets can be controlled, what sensitive data can be accessed, and how well they can navigate the internal network without being caught."
      },
      {
        id: "sec-objectives",
        title: "2. The Three Strategic Objectives",
        content: "To help your students understand this phase structurally, break it down into these three operational pillars:",
        customComponent: "StrategicObjectives"
      },
      {
        id: "sec-tactics",
        title: "3. Core Post-Exploitation Tactics",
        content: "Detail these exact technical maneuvers that professional pentesters practice daily:",
        customComponent: "PostExploitTactics"
      },
      {
        id: "sec-roadmap",
        title: "4. Your Career & Development Roadmap",
        content: "Post-exploitation skills separate basic script-kiddies from high-tier enterprise security consultants.",
        bulletPoints: [
          "Specialized Job Roles: Senior Penetration Tester, Active Directory Security Expert, Red Team Consultant, Incident Responder.",
          "What a Day Looks Like: Analyzing Active Directory domain trusts, creating stealthy persistence mechanisms, bypassing EDR agents, and simulating APT playbooks.",
          "Active Directory (AD) Mastery: 90% of corporate enterprises run on AD. Post-exploitation heavily relies on learning Kerberos attacks and GPO manipulations."
        ]
      }
    ],
    certs: [
      { name: 'CRTO', full: 'Certified Red Team Operator', desc: 'Provides rigorous testing on internal domain post-exploitation environments.', diff: 'Advanced' }
    ]
  },
  '06': {
    num: '06',
    title: 'Red Teaming',
    subtitle: 'Adversary Simulation',
    description: "Step into the highest tier of offensive security operations. While a standard penetration tester focuses on finding bugs, a Red Teamer focuses on testing an organization's entire defensive posture—people, processes, and technology—stealthily.",
    badges: ["Advanced Skill", "Stealth", "Full Scope"],
    stats: { time: "40 Hours", diff: "Expert", prereq: "Post-Exploitation, OSINT, Exploitation" },
    sections: [
      {
        id: "sec-concept",
        title: "1. The Essential Concept: Pentesting vs. Red Teaming",
        content: "It is incredibly common for students to confuse these two concepts. Use this comparison table to make the distinction crystal clear:",
        customComponent: "PentestVsRedTeamTable"
      },
      {
        id: "sec-lifecycle",
        title: "2. The Red Team Lifecycle",
        content: "Red Team operations can last anywhere from weeks to months. They simulate an Advanced Persistent Threat (APT) using a highly structured cadence:",
        customComponent: "RedTeamLifecycle"
      },
      {
        id: "sec-toolkits",
        title: "3. Essential Red Team Toolkits",
        content: "To make this highly practical for professionals, introduce them to the specialized enterprise tools used by Red Team operators.",
        bulletPoints: [
          "Command and Control (C2) Frameworks: A system of servers and agents (beacons) to control compromised machines stealthily. (e.g., Cobalt Strike, Sliver, Mythic)",
          "Antivirus & EDR Evasion: Red Teamers must study internal memory structures to bypass modern endpoint protection via Process Injection, API Unhooking, and memory obfuscation."
        ]
      },
      {
        id: "sec-roadmap",
        title: "4. Your Career & Development Roadmap",
        content: "This path is intended for advanced students and professionals who already have a baseline understanding of networking, systems administration, and basic exploitation.",
        bulletPoints: [
          "Specialized Job Roles: Red Team Operator, Adversary Emulation Engineer, Purple Team Lead, Threat Simulation Expert.",
          "What a Day Looks Like: Researching state-sponsored hacker playbooks (MITRE ATT&CK), writing specialized stealth tools, setting up complex relay infrastructures."
        ]
      }
    ],
    certs: [
      { name: 'CRTO', full: 'Certified Red Team Operator', desc: 'An excellent, highly practical exam focusing on Cobalt Strike and Active Directory evasion.', diff: 'Advanced' },
      { name: 'CRTE / PACES', full: 'Altered Security Red Team Expert', desc: 'Elite multi-forest Active Directory testing certifications.', diff: 'Expert' }
    ]
  },
  '07': {
    num: '07',
    title: 'Physical Security Testing',
    subtitle: 'Breaching the Perimeter',
    description: "Step away from the keyboard and enter the real world. Many students forget that cybersecurity is entirely dependent on physical security. If an attacker can walk up to an internal server or plug a device into a wall outlet, all digital firewalls become irrelevant.",
    badges: ["Core Skill", "Tactical", "High Risk"],
    stats: { time: "15 Hours", diff: "Intermediate", prereq: "None" },
    sections: [
      {
        id: "sec-concept",
        title: "1. The Essential Concept: Breaking the Physical Barrier",
        content: "Physical Security Testing is the authorized simulation of a real-world intruder attempting to breach an organization's physical facilities. The objective is to evaluate the strength of locks, access control systems, cameras, fences, and security guards."
      },
      {
        id: "sec-lifecycle",
        title: "2. The Physical Attack Lifecycle",
        content: "A physical pentest follows a tactical process designed to minimize exposure and ensure maximum stealth:",
        customComponent: "PhysicalAttackLifecycle"
      },
      {
        id: "sec-toolkit",
        title: "3. The Physical Pentester's Toolkit",
        content: "Pentesters carry a specialized physical 'tactical bag' filled with mechanical and electronic bypass tools:",
        customComponent: "PhysicalPentesterToolkit"
      },
      {
        id: "sec-roadmap",
        title: "4. Your Career & Development Roadmap",
        content: "Physical testing is a highly specialized skill set usually performed by senior Red Team members due to the high legal and safety risks involved.",
        bulletPoints: [
          "Specialized Job Roles: Physical Security Consultant, Corporate Risk Auditor, Red Team Specialist, Operations Security (OPSEC) Officer.",
          "What a Day Looks Like: Scouting corporate buildings with binoculars, mapping camera angles, donning disguises (HVAC technician, delivery driver), and drafting emergency contact letters.",
          "Practical Learning: Advise your students to join local lock-picking groups (such as TOOOL) to learn the core mechanical principles of security safely and legally."
        ]
      }
    ],
    certs: [
      { name: 'PSP', full: 'Physical Security Professional', desc: 'A globally recognized corporate standard focusing on threat assessments and integrated physical protection systems.', diff: 'Intermediate' }
    ]
  },
};

const placeholderNamesOffensive = [
  "Wireless Hacking",
  "Cloud Security Testing", "Hardware Hacking", "Malware Analysis",
  "Exploit Development", "IoT Security", "Physical Security Breach",
  "Bug Bounty Hunting"
];

for (let i = 8; i <= 15; i++) {
  const num = i < 10 ? `0${i}` : `${i}`;
  TOPIC_DETAILS[num] = {
    num: num,
    title: placeholderNamesOffensive[i - 4],
    subtitle: 'Coming Soon',
    description: `The complete learning path and curriculum for ${placeholderNamesOffensive[i - 4]} is currently under development. Please check back later when we add the full content and interactive diagrams.`,
    badges: ["In Development", "Coming Soon"],
    stats: { time: "TBD", diff: "TBD", prereq: "TBD" },
    sections: [
      {
        id: "sec-coming-soon",
        title: "Content Under Construction",
        content: `We are currently building the comprehensive training module for ${placeholderNamesOffensive[i - 4]}. This section will feature step-by-step methodologies, interactive architecture diagrams, command snippets, and deep technical breakdowns.`,
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
                      {sec.customComponent === 'CognitiveTree' && <CognitiveTriggersTree />}
                      {sec.customComponent === 'AttackGrid' && <AttackVectorsGrid />}
                      {sec.customComponent === 'DataFlowMap' && <DataFlowMap />}
                      {sec.customComponent === 'OsintQuadrants' && <OsintQuadrantsGrid />}
                      {sec.customComponent === 'WeaponizationPipeline' && <WeaponizationPipeline />}
                      {sec.customComponent === 'ExploitationMechanisms' && <ExploitationMechanisms />}
                      {sec.customComponent === 'StrategicObjectives' && <StrategicObjectives />}
                      {sec.customComponent === 'PostExploitTactics' && <PostExploitTactics />}
                      {sec.customComponent === 'PentestVsRedTeamTable' && <PentestVsRedTeamTable />}
                      {sec.customComponent === 'RedTeamLifecycle' && <RedTeamLifecycle />}
                      {sec.customComponent === 'PhysicalAttackLifecycle' && <PhysicalAttackLifecycle />}
                      {sec.customComponent === 'PhysicalPentesterToolkit' && <PhysicalPentesterToolkit />}

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
