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
  Check
} from 'lucide-react';
import Header from './Header';
import hackerImg from '../assets/cyber-hacker-red.jpg';
import offensiveScannerImg from '../assets/offensive-scanner-graph.jpg';
import socialEngineeringImg from '../assets/social-engineering-vector.jpg';

// Content data for each topic to keep the layout identical
export const TOPIC_DETAILS = {
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
    conceptCallout: "⚠️ CRITICAL RULE: Unauthorized penetration testing is illegal under international cyber law. Always secure a signed written permission (a 'Get Out of Jail Free' card) before scanning any target network.",
    conceptObjectives: [
      "Understand the mindset and attack strategies of malicious threat actors.",
      "Safely identify vulnerability entry points in enterprise software systems.",
      "Document security risks with standard severity ratings (Low to Critical).",
      "Provide actionable mitigation guidelines to software developers."
    ],
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
    commandExpl: [
      { flag: "-sV", desc: "Attempts to probe open ports to determine service name and version info." },
      { flag: "-sC", desc: "Runs default Nmap scripts to test for common vulnerabilities on the active ports." },
      { flag: "-Pn", desc: "Skip ping discovery. Treats all hosts as online, avoiding firewall blocks." },
      { flag: "-oN", desc: "Saves the output scan results directly into a local text file." }
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
    },
    // TryHackMe style tasks questions mapping
    questions: [
      {
        taskNum: 1,
        question: "What is the primary goal of an authorized, simulated cyberattack (pentesting)?",
        correctAnswer: "Discover vulnerabilities",
        hint: "Look at the first paragraph under the Essential Concept section."
      },
      {
        taskNum: 2,
        question: "What is the average entry salary range upper limit in USD for a Junior Penetration Tester?",
        correctAnswer: "$105,000",
        hint: "Check the Average Entry Salary card under the Career Path & Blueprint section."
      },
      {
        taskNum: 3,
        question: "Which phase of a pentest is focused on defining scope and gathering information using OSINT?",
        correctAnswer: "Planning & Reconnaissance",
        hint: "Read the phase num 01 description."
      },
      {
        taskNum: 4,
        question: "What is the command-line flag in Nmap used to enable service and version detection?",
        correctAnswer: "-sV",
        hint: "We usually run 'nmap -sV target.com' to get versions."
      },
      {
        taskNum: 5,
        question: "Which certification is widely recommended as the best hands-on starting point for beginners?",
        correctAnswer: "eJPT",
        hint: "Look at the eJPT description under Recommended Certifications."
      }
    ]
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
    },
    questions: [
      {
        taskNum: 1,
        question: "What is the weak link in the security chain that social engineering exploits?",
        correctAnswer: "Human",
        hint: "Security always fails if a ____ is tricked into opening the door."
      },
      {
        taskNum: 2,
        question: "What is the average entry salary lower limit in USD for a Social Engineer?",
        correctAnswer: "$80,000",
        hint: "Check the Average Entry Salary card under the Career Path section."
      },
      {
        taskNum: 3,
        question: "What is the physical attack vector where an attacker follows an authorized employee through secure turnstiles?",
        correctAnswer: "Tailgating",
        hint: "Read the attack vector 04 description."
      },
      {
        taskNum: 4,
        question: "Which proxy framework is commonly used by red teamers to bypass multi-factor authentication (MFA)?",
        correctAnswer: "Evilginx",
        hint: "Look at the tools list in Task 4."
      },
      {
        taskNum: 5,
        question: "Which certification is focused primarily on designing and analyzing corporate phishing metrics?",
        correctAnswer: "CAPS",
        hint: "Look at the CAPS certification details in Task 5."
      }
    ]
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
    },
    questions: [
      {
        taskNum: 1,
        question: "Ethical hackers spend up to what percentage of their total time in the OSINT reconnaissance phase?",
        correctAnswer: "70%",
        hint: "Look at the description under the header."
      },
      {
        taskNum: 2,
        question: "Name one of the key job roles focused entirely on investigating fraudulent data leaks?",
        correctAnswer: "Fraud Examiner",
        hint: "Check the potential job roles in Task 2."
      },
      {
        taskNum: 3,
        question: "Which OSINT vector involves searching for device hardware open ports using Shodan?",
        correctAnswer: "Infrastructure Mapping",
        hint: "Read the phase num 02 details."
      },
      {
        taskNum: 4,
        question: "Which search engine is specialized for locating open webcams, industrial control systems, and routers?",
        correctAnswer: "Shodan",
        hint: "Look at the description for tools in Task 4."
      },
      {
        taskNum: 5,
        question: "What is the acronym of the advanced Google search operators technique used to query public files?",
        correctAnswer: "Google Dorks",
        hint: "Look at the certification details."
      }
    ]
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
      { num: '01', title: 'Remote Code Execution (RCE)', desc: 'Allows an attacker to execute arbitrary commands over a network connection on a remote machine without physical access or valid credentials.', label: 'Server Threat' },
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
    },
    questions: [
      {
        taskNum: 1,
        question: "What does the abbreviation ACE stand for in the context of computer system security exploitation?",
        correctAnswer: "Arbitrary Code Execution",
        hint: "Check Task 1 under Essential Concept description."
      },
      {
        taskNum: 2,
        question: "What is the average starting salary range lower limit in USD for an Exploit Developer?",
        correctAnswer: "$95,000",
        hint: "Check the Average Entry Salary card under the Career Path section."
      },
      {
        taskNum: 3,
        question: "What shell type forces the compromised server to make an outbound connection back to the attacker?",
        correctAnswer: "Reverse Shells",
        hint: "Read the mechanism 04 description."
      },
      {
        taskNum: 4,
        question: "What is the name of the software reverse engineering suite developed and released by the NSA?",
        correctAnswer: "Ghidra",
        hint: "Look at the tools list in Task 4."
      },
      {
        taskNum: 5,
        question: "What hands-on certification is considered the gold-standard validation of basic exploitation skills?",
        correctAnswer: "OSCP",
        hint: "Check the certifications listed in Task 5."
      }
    ]
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
    },
    questions: [
      {
        taskNum: 1,
        question: "What is the term used to describe moving from one compromised computer to another inside the same network?",
        correctAnswer: "Lateral Movement",
        hint: "Look at the concept flow diagram in Task 1."
      },
      {
        taskNum: 2,
        question: "What is the average starting salary range upper limit in USD for a Senior Post-Exploitation Engineer?",
        correctAnswer: "$140,000",
        hint: "Check the Average Entry Salary card under the Career Path section."
      },
      {
        taskNum: 3,
        question: "What is the Microsoft Directory Service used for identity management that is targeted in 90% of corporate hacks?",
        correctAnswer: "Active Directory",
        hint: "Read the core tactic 04 description."
      },
      {
        taskNum: 4,
        question: "Which graph-theory security tool is used to visualize active directory paths and trust relationships?",
        correctAnswer: "BloodHound",
        hint: "Look at the tools list in Task 4."
      },
      {
        taskNum: 5,
        question: "What C2-focused certification validates a student's ability to operate Cobalt Strike in AD environments?",
        correctAnswer: "CRTO",
        hint: "Check the certifications listed in Task 5."
      }
    ]
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
        list: ["Red Team Operator", "Adversary Simulation Consultant", "Purple Team Lead", "Security Researcher"]
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
        list: ["Developing custom malware and payload bypasses", "Conducting spear-phishing campaigns", "Designing command-and-control (C2) servers", "Attempting physical security breaches of office facilities"]
      },
      {
        icon: Activity,
        title: "Career Growth",
        growthBadge: "Elite Level Demand",
        desc: "Highest growth potential in cyber security consulting."
      }
    ],
    phasesTitle: "The 5 Stages of the Red Team Lifecycle",
    phasesDesc: "Red team operations mimic real-world cybercriminals and APT groups using structured steps:",
    phases: [
      { num: '01', title: 'Target Reconnaissance (OSINT)', desc: 'Harvesting employee details from LinkedIn, scanning public servers, finding corporate credentials leaked on GitHub.', label: 'Recon' },
      { num: '02', title: 'Stealth Entry & Access', desc: 'Breaching corporate defenses using highly customized spear-phishing or physical badge cloning.', label: 'Breach' },
      { num: '03', title: 'Establish Command & Control (C2)', desc: 'Connecting the breached machines back to the red team\'s external server framework for continuous remote control.', label: 'C2 Setup' },
      { num: '04', title: 'Lateral Expansion & Objective Reach', desc: 'Escalating domains, finding financial records, or capturing industrial controller access keys without making noise.', label: 'Action on Target' },
      { num: '05', title: 'Adversary Simulation Debrief', desc: 'Documenting the exact timeline of actions so the Blue Team (defenders) can build detections for the gaps discovered.', label: 'Debriefing' }
    ],
    toolsTitle: "Essential Adversary Tools (Top 5)",
    toolsDesc: "Master these elite tools and frameworks used by Red Team operators globally.",
    tools: [
      { name: 'Cobalt Strike', cat: 'C2 Framework', desc: 'The gold-standard threat emulation software for post-exploitation.' },
      { name: 'Mythic C2', cat: 'Command & Control', desc: 'A multi-platform, highly collaborative agent framework.' },
      { name: 'Proxmark3', cat: 'RFID Cloning', desc: 'The diagnostic tool for RFID and badge cloning attacks.' },
      { name: 'Flipper Zero', cat: 'Hardware Hacking', desc: 'Multi-tool device for researching wireless protocols and sub-GHz frequencies.' },
      { name: 'Havoc C2', cat: 'Command & Control', desc: 'A modern, open-source adversary emulation framework.' }
    ],
    certs: [
      { name: 'CRTO', full: 'Certified Red Team Operator', desc: 'In-depth simulation testing on enterprise Active Directory infrastructures.', diff: 'Advanced' },
      { name: 'CRTE', full: 'Certified Red Team Expert', desc: 'Rigorous expert-level AD exploitation and evasion labs.', diff: 'Expert' }
    ],
    learnList: [
      "Adversary simulation frameworks and threat intelligence",
      "Stealth privilege escalation and domain takeovers",
      "Designing and hiding Command & Control (C2) traffic",
      "Physical facility entry tactics and hardware cloning",
      "Evading modern EDR and SIEM detection systems",
      "Designing collaborative Purple Team exercises"
    ],
    readyText: "Begin your Red Teaming journey and learn how to emulate the world's most sophisticated threat actors.",
    stats: {
      time: "40-50 Hours",
      diff: "Advanced to Expert",
      prereq: "Post-Exploitation, Network Defense, AD Security",
      next: "07. Malware Development",
      nextNum: "07"
    },
    questions: [
      {
        taskNum: 1,
        question: "Unlike standard pentesting, Red Teaming is characterized by what primary operating constraint?",
        correctAnswer: "Stealth",
        hint: "A red team operation must remain unannounced and hidden from detection."
      },
      {
        taskNum: 2,
        question: "What is the average starting salary range upper limit in USD for a Red Team Operator?",
        correctAnswer: "$160,000",
        hint: "Check the Average Entry Salary card under the Career Path section."
      },
      {
        taskNum: 3,
        question: "Which stage of the lifecycle involves setting up active connections back to remote control nodes?",
        correctAnswer: "Establish Command & Control",
        hint: "Read the stage num 03 description."
      },
      {
        taskNum: 4,
        question: "Which RFID hardware cloning tool is standard for physical facility breach assessments?",
        correctAnswer: "Proxmark3",
        hint: "Look at the tools list in Task 4."
      },
      {
        taskNum: 5,
        question: "What certification represents the expert tier (CRTE) of adversary simulation?",
        correctAnswer: "Certified Red Team Expert",
        hint: "Check the certs list under Task 5."
      }
    ]
  }
};

// Interactive Question Component for HTB/THM feel
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

// Helper Study Sub-Views
function CheatsheetView() {
  return (
    <div className="htb-cheatsheet-container">
      <h3>Interactive Penetration Testing Cheat Sheet</h3>
      <p className="section-block-text">Quick reference guide of common networking ports, security vulnerabilities, and scanning commands.</p>
      
      <div className="cheatsheet-split">
        <div className="cheatsheet-block">
          <h4>Common Network Ports & Attack Vectors</h4>
          <table className="cheatsheet-table">
            <thead>
              <tr>
                <th>Port</th>
                <th>Service</th>
                <th>Common Vulnerabilities / Exploitations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>21</strong></td>
                <td>FTP</td>
                <td>Anonymous login, plaintext credentials sniffed, exploits like vsftpd.</td>
              </tr>
              <tr>
                <td><strong>22</strong></td>
                <td>SSH</td>
                <td>Brute-forcing, weak encryption keys, leaked private keys.</td>
              </tr>
              <tr>
                <td><strong>80 / 443</strong></td>
                <td>HTTP / HTTPS</td>
                <td>SQL Injection, XSS, broken authentication, file uploads.</td>
              </tr>
              <tr>
                <td><strong>445</strong></td>
                <td>SMB</td>
                <td>EternalBlue exploit, anonymous share access, credential cracking.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cheatsheet-block">
          <h4>Essential Pentesting CLI Cheat Sheet</h4>
          <div className="cheatsheet-commands-list">
            <div className="command-ref-item">
              <strong>Active Host Scan (Nmap):</strong>
              <code>nmap -sC -sV -Pn 10.10.12.34</code>
            </div>
            <div className="command-ref-item">
              <strong>Directory Brute-forcing (Gobuster):</strong>
              <code>gobuster dir -u http://10.10.12.34 -w /usr/share/wordlists/dirb/common.txt</code>
            </div>
            <div className="command-ref-item">
              <strong>Vulnerability Scanning (Nikto):</strong>
              <code>nikto -h http://10.10.12.34</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlashcardsView() {
  const cards = [
    { id: 1, q: "What is the difference between a Bind Shell and a Reverse Shell?", a: "A Bind Shell opens a port on the victim machine which the attacker connects to. A Reverse Shell forces the victim machine to connect back to the attacker's listening port (which bypasses firewalls)." },
    { id: 2, q: "What is Google Dorking / Google Hacking?", a: "Using advanced search engine operators (like 'filetype:sql' or 'intitle:index.of') to locate exposed databases, configuration files, and sensitive credentials." },
    { id: 3, q: "What is the difference between Passive and Active Reconnaissance?", a: "Passive recon gathers data without interacting with the victim's servers (e.g. OSINT, WHOIS). Active recon directly interacts with target ports to scan for services (e.g. Nmap)." },
    { id: 4, q: "What is privilege escalation?", a: "The process of exploiting system bugs, weak permissions, or design flaws to elevate a low-level account to SYSTEM or root administrator." }
  ];

  const [flippedId, setFlippedId] = React.useState(null);

  return (
    <div className="htb-flashcards-container">
      <h3>Active Recall Flashcards</h3>
      <p className="section-block-text">Click on any card to flip and verify your understanding of core concepts!</p>
      <div className="flashcards-grid">
        {cards.map(c => (
          <div 
            key={c.id} 
            className={`flashcard-item ${flippedId === c.id ? 'flipped' : ''}`}
            onClick={() => setFlippedId(flippedId === c.id ? null : c.id)}
          >
            <div className="card-face card-front">
              <span className="card-lbl">Question</span>
              <h4>{c.q}</h4>
              <span className="card-hint-click">Click to reveal answer</span>
            </div>
            <div className="card-face card-back">
              <span className="card-lbl card-lbl-ans">Answer Description</span>
              <p>{c.a}</p>
              <span className="card-hint-click">Click to flip back</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScenarioSimulatorView() {
  const steps = [
    {
      id: 1,
      title: "Step 1: Passive OSINT",
      desc: "You are hired to audit secure-bank.com. You start by searching public databases. You locate a leaked employee email directory on GitHub containing: 'admin@secure-bank.com' and find out the staging server IP address: 10.10.224.18.",
      task: "What is the target staging server IP address?",
      correct: "10.10.224.18"
    },
    {
      id: 2,
      title: "Step 2: Scanning & Enumeration",
      desc: "You run a version scan against 10.10.224.18. Nmap reveals that Port 80 is open running a very old web service: 'Apache 2.4.49' which has a critical vulnerability (CVE-2021-41773).",
      task: "What service version is running on Port 80?",
      correct: "Apache 2.4.49"
    },
    {
      id: 3,
      title: "Step 3: Exploitation (Gaining Access)",
      desc: "You execute a Path Traversal exploit against the vulnerable Apache version. The server responds and returns a reverse terminal shell, granting you a low-level local account: 'www-data'.",
      task: "What is the username of the initial shell account you gained?",
      correct: "www-data"
    },
    {
      id: 4,
      title: "Step 4: Privilege Escalation",
      desc: "You search the server for misconfigured settings. You find a backup script running with administrator root permissions that has world-writable permissions. You inject your shell payload and gain root shell access!",
      task: "What is the final high-privilege account name gained?",
      correct: "root"
    }
  ];

  const [currentStep, setCurrentStep] = React.useState(0);
  const activeStep = steps[currentStep];

  return (
    <div className="htb-scenario-simulator">
      <h3>Interactive Hack-the-Server Walkthrough Scenario</h3>
      <p className="section-block-text">Follow the stages to simulate a real ethical hack on a corporate bank server!</p>
      
      <div className="scenario-card">
        <div className="scenario-step-indicator">
          {steps.map((s, idx) => (
            <div key={s.id} className={`step-dot ${idx <= currentStep ? 'active' : ''}`}>
              {s.id}
            </div>
          ))}
        </div>

        <div className="scenario-step-content">
          <h4>{activeStep.title}</h4>
          <p>{activeStep.desc}</p>

          <div className="scenario-task-box">
            <span className="task-lbl">Interactive Mission:</span>
            <HTBQuestion 
              questionText={activeStep.task} 
              correctAnswer={activeStep.correct} 
              hint="Read the scenario description text carefully." 
            />
          </div>
        </div>

        <div className="scenario-nav-row">
          <button 
            className="btn-scenario-nav" 
            disabled={currentStep === 0} 
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            &lt; Previous Step
          </button>
          <button 
            className="btn-scenario-nav btn-scenario-next" 
            disabled={currentStep === steps.length - 1} 
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Next Step &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default function OffensiveTopicDetail({ topicId = '01', onBack, onNavigate }) {
  // Use active state internally but fallback to prop
  const [activeRoadmapTopic, setActiveRoadmapTopic] = React.useState(topicId);
  const [studyTab, setStudyTab] = React.useState('theory'); // 'theory', 'cheatsheet', 'flashcards', 'scenario'

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

  // Map questions for active task num
  const getQuestionForTask = (taskNum) => {
    return activeTopic.questions?.find(q => q.taskNum === taskNum);
  };

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
                  <span className="dial-percent">38%</span>
                  <span className="dial-label">Room Completion</span>
                </div>
              </div>
            </div>
            <div className="progress-stats-mini">
              <div>Completed: <strong>3 / 10</strong></div>
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

          {/* Grid Layout (Re-structured to single wide layout for readability) */}
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
                  <div className="hacker-hero-img-container">
                    <img src={hackerImg} alt="Hacker Red Hoodie" />
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
                  if (TOPIC_DETAILS[activeTopic.stats.nextNum]) {
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

              {/* Study Materials Tab Selection Bar */}
              <div className="study-materials-tabs-bar">
                <button 
                  className={`tab-btn ${studyTab === 'theory' ? 'active' : ''}`}
                  onClick={() => setStudyTab('theory')}
                >
                  📖 Theory Lessons
                </button>
                <button 
                  className={`tab-btn ${studyTab === 'cheatsheet' ? 'active' : ''}`}
                  onClick={() => setStudyTab('cheatsheet')}
                >
                  ⚡ Command Cheat Sheet
                </button>
                <button 
                  className={`tab-btn ${studyTab === 'flashcards' ? 'active' : ''}`}
                  onClick={() => setStudyTab('flashcards')}
                >
                  📇 Active Recall Flashcards
                </button>
                <button 
                  className={`tab-btn ${studyTab === 'scenario' ? 'active' : ''}`}
                  onClick={() => setStudyTab('scenario')}
                >
                  🎮 Attack Scenario Simulator
                </button>
              </div>

              {/* Conditional View Rendering */}
              {studyTab === 'theory' && (
                <>
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

                {/* Social Engineering specific image */}
                {activeRoadmapTopic === '02' && (
                  <div className="htb-task-media-wrap">
                    <img src={socialEngineeringImg} alt="Human Exploitation Graphic" className="htb-task-img" />
                    <span className="htb-task-caption">Figure 1.1: Cognitive vectors of human vulnerability exploitation.</span>
                  </div>
                )}

                {/* Concept Process Flow */}
                {activeRoadmapTopic === '03' ? (
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

                {/* Concept Callout Box */}
                {activeTopic.conceptCallout && (
                  <div className="htb-concept-callout">
                    <span className="callout-icon">💡</span>
                    <p>{activeTopic.conceptCallout}</p>
                  </div>
                )}

                {/* Concept Objectives Checklist */}
                {activeTopic.conceptObjectives && (
                  <div className="htb-concept-objectives">
                    <h4>Learning Objectives:</h4>
                    <ul>
                      {activeTopic.conceptObjectives.map((obj, i) => (
                        <li key={i}>
                          <span className="obj-dot">✓</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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

                {/* Penetration Testing specific network image */}
                {activeRoadmapTopic === '01' && (
                  <div className="htb-task-media-wrap">
                    <img src={offensiveScannerImg} alt="Vulnerability Scan Node Grid" className="htb-task-img" />
                    <span className="htb-task-caption">Figure 3.1: Live vulnerability scanner node mapping visualization.</span>
                  </div>
                )}

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
                    <h4 style={{ color: '#ffffff', marginBottom: '10px', fontSize: '14.5px' }}>Command Line Practice: Scanning with Nmap</h4>
                    <TerminalCommandBlock command="nmap -sV -sC -Pn -oN scan_results.txt 10.10.12.34" />
                  </div>
                ) : activeRoadmapTopic === '02' ? (
                  <div style={{ marginBottom: '28px' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: '10px', fontSize: '14.5px' }}>Command Line Practice: Launching SET Phishing</h4>
                    <TerminalCommandBlock command="sudo setoolkit" />
                  </div>
                ) : (
                  <div style={{ marginBottom: '28px' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: '10px', fontSize: '14.5px' }}>Command Line Practice: Gathering DNS Records</h4>
                    <TerminalCommandBlock command="subfinder -d target.com -o subdomains.txt" />
                  </div>
                )}

                {/* Command Flags Explanations */}
                {activeTopic.commandExpl && (
                  <div className="htb-command-expl-wrapper">
                    <h4>Command Parameter Breakdown:</h4>
                    <div className="command-expl-grid">
                      {activeTopic.commandExpl.map((item, i) => (
                        <div key={i} className="command-expl-row">
                          <span className="command-flag-badge">{item.flag}</span>
                          <span className="command-flag-desc">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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

                {/* HTB Question Check */}
                {getQuestionForTask(5) && (
                  <HTBQuestion 
                    questionText={getQuestionForTask(5).question}
                    correctAnswer={getQuestionForTask(5).correctAnswer}
                    hint={getQuestionForTask(5).hint}
                  />
                )}
              </section>
            </>
          )}

          {studyTab === 'cheatsheet' && <CheatsheetView />}
          {studyTab === 'flashcards' && <FlashcardsView />}
          {studyTab === 'scenario' && <ScenarioSimulatorView />}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
