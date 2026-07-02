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
  },
  '03': {
    num: '03',
    title: 'OSINT Reconnaissance',
    subtitle: 'Open Source Intelligence',
    description: "In the real world, hackers and ethical pentesters spend up to 70% of their time here. You cannot attack a target effectively if you don't know what it owns, who works there, and what technologies they use.",
    badges: ["Beginner to Intermediate", "Core Skill", "High Demand"],
    metrics: [
      { val: "70%", lbl: "Time Spent" },
      { val: "4", lbl: "Quadrants" },
      { val: "10+", lbl: "Tools Covered" },
      { val: "5", lbl: "Real-world Scenarios" },
      { val: "2", lbl: "Certifications Recommended" }
    ],
    conceptTitle: "What is OSINT Reconnaissance?",
    conceptText: "Open Source Intelligence (OSINT) is the practice of legally collecting, analyzing, and correlating publicly available data to build a comprehensive blueprint of a target. This phase is completely passive, meaning the tester never interacts directly with the client's servers or systems.",
    conceptFlow: [
      { title: "Public Internet", sub: "(Data Discovery)", icon: Users },
      { title: "OSINT Recon Correlation", sub: "(Analyze)", icon: Laptop, active: true },
      { title: "Actionable Attack Map", sub: "(Weaponize)", icon: Shield }
    ],
    blueprintDesc: "OSINT is one of the fastest-growing sub-disciplines in cybersecurity, expanding far beyond just penetration testing.",
    blueprintCards: [
      {
        icon: Users,
        title: "Potential Job Roles",
        list: ["Threat Intelligence Analyst", "OSINT Investigator", "Fraud Examiner", "Red Team Infrastructure Engineer"]
      },
      {
        icon: TrendingUp,
        title: "Average Entry Salary",
        salary: "$75,000 - $110,000",
        salarySub: "USD / year",
        salaryRegion: "(varies by region)"
      },
      {
        icon: FileText,
        title: "What a Day Looks Like",
        list: ["Tracking stolen corporate assets", "Identifying leaked source code", "Analyzing corporate data leaks", "Tracking malicious APT groups"]
      },
      {
        icon: Activity,
        title: "Career Growth",
        growthBadge: "High Demand & Growth",
        desc: "Excellent Career Prospects"
      }
    ],
    phasesTitle: "The 4 Quadrants of Professional OSINT",
    phasesDesc: "Break this topic down into four distinct technological vectors:",
    phases: [
      { num: '01', title: 'Advanced Google Dorking', desc: 'Pentesters use specialized syntax within public search engines to uncover hidden files, indexing errors, and sensitive data.', label: 'Search Operators' },
      { num: '02', title: 'Infrastructure Mapping', desc: 'Finding out every server, subdomain, and IP address registered to a company using tools like Shodan.', label: 'Infrastructure' },
      { num: '03', title: 'Corporate Profiling', desc: 'Gathering intelligence on human elements to feed directly into Social Engineering using LinkedIn and other tools.', label: 'Human Profiling' },
      { num: '04', title: 'Metadata Analysis', desc: 'Analyzing hidden data in uploaded documents like author names, software versions, and internal file paths.', label: 'Hidden Clues' }
    ],
    toolsTitle: "Essential OSINT Tools (Top 5)",
    toolsDesc: "Master these essential tools used for open source intelligence gathering.",
    tools: [
      { name: 'Google Dorks', cat: 'Search Engine', desc: 'Advanced search operators to uncover sensitive data.' },
      { name: 'Shodan', cat: 'Device Search', desc: 'The search engine for internet-connected devices.' },
      { name: 'Amass / Subfinder', cat: 'Infrastructure', desc: 'Tools for in-depth subdomain and infrastructure mapping.' },
      { name: 'theHarvester', cat: 'Corporate Profiling', desc: 'Gathers emails, names, subdomains, IPs, and URLs.' },
      { name: 'ExifTool', cat: 'Metadata Analysis', desc: 'Reads, writes, and edits meta information in files.' }
    ],
    certs: [
      { name: 'OSINT-C', full: 'Certified OSINT Specialist', desc: 'A highly practical certification focusing entirely on modern intelligence-gathering techniques.', diff: 'Beginner' },
      { name: 'SEC487', full: 'SANS Open-Source Intelligence', desc: 'The premier, gold-standard corporate training course for intelligence professionals.', diff: 'Advanced' }
    ],
    learnList: [
      "Advanced search engine operators (Google Dorking)",
      "Infrastructure mapping and subdomain enumeration",
      "Corporate profiling and employee data gathering",
      "Metadata analysis of public documents and images",
      "Visualizing intelligence data flows",
      "Converting raw data into actionable attack maps"
    ],
    readyText: "Begin your OSINT Reconnaissance journey and learn how to map out a target's entire digital footprint.",
    stats: {
      time: "20-25 Hours",
      diff: "Beginner",
      prereq: "Networking Basics, Research Skills",
      next: "04. Exploitation Techniques",
      nextNum: "04"
    }
  },
  '04': {
    num: '04',
    title: 'Exploitation Techniques',
    subtitle: 'Taking Control',
    description: "This is the milestone where students learn how vulnerabilities are actually weaponized to breach systems. Exploitation is the definitive act of taking advantage of a software bug, design flaw, or configuration mistake to force a computer system to behave in an unintended way.",
    badges: ["Intermediate to Advanced", "Core Skill", "High Impact"],
    metrics: [
      { val: "3", lbl: "Exploitation Mechanisms" },
      { val: "3", lbl: "Pipeline Stages" },
      { val: "15+", lbl: "Tools Covered" },
      { val: "8", lbl: "Real-world Scenarios" },
      { val: "2", lbl: "Certifications Recommended" }
    ],
    conceptTitle: "Crossing the Perimeter",
    conceptText: "Exploitation is the definitive act of taking advantage of a software bug, design flaw, or configuration mistake to force a computer system to behave in an unintended way. Usually, the goal is Arbitrary Code Execution (ACE)—forcing the target machine to run commands or scripts provided by the hacker, effectively handing over control.",
    conceptFlow: [
      { title: "Vulnerability", sub: "(The Flaw)", icon: Target },
      { title: "Exploit", sub: "(The Delivery)", icon: Laptop, active: true },
      { title: "Payload", sub: "(The Cargo)", icon: Shield }
    ],
    blueprintDesc: "Exploitation requires deep technical mastery of architecture, networking protocols, and code.",
    blueprintCards: [
      {
        icon: Users,
        title: "Potential Job Roles",
        list: ["Exploit Developer", "Vulnerability Researcher", "Red Team Infrastructure Engineer", "Penetration Tester"]
      },
      {
        icon: TrendingUp,
        title: "Average Entry Salary",
        salary: "$95,000 - $130,000",
        salarySub: "USD / year",
        salaryRegion: "(varies by region)"
      },
      {
        icon: FileText,
        title: "What a Day Looks Like",
        list: ["Analyzing software code via reverse engineering", "Studying zero-day patches", "Writing custom scripts in Python, C, or Assembly", "Building bypass mechanisms for security defenses"]
      },
      {
        icon: Activity,
        title: "Career Growth",
        growthBadge: "High Demand & Growth",
        desc: "Excellent Career Prospects"
      }
    ],
    phasesTitle: "The Big Three Exploitation Mechanisms",
    phasesDesc: "Provide your students with a granular look at how modern professionals categorize exploitation techniques:",
    phases: [
      { num: '01', title: 'Remote Code Execution (RCE)', desc: 'The holy grail of offensive security. Allows an attacker to execute arbitrary commands over a network connection on a remote machine without physical access or valid credentials.', label: 'Server Threat' },
      { num: '02', title: 'Client-Side Exploitation', desc: 'When internal networks are heavily guarded, attackers target the users inside. Requires user interaction to trigger the exploit code.', label: 'Client Threat' },
      { num: '03', title: 'Bind Shells', desc: 'The exploit opens a port on the target machine, and the attacker connects to it. (Easily blocked by modern firewalls).', label: 'Inbound Connection' },
      { num: '04', title: 'Reverse Shells', desc: 'The exploit forces the target machine to connect outward to the attacker\'s machine. Highly effective against firewalls.', label: 'Outbound Connection' }
    ],
    toolsTitle: "Essential Testing Tools (Top 5)",
    toolsDesc: "Master these essential tools used by professional exploit developers.",
    tools: [
      { name: 'Metasploit', cat: 'Exploitation Framework', desc: 'The world\'s most used penetration testing framework.' },
      { name: 'GDB', cat: 'Debugger', desc: 'The GNU Project debugger, allows you to see what is going on inside another program.' },
      { name: 'Ghidra', cat: 'Reverse Engineering', desc: 'A software reverse engineering (SRE) suite of tools developed by NSA.' },
      { name: 'Python', cat: 'Scripting', desc: 'The most popular language for writing custom exploit scripts.' },
      { name: 'Netcat', cat: 'Networking', desc: 'The Swiss Army knife of networking, used for catching reverse shells.' }
    ],
    certs: [
      { name: 'OSCP', full: 'OffSec Certified Professional', desc: 'The gold standard hands-on certification that forces students to manually find, modify, and execute exploits.', diff: 'Advanced' },
      { name: 'HTB / TryHackMe', full: 'Hack The Box & TryHackMe Labs', desc: 'Gamified laboratory platforms to build practical exploitation skills safely and legally.', diff: 'Intermediate' }
    ],
    learnList: [
      "Understanding software vulnerabilities and memory corruption",
      "The anatomy of an exploit and weaponization pipeline",
      "Remote Code Execution (RCE) vectors and techniques",
      "Client-side attacks and malicious payloads",
      "Bind vs. Reverse shells and firewall evasion",
      "Using frameworks like Metasploit for active exploitation"
    ],
    readyText: "Begin your Exploitation journey and learn how vulnerabilities are weaponized in the real world.",
    stats: {
      time: "30-40 Hours",
      diff: "Intermediate to Advanced",
      prereq: "Networking Basics, Linux Admin, Programming",
      next: "05. Post-Exploitation Techniques",
      nextNum: "05"
    }
  },
  '05': {
    num: '05',
    title: 'Post-Exploitation Techniques',
    subtitle: 'Deepening the Breach',
    description: "This phase answers the ultimate question after an exploit succeeds: 'I have an initial foothold on a single low-level account... now what?' It is the transition from a single compromised machine to an entire compromised corporate infrastructure.",
    badges: ["Advanced", "Core Skill", "High Impact"],
    metrics: [
      { val: "3", lbl: "Strategic Objectives" },
      { val: "3", lbl: "Core Tactics" },
      { val: "10+", lbl: "Tools Covered" },
      { val: "5", lbl: "Real-world Scenarios" },
      { val: "2", lbl: "Certifications Recommended" }
    ],
    conceptTitle: "The Art of Survival and Expansion",
    conceptText: "Post-Exploitation is the phase where an authorized tester evaluates what assets can be controlled, what sensitive data can be accessed, and how well they can navigate the internal network without being caught.",
    conceptFlow: [
      { title: "Persistence", sub: "(Survive)", icon: Activity },
      { title: "Privilege Escalation", sub: "(Elevate)", icon: Shield, active: true },
      { title: "Lateral Movement", sub: "(Expand)", icon: Target }
    ],
    blueprintDesc: "Post-exploitation skills separate basic script-kiddies from high-tier enterprise security consultants.",
    blueprintCards: [
      {
        icon: Users,
        title: "Potential Job Roles",
        list: ["Senior Penetration Tester", "Active Directory Security Expert", "Red Team Consultant", "Incident Responder"]
      },
      {
        icon: TrendingUp,
        title: "Average Entry Salary",
        salary: "$100,000 - $140,000",
        salarySub: "USD / year",
        salaryRegion: "(varies by region)"
      },
      {
        icon: FileText,
        title: "What a Day Looks Like",
        list: ["Analyzing Active Directory domain trusts", "Creating stealthy persistence mechanisms", "Bypassing EDR agents", "Simulating APT playbooks"]
      },
      {
        icon: Activity,
        title: "Career Growth",
        growthBadge: "High Demand & Growth",
        desc: "Excellent Career Prospects"
      }
    ],
    phasesTitle: "Core Post-Exploitation Tactics",
    phasesDesc: "Detail these exact technical maneuvers that professional pentesters practice daily:",
    phases: [
      { num: '01', title: 'Privilege Escalation', desc: 'Hunting for misconfigured services, vulnerable drivers, or weak permissions to elevate from a standard user to SYSTEM or root.', label: 'Vertical Movement' },
      { num: '02', title: 'Pillaging (Data Gathering)', desc: 'Extracting database connection strings, passwords from memory (Mimikatz), and sensitive internal architecture documents.', label: 'Data Exfiltration' },
      { num: '03', title: 'Lateral Movement', desc: 'Using the compromised machine as a proxy to scan and attack hidden internal networks (e.g., HR or financial networks).', label: 'Horizontal Movement' },
      { num: '04', title: 'Active Directory (AD)', desc: '90% of corporate enterprises run on AD. Mastering Kerberos attacks and group policy manipulations is crucial.', label: 'Enterprise Target' }
    ],
    toolsTitle: "Essential Testing Tools (Top 5)",
    toolsDesc: "Master these essential tools used for deep post-exploitation and AD attacks.",
    tools: [
      { name: 'Mimikatz', cat: 'Credential Extraction', desc: 'Extracts plaintexts passwords, hash, PIN code and kerberos tickets from memory.' },
      { name: 'BloodHound', cat: 'AD Analysis', desc: 'Uses graph theory to reveal hidden relationships within Active Directory environments.' },
      { name: 'Cobalt Strike', cat: 'C2 Framework', desc: 'Adversary simulation software used for long-term post-exploitation.' },
      { name: 'Chisel', cat: 'Pivoting', desc: 'A fast TCP/UDP tunnel, transported over HTTP, secured via SSH. Useful for lateral movement.' },
      { name: 'PowerSploit', cat: 'PowerShell Modules', desc: 'Collection of Microsoft PowerShell modules for use during post-exploitation phases.' }
    ],
    certs: [
      { name: 'CRTO', full: 'Certified Red Team Operator', desc: 'Rigorous testing on internal domain post-exploitation environments and Cobalt Strike.', diff: 'Advanced' },
      { name: 'OSCP', full: 'OffSec Certified Professional', desc: 'Provides rigorous testing on internal network compromise and privilege escalation.', diff: 'Advanced' }
    ],
    learnList: [
      "Windows and Linux privilege escalation techniques",
      "Credential dumping from memory (Mimikatz)",
      "Lateral movement and internal network pivoting",
      "Active Directory architecture and Kerberos attacks",
      "Stealthy persistence mechanisms and backdoors",
      "Bypassing Endpoint Detection & Response (EDR)"
    ],
    readyText: "Begin your Post-Exploitation journey and learn how to navigate and control enterprise networks.",
    stats: {
      time: "35-45 Hours",
      diff: "Advanced",
      prereq: "Exploitation Techniques, AD Basics",
      next: "06. Red Teaming",
      nextNum: "06"
    }
  },
  '06': {
    num: '06',
    title: 'Red Teaming',
    subtitle: 'Adversary Simulation',
    description: "We step into the highest tier of offensive security operations. While a standard penetration tester focuses on finding as many bugs as possible, a Red Teamer focuses on testing an organization's entire defensive posture—people, processes, and technology—stealthily.",
    badges: ["Advanced to Expert", "Elite Skill", "High Impact"],
    metrics: [
      { val: "5", lbl: "Lifecycle Stages" },
      { val: "100%", lbl: "Stealth" },
      { val: "15+", lbl: "Tactics" },
      { val: "5", lbl: "Real-world APTs" },
      { val: "2", lbl: "Certifications Recommended" }
    ],
    conceptTitle: "Pentesting vs. Red Teaming",
    conceptText: "It is incredibly common to confuse these two concepts. Penetration Testing focuses on identifying as many vulnerabilities as possible, usually announced and restricted in scope. Red Teaming, however, simulates a specific real-world threat actor to test detection and response. It is stealthy, unannounced, wide-open in scope, and success is measured by reaching a specific goal without being detected.",
    conceptFlow: [
      { title: "Target Intelligence", sub: "(OSINT)", icon: Search },
      { title: "Initial Access", sub: "(Breach)", icon: Target, active: true },
      { title: "Objective Completion", sub: "(Exfiltrate)", icon: Trophy }
    ],
    blueprintDesc: "This path is intended for advanced students and professionals who already have a baseline understanding of networking, systems administration, and basic exploitation.",
    blueprintCards: [
      {
        icon: Users,
        title: "Potential Job Roles",
        list: ["Red Team Operator", "Adversary Emulation Engineer", "Purple Team Lead", "Threat Simulation Expert"]
      },
      {
        icon: TrendingUp,
        title: "Average Entry Salary",
        salary: "$120,000 - $160,000",
        salarySub: "USD / year",
        salaryRegion: "(varies by region)"
      },
      {
        icon: FileText,
        title: "What a Day Looks Like",
        list: ["Researching state-sponsored hacker playbooks (MITRE ATT&CK)", "Writing stealth tools", "Setting up C2 infrastructures", "Testing internal security teams"]
      },
      {
        icon: Activity,
        title: "Career Growth",
        growthBadge: "Elite Tier",
        desc: "Highest Demand & Prestige"
      }
    ],
    phasesTitle: "The Red Team Lifecycle",
    phasesDesc: "Red Team operations can last anywhere from weeks to months, simulating an Advanced Persistent Threat (APT):",
    phases: [
      { num: '01', title: 'Target Intelligence (OSINT)', desc: 'Building profiles without touching target infrastructure using public intelligence.', label: 'Reconnaissance' },
      { num: '02', title: 'Weaponization & Infrastructure', desc: 'Buying fake domains, setting up C2 (Command & Control) servers and payloads.', label: 'Preparation' },
      { num: '03', title: 'Initial Access (The Breach)', desc: 'Using custom phishing or physical tailgating to get inside the target perimeter.', label: 'Infiltration' },
      { num: '04', title: 'Evasion & Stealth', desc: 'Bypassing EDR (Antivirus) and blending into normal corporate network traffic.', label: 'Survival' },
      { num: '05', title: 'Objective Completion', desc: 'Exfiltrating mock sensitive data (like the CEO\'s inbox) to prove business impact.', label: 'Execution' }
    ],
    toolsTitle: "Essential Red Team Toolkits (Top 5)",
    toolsDesc: "Introduce yourself to the specialized enterprise tools used by Red Team operators for stealth and control.",
    tools: [
      { name: 'Cobalt Strike', cat: 'C2 Framework', desc: 'The industry-standard commercial platform used by elite red teams globally.' },
      { name: 'Sliver / Mythic', cat: 'C2 Frameworks', desc: 'Powerful, open-source alternative C2 frameworks that are highly customizable.' },
      { name: 'CrowdStrike Evasion', cat: 'EDR Bypassing', desc: 'Process Injection and API Unhooking to stay invisible.' },
      { name: 'MITRE ATT&CK', cat: 'Framework', desc: 'A globally-accessible knowledge base of adversary tactics and techniques.' },
      { name: 'Phishing Frameworks', cat: 'Initial Access', desc: 'Custom tailored social engineering campaigns for payload delivery.' }
    ],
    certs: [
      { name: 'CRTO', full: 'Certified Red Team Operator', desc: 'An excellent, highly practical exam focusing on Cobalt Strike and Active Directory evasion.', diff: 'Advanced' },
      { name: 'CRTE / PACES', full: 'Altered Security', desc: 'Elite multi-forest Active Directory testing certifications designed to test deep network persistence.', diff: 'Expert' }
    ],
    learnList: [
      "Simulating Advanced Persistent Threats (APTs)",
      "Setting up Command and Control (C2) infrastructure",
      "Bypassing modern Antivirus and EDR solutions",
      "Process Injection, API Unhooking, and memory obfuscation",
      "Executing stealthy initial access campaigns",
      "Testing an organization's physical, digital, and social defenses"
    ],
    readyText: "Begin your Red Teaming journey and learn how to emulate the world's most sophisticated threat actors.",
    stats: {
      time: "40-50 Hours",
      diff: "Advanced to Expert",
      prereq: "Post-Exploitation, Network Architecture",
      next: "07. Physical Security Testing",
      nextNum: "07"
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
                {activeTopic.num === '03' ? (
                  <div className="osint-data-flow-container">
                    <div className="osint-node primary-node">
                      <div className="osint-node-icon"><Search size={18} /></div>
                      <h4>PUBLIC INTERNET</h4>
                    </div>
                    
                    <div className="osint-branches">
                      <div className="osint-branch-line"></div>
                      <div className="osint-branch-item">
                        <div className="osint-connector"></div>
                        <div className="osint-leaf">
                          <div className="osint-leaf-header">
                            <Activity size={14} /> <span>Domain Records (DNS, WHOIS)</span>
                          </div>
                          <div className="osint-leaf-result">Reveals IP Ranges & Subdomains</div>
                        </div>
                      </div>
                      <div className="osint-branch-item">
                        <div className="osint-connector"></div>
                        <div className="osint-leaf">
                          <div className="osint-leaf-header">
                            <Users size={14} /> <span>Social Media (LinkedIn/X)</span>
                          </div>
                          <div className="osint-leaf-result">Reveals Employee Roles & Email Formats</div>
                        </div>
                      </div>
                      <div className="osint-branch-item">
                        <div className="osint-connector"></div>
                        <div className="osint-leaf">
                          <div className="osint-leaf-header">
                            <FolderGit2 size={14} /> <span>Code Repositories (GitHub/GitLab)</span>
                          </div>
                          <div className="osint-leaf-result">Reveals Leaked API Keys & Internal Code</div>
                        </div>
                      </div>
                    </div>

                    <div className="osint-funnel">
                       <div className="osint-vertical-line"></div>
                       <ArrowDown size={16} className="osint-arrow" />
                    </div>

                    <div className="osint-node correlation-node">
                      <div className="osint-node-icon"><Settings size={18} className="spin-slow" /></div>
                      <h4>OSINT RECON CORRELATION</h4>
                    </div>

                    <div className="osint-funnel">
                       <div className="osint-vertical-line"></div>
                       <ArrowDown size={16} className="osint-arrow" />
                    </div>

                    <div className="osint-node attack-map-node">
                      <div className="osint-node-header">
                        <Target size={18} />
                        <h4>ACTIONABLE ATTACK MAP</h4>
                      </div>
                      <ul className="osint-attack-list">
                        <li><span className="osint-bullet">•</span> <strong>Target Subdomain:</strong> staging.company.com <span className="highlight-red">(Unpatched)</span></li>
                        <li><span className="osint-bullet">•</span> <strong>Valid Corporate Email:</strong> j.doe@company.com</li>
                        <li><span className="osint-bullet">•</span> <strong>Technology Stack:</strong> Leaked Apache version 2.4.49</li>
                      </ul>
                    </div>
                  </div>
                ) : (
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
                )}
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
