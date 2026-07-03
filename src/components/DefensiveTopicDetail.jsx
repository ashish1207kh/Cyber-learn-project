/* eslint-disable */
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
  },
  '03': {
    num: '03',
    title: 'Threat Intelligence',
    subtitle: 'The Cyber Spy Agency',
    description: "Threat Intelligence is the practice of gathering, analyzing, and organizing data about cybercriminals, their motives, targets, and methods (TTPs). Predict who will target your organization next and upgrade defenses proactively.",
    badges: ["Core Skill", "Analytical", "Proactive Defense"],
    stats: { time: "25 Hours", diff: "Intermediate to Advanced", prereq: "Cyber Landscape, Networking" },
    sections: [
      {
        id: "sec-scope",
        title: "1. The Scope of Threat Intelligence",
        content: "Threat Intelligence bridges the gap between technical data and high-level corporate strategy. Its scope is divided into distinct layers that cater to different audiences within an organization.",
        bulletPoints: [
          "Tactical/Operational: Tracking specific malware hashes, bad IP addresses, and domain names (Indicators of Compromise - IoCs) to block them automatically.",
          "Strategic: Analyzing high-level cyber threat trends, geopolitical events, and hacker group motives for company executives (CISO/CEO) to guide security budgets.",
          "Roles Available: Threat Intelligence Analyst, Cyber Threat Intelligence (CTI) Specialist, Threat Hunter, and Geopolitical Risk Analyst."
        ],
        callout: "💡 PROACTIVE SECURITY: As cyberattacks become more sophisticated and state-sponsored, organizations can no longer survive on reactive security alone. TI enables organizations to predict and prepare.",
        example: "A Strategic TI analyst notices a rise in ransomware groups targeting the healthcare sector using a new phishing technique. They prepare a briefing for the hospital board to increase the budget for email security and staff training."
      },
      {
        id: "sec-roadmap",
        title: "2. Threat Intelligence Roadmap",
        content: "To break into a Threat Intelligence role, follow this structured learning path to build your analytical and technical skills.",
        bulletPoints: [
          "Step 1: Understand Attacker Frameworks. Master the MITRE ATT&CK Framework and the Cyber Kill Chain.",
          "Step 2: Learn Intelligence Gathering & OSINT. Perform Open Source Intelligence (OSINT) to track threat actors safely on dark web forums and threat feeds.",
          "Step 3: Get Familiar with TI Platforms. Learn how threat data is shared using STIX/TAXII formats and practice with platforms like MISP, AlienVault OTX, or VirusTotal."
        ],
        subModules: [
          { id: "mitre-attack", name: "MITRE ATT&CK Framework Mapping" },
          { id: "stix-taxii", name: "Threat Sharing with STIX/TAXII" }
        ]
      }
    ],
    certs: [
      { name: 'CySA+', full: 'CompTIA Cybersecurity Analyst', desc: 'Provides foundational skills in behavioral analytics and threat intelligence.', diff: 'Intermediate' },
      { name: 'CTIA', full: 'EC-Council Certified Threat Intelligence Analyst', desc: 'Focuses on the entire threat intelligence lifecycle and analysis process.', diff: 'Advanced' },
      { name: 'GCTI', full: 'GIAC Cyber Threat Intelligence', desc: 'The gold standard for high-tier threat intelligence professionals.', diff: 'Advanced' }
    ]
    ]
  },
  '04': {
    num: '04',
    title: 'Digital Forensics',
    subtitle: 'The CSI of the Digital World',
    description: "Digital Forensics is the CSI of the digital world. When a cybercrime occurs, digital forensics specialists step in to investigate. Using highly specialized tools, analysts collect, preserve, and analyze digital evidence to legally prove what happened.",
    badges: ["Analytical", "Incident Root-Cause", "Investigation"],
    stats: { time: "30 Hours", diff: "Intermediate", prereq: "System Internals, Networking" },
    sections: [
      {
        id: "sec-scope",
        title: "1. The Scope of Digital Forensics",
        content: "Digital Forensics bridges the gap between deep computer science and the legal system. Its scope spans corporate internal investigations, corporate espionage, cybersecurity incident root-cause analysis, and law enforcement.",
        bulletPoints: [
          "Core Responsibilities: Creating bit-stream disk images of compromised drives, recovering deleted files, examining registry keys, and constructing clear timelines of hacker activity.",
          "Industries Hiring: Big 4 consulting firms, private cybersecurity companies, banks, and law enforcement labs.",
          "Roles Available: Digital Forensics Analyst, Computer Forensic Investigator, Mobile Forensics Specialist, DFIR Engineer."
        ],
        callout: "EXTREMELY WORTH IT: Companies face massive liabilities during breaches and need certified experts to accurately prove what was stolen. If you love deep analytical work, this is highly prestigious."
      },
      {
        id: "sec-roadmap",
        title: "2. Digital Forensics Roadmap",
        content: "To become a skilled Digital Forensics professional, follow this pathway:",
        bulletPoints: [
          "Step 1: Learn Core System Internals. Master file systems (NTFS, FAT32, ext4) and understand registry structures and memory management.",
          "Step 2: Understand the Chain of Custody. Learn strict legal rules for preserving evidence. Compromised integrity means it cannot be used in court.",
          "Step 3: Master Industry Tools. Get hands-on with Autopsy, FTK Imager, EnCase, Volatility, and Cellebrite."
        ]
      }
    ],
    certs: [
      { name: 'CHFI', full: 'Computer Hacking Forensic Investigator', desc: 'Validates digital forensic processes and evidence gathering.', diff: 'Intermediate' },
      { name: 'GCFA', full: 'GIAC Certified Forensic Analyst', desc: 'Gold standard for advanced digital forensics and incident response.', diff: 'Advanced' }
    ]
  },
  '05': {
    num: '05',
    title: 'Network Security',
    subtitle: 'The Enterprise Defense Shield',
    description: "Network Security is the practice of protecting a company's entire digital transport system - local networks, routers, switches, and cloud pipelines - from unauthorized access.",
    badges: ["Core Infrastructure", "Stable Career", "Architecture"],
    stats: { time: "25 Hours", diff: "Beginner to Intermediate", prereq: "TCP/IP, Routing" },
    sections: [
      {
        id: "sec-scope",
        title: "1. The Scope of Network Security",
        content: "As organizations shift to hybrid work environments and massive cloud networks, the demand for robust network security has never been higher. It covers managing perimeter defenses, secure remote access, and secure data transit.",
        bulletPoints: [
          "Core Responsibilities: Designing secure network zones, managing Enterprise Firewalls, setting up VPNs, implementing Zero Trust architectures, and monitoring traffic.",
          "Industries Hiring: Telecoms, ISPs, financial institutions, and cloud providers (AWS, Azure, GCP).",
          "Roles Available: Network Security Engineer, Network Security Administrator, Infrastructure Security Engineer."
        ]
      },
      {
        id: "sec-roadmap",
        title: "2. Network Security Roadmap",
        content: "Build a successful career by following this structured blueprint:",
        bulletPoints: [
          "Step 1: Master Networking Fundamentals. Learn OSI, TCP/IP, subnetting, DNS, and use Wireshark to intercept packets.",
          "Step 2: Learn Enterprise Devices. Understand Next-Gen Firewalls (NGFWs), IDS/IPS, Proxy servers, and ACLs.",
          "Step 3: Dive into Cloud & Modern Concepts. Study Cloud Networking (VPCs) and Zero Trust Network Access (ZTNA)."
        ]
      }
    ],
    certs: [
      { name: 'CCNA', full: 'Cisco Certified Network Associate', desc: 'Foundational networking knowledge.', diff: 'Beginner' },
      { name: 'PCNSA', full: 'Palo Alto Networks Certified Network Security Administrator', desc: 'Validates firewall administration skills.', diff: 'Intermediate' }
    ]
  },
  '06': {
    num: '06',
    title: 'Vulnerability Management',
    subtitle: 'Proactive System Audits',
    description: "Vulnerability Management is the practice of proactively finding, evaluating, and fixing security weaknesses in an organization's systems before attackers can exploit them.",
    badges: ["Risk Assessment", "Automation", "Steady Hours"],
    stats: { time: "20 Hours", diff: "Intermediate", prereq: "System Administration" },
    sections: [
      {
        id: "sec-scope",
        title: "1. The Scope of Vulnerability Management",
        content: "Think of it like a healthcare check-up for a corporate network. Use automated scanning tools to continuously audit servers and applications.",
        bulletPoints: [
          "Core Responsibilities: Configuring security scans, filtering false positives, scoring risks using CVSS, and tracking patch progress.",
          "Industries Hiring: Global Tech Hubs, Banking, Healthcare, and Major IT Consultancies.",
          "Roles Available: Vulnerability Management Analyst, Threat & Vulnerability Engineer, Vulnerability Program Lead."
        ]
      },
      {
        id: "sec-roadmap",
        title: "2. Vulnerability Management Roadmap",
        content: "To kickstart a career, map out this progression:",
        bulletPoints: [
          "Step 1: Understand Risk Frameworks. Master CVE naming and the CVSS scoring system.",
          "Step 2: Master Scanning Tools. Operate Nessus, Qualys, or Rapid7 InsightVM safely in production.",
          "Step 3: Learn Remediation Pipelines. Understand how patches are rolled out in enterprise networks."
        ]
      }
    ],
    certs: [
      { name: 'CySA+', full: 'CompTIA Cybersecurity Analyst', desc: 'Validates vulnerability scanning and analysis skills.', diff: 'Intermediate' },
      { name: 'TCNA', full: 'Tenable Certified Network Auditor', desc: 'Vendor-specific mastery of Nessus vulnerability scanning.', diff: 'Intermediate' }
    ]
  },
  '07': {
    num: '07',
    title: 'Endpoint Security',
    subtitle: 'Defending the Perimeter',
    description: "Endpoint Security protects individual devices (laptops, phones, servers) that connect to an organization's network, detecting and blocking threats in real time.",
    badges: ["EDR Mastery", "System Internals", "Highly Valued"],
    stats: { time: "25 Hours", diff: "Intermediate", prereq: "OS Administration" },
    sections: [
      {
        id: "sec-scope",
        title: "1. The Scope of Endpoint Security",
        content: "With remote work and BYOD policies, the corporate perimeter has shifted directly to the endpoint.",
        bulletPoints: [
          "Core Responsibilities: Deploying EDR agents, managing MDM profiles, application whitelisting, and host-based firewalls.",
          "Industries Hiring: Global enterprises, remote-first companies, and MSSPs.",
          "Roles Available: Endpoint Security Engineer, EDR Specialist, System Security Administrator."
        ]
      },
      {
        id: "sec-roadmap",
        title: "2. Endpoint Security Roadmap",
        content: "Build your expertise through these phases:",
        bulletPoints: [
          "Step 1: Focus on OS Internals. Understand Windows/Linux/macOS processes, registries, and local access controls.",
          "Step 2: Learn Modern Tooling. Move past basic AV. Learn behavioral EDR platforms (CrowdStrike, SentinelOne) and MDM tools (Intune).",
          "Step 3: Master Device Hardening. Implement CIS Benchmarks to lock down operating systems."
        ]
      }
    ],
    certs: [
      { name: 'SC-200', full: 'Microsoft Security Operations Analyst', desc: 'Validates Defender for Endpoint configuration.', diff: 'Intermediate' },
      { name: 'CCFA', full: 'CrowdStrike Certified Falcon Administrator', desc: 'Vendor-specific mastery of Falcon EDR platform.', diff: 'Advanced' }
    ]
  },
  '08': {
    num: '08',
    title: 'Log Analysis',
    subtitle: 'Decoding Digital Evidence',
    description: "Log Analysis is the process of reviewing, interpreting, and making sense of the digital records generated by computer systems and security devices.",
    badges: ["Mandatory Foundation", "Data Parsing", "Detection"],
    stats: { time: "20 Hours", diff: "Beginner", prereq: "Linux CLI basics" },
    sections: [
      {
        id: "sec-scope",
        title: "1. The Scope of Log Analysis",
        content: "Log Analysis is a fundamental skill that underpins almost every single role in defensive security operations.",
        bulletPoints: [
          "Core Responsibilities: Parsing unstructured text, building custom search queries, and writing rules to trigger alerts on suspicious patterns.",
          "Industries Hiring: MSSPs, tech conglomerates, and corporate IT operations teams.",
          "Roles Available: SOC Analyst (L1/L2), Threat Hunter, Security Automation Engineer."
        ]
      },
      {
        id: "sec-roadmap",
        title: "2. Log Analysis Roadmap",
        content: "To become a master at reading logs, focus on this path:",
        bulletPoints: [
          "Step 1: Learn Core Formats. Study Windows Event Logs (IDs 4624, 4625) and Linux Logs (syslog, auth.log).",
          "Step 2: Master Text Filters. Use Linux CLI tools like grep, awk, and sed, alongside Regular Expressions (Regex).",
          "Step 3: Dive into Query Languages. Learn SPL (Splunk) or KQL (Microsoft Sentinel)."
        ]
      }
    ],
    certs: [
      { name: 'BTL1', full: 'Blue Team Level 1', desc: 'Hands-on practical log analysis and defense.', diff: 'Beginner' },
      { name: 'Splunk Power User', full: 'Splunk Core Certified Power User', desc: 'Validates SPL querying skills.', diff: 'Intermediate' }
    ]
  },
  '09': {
    num: '09',
    title: 'Patch Management',
    subtitle: 'Sealing the Cracks',
    description: "Patch Management ensures software fixes are systematically tested, deployed, and verified on hundreds or thousands of corporate devices without breaking production.",
    badges: ["High Stability", "Automation", "Compliance"],
    stats: { time: "20 Hours", diff: "Beginner to Intermediate", prereq: "System Administration" },
    sections: [
      {
        id: "sec-scope",
        title: "1. The Scope of Patch Management",
        content: "Over 80% of successful corporate data breaches occur because a known patch was left uninstalled. This domain offers incredible job stability.",
        bulletPoints: [
          "Core Responsibilities: Scheduling automated patch cycles, testing updates, handling failed installations, and generating compliance reports.",
          "Industries Hiring: MSPs, large IT service providers (Wipro, TCS), and financial institutions.",
          "Roles Available: Patch Management Specialist, Systems Administrator, Infrastructure Engineer."
        ]
      },
      {
        id: "sec-roadmap",
        title: "2. Patch Management Roadmap",
        content: "Build your path across these areas:",
        bulletPoints: [
          "Step 1: Master OS Deployment. Learn Active Directory, GPOs, and Linux package managers (apt, yum).",
          "Step 2: Learn Enterprise Tools. Master SCCM / MECM, Microsoft Intune, or Ivanti.",
          "Step 3: Master Automation. Learn PowerShell or Bash scripting, and Ansible for configuration management."
        ]
      }
    ],
    certs: [
      { name: 'MD-102', full: 'Microsoft Endpoint Administrator', desc: 'Validates device and update management via Intune.', diff: 'Intermediate' },
      { name: 'LFCS', full: 'Linux Foundation Certified System Administrator', desc: 'Validates Linux system and package administration.', diff: 'Intermediate' }
    ]
  },
  '10': {
    num: '10',
    title: 'User Awareness Training',
    subtitle: 'Building the Human Firewall',
    description: "Educating employees about cyber threats, organizational security policies, and standard cyber hygiene to prevent social engineering attacks.",
    badges: ["Low Stress", "Psychology", "Program Management"],
    stats: { time: "15 Hours", diff: "Beginner", prereq: "Communication Skills, Basic Cyber Concepts" },
    sections: [
      {
        id: "sec-scope",
        title: "1. The Scope of User Awareness",
        content: "Over 80% of security incidents involve human error. User Awareness Training uses interactive modules and simulated phishing to strengthen the human perimeter.",
        bulletPoints: [
          "Core Responsibilities: Launching fake phishing simulations, designing role-specific modules, and tracking behavioral change metrics.",
          "Industries Hiring: MNCs, global consultancies, banks, and dedicated training platforms (KnowBe4).",
          "Roles Available: Security Awareness Program Manager, GRC Analyst, Cyber Security Culture Specialist."
        ]
      },
      {
        id: "sec-roadmap",
        title: "2. User Awareness Roadmap",
        content: "Build a career running enterprise-grade training programs:",
        bulletPoints: [
          "Step 1: Understand Social Engineering. Study Phishing, Smishing, Vishing, Quishing, and psychological triggers (urgency, fear).",
          "Step 2: Learn Platform Management. Gain experience with KnowBe4, PhishMe, or Defender for Office 365.",
          "Step 3: Analytics & Content Creation. Convert dry compliance text into engaging lessons and analyze risk metrics."
        ]
      }
    ],
    certs: [
      { name: 'SSAP', full: 'SANS Security Awareness Professional', desc: 'The leading certification for building awareness programs.', diff: 'Advanced' },
      { name: 'CEH', full: 'Certified Ethical Hacker', desc: 'Understand attacker methodologies to teach defense.', diff: 'Intermediate' }
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
