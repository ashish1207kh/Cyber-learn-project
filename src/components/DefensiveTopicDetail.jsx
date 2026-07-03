import React from 'react';
import { 
  Swords, Shield, BookOpen, Trophy, Award, Bookmark, FileText, Activity, 
  Settings, ArrowRight, ArrowLeft, ArrowDown, Search, Users, Target, 
  ChevronDown, ChevronUp, Clock, Beaker, FolderGit2, CheckCircle, 
  TrendingUp, Terminal, Play, Laptop, Globe, Database, Key, Code, 
  Wifi, Router, Unlock, Package, Satellite, TerminalSquare, Server, Radar, ShieldCheck, MonitorCheck, Eye, ShieldAlert, Lock, ScanSearch
} from 'lucide-react';
import Header from './Header';
import hackerImg from '../assets/cyber-hacker-red.jpg';

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
        salary: "₹3.5 LPA - ₹6.5 LPA",
        salarySub: "INR / year",
        salaryRegion: "(Fresher / Trainee)"
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
      { name: 'CySA+', full: 'CompTIA Cybersecurity Analyst+', desc: 'Applies behavioral analytics to networks and devices to prevent, detect and combat cybersecurity threats.', diff: 'Intermediate' },
      { name: 'SC-200', full: 'Microsoft Security Operations Analyst', desc: 'Validates skills in mitigating threats using Microsoft Sentinel, Microsoft 365 Defender, and Azure Defender.', diff: 'Intermediate' }
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
    }
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
        salary: "₹6.0 LPA - ₹10.0 LPA",
        salarySub: "INR / year",
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
    toolsTitle: "Essential IR Tools",
    toolsDesc: "Master these essential tools used by professional Incident Response teams.",
    tools: [
      { name: 'CrowdStrike Falcon', cat: 'EDR', desc: 'Industry-leading endpoint detection and response platform used globally.' },
      { name: 'Carbon Black', cat: 'EDR', desc: 'Cloud-native endpoint security for monitoring and mitigating threats.' },
      { name: 'Wazuh', cat: 'Open Source', desc: 'Free, open-source security monitoring and incident response platform.' },
      { name: 'Sysinternals', cat: 'System Analysis', desc: 'Suite of advanced Windows tools for hunting malware hiding in OS internals.' }
    ],
    certs: [
      { name: 'CySA+', full: 'CompTIA Cybersecurity Analyst', desc: 'Validates skills in applying behavioral analytics to networks to combat threats.', diff: 'Mid-Level' },
      { name: 'GCIH', full: 'GIAC Certified Incident Handler', desc: 'Highly respected in the industry, focusing on detecting, responding, and resolving incidents.', diff: 'Advanced' },
      { name: 'ECIH', full: 'EC-Council Certified Incident Handler', desc: 'Comprehensive specialist-level program focusing on handling post-breach consequences.', diff: 'Advanced' },
      { name: 'CHFI', full: 'Computer Hacking Forensic Investigator', desc: 'Detailed methodological approach to computer forensics and evidence analysis.', diff: 'Advanced' }
    ],
    learnList: [
      "Windows and Linux internals (processes, registry, memory)",
      "Enterprise networking models and protocols",
      "NIST and SANS incident response lifecycles",
      "Malware analysis basics (trojans, ransomware execution)",
      "Using EDR tools like CrowdStrike Falcon, Carbon Black, Wazuh",
      "Containing compromised networks and isolating servers"
    ],
    readyText: "Start building your foundation in operating system internals and network security.",
    stats: {
      time: "25-35 Hours",
      diff: "Intermediate to Advanced",
      prereq: "SIEM Monitoring, Linux/Windows Admin",
      next: "03. Threat Intelligence",
      nextNum: "03"
    }
  },
  '03': {
    num: '03',
    title: 'Threat Intelligence',
    subtitle: 'The Spy Agency of Cyber Security',
    description: "If SIEM tracks the cameras and Incident Response fights the intruder, Threat Intelligence (TI) is the spy agency that studies the enemy before they even strike. It is the practice of gathering, analyzing, and organizing data about cybercriminals, their motives, targets, and methods (TTPs).",
    badges: ["Proactive Defense", "Analytical Skill", "Premium Pay"],
    metrics: [
      { val: "3", lbl: "Scope Layers" },
      { val: "High", lbl: "Demand" },
      { val: "OSINT", lbl: "Core Skill" },
      { val: "3", lbl: "Certifications" },
      { val: "4", lbl: "Job Roles" }
    ],
    conceptTitle: "What is Threat Intelligence?",
    conceptText: "Threat Intelligence bridges the gap between technical data and high-level corporate strategy. Instead of waiting to be attacked, TI analysts look at global hacker trends to predict who will target their organization next, allowing security teams to upgrade their defenses proactively.",
    conceptFlow: [
      { title: "Tactical", sub: "(IOCs)", icon: Activity },
      { title: "Strategic", sub: "(Trends)", icon: Globe, active: true },
      { title: "Geopolitical", sub: "(Risk)", icon: Target }
    ],
    blueprintDesc: "As cyberattacks become more sophisticated and state-sponsored, organizations can no longer survive on reactive security alone. Proactive defense is the future, making Threat Intelligence professionals highly valuable.",
    blueprintCards: [
      {
        icon: Users,
        title: "Early Career (1–2 Yrs)",
        salary: "₹5.5L - ₹9.5L",
        role: "Junior CTI Analyst / Associate"
      },
      {
        icon: TrendingUp,
        title: "Mid-Level (2–5 Yrs)",
        salary: "₹9.0L - ₹16.0L",
        role: "Cyber Threat Intelligence Analyst",
        highlight: true
      },
      {
        icon: ShieldCheck,
        title: "Senior (5+ Yrs)",
        salary: "₹16.0L - ₹28.0L+",
        role: "Senior CTI Consultant / Tier 3 Threat Hunter"
      }
    ],
    phasesTitle: "Step-by-Step Roadmap",
    phasesDesc: "To break into a Threat Intelligence role, follow this structured path:",
    phases: [
      { num: '01', title: 'Understand Attacker Frameworks', desc: 'Master the MITRE ATT&CK Framework and study the Cyber Kill Chain to understand the exact lifecycle of an attack.', label: 'Frameworks' },
      { num: '02', title: 'Intelligence Gathering & OSINT', desc: 'Learn Open Source Intelligence (OSINT) to track threat actors. Understand how to safely navigate dark web forums and threat feeds.', label: 'OSINT' },
      { num: '03', title: 'TI Platforms & Standards', desc: 'Learn how threat data is shared using formats like STIX/TAXII. Practice using Threat Intelligence Platforms (TIPs) like MISP.', label: 'Platforms' },
      { num: '04', title: 'Top Certifications', desc: 'Acquire foundational (CySA+, CTIA) or advanced (GCTI) certifications to prove your TI expertise.', label: 'Validation' }
    ],
    toolsTitle: "Essential TI Platforms",
    toolsDesc: "Master these platforms used to share and analyze threat data globally.",
    tools: [
      { name: 'MISP', cat: 'TIP Platform', desc: 'Malware Information Sharing Platform for gathering and sharing IOCs.' },
      { name: 'AlienVault OTX', cat: 'Threat Feed', desc: 'Open Threat Exchange providing community-sourced threat data.' },
      { name: 'VirusTotal', cat: 'Analysis', desc: 'Analyzes suspicious files, domains, IPs, and URLs to detect malware.' },
      { name: 'STIX/TAXII', cat: 'Standards', desc: 'Standardized formats for exchanging cyber threat intelligence.' }
    ],
    certs: [
      { name: 'CySA+', full: 'CompTIA CySA+', desc: 'Foundational certification applying behavioral analytics to networks.', diff: 'Intermediate' },
      { name: 'CTIA', full: 'EC-Council CTIA', desc: 'Certified Threat Intelligence Analyst focusing on gathering and analyzing threat info.', diff: 'Intermediate' },
      { name: 'GCTI', full: 'GIAC Cyber Threat Intelligence', desc: 'The gold standard for high-tier Threat Intelligence professionals.', diff: 'Advanced' }
    ],
    learnList: [
      "Mastering the MITRE ATT&CK Framework",
      "Studying the Cyber Kill Chain lifecycle",
      "Performing Open Source Intelligence (OSINT)",
      "Navigating dark web forums and paste sites safely",
      "Using STIX/TAXII for threat data sharing",
      "Practicing with MISP and AlienVault OTX"
    ],
    readyText: "If you love deep research, connecting dots across the dark web, and investigating attacker psychology, this is an incredibly rewarding specialization.",
    stats: {
      time: "20-30 Hours",
      diff: "Intermediate",
      prereq: "Networking, Security Fundamentals",
      next: "04. Digital Forensics",
      nextNum: "04"
    }
  },
  '04': {
    num: '04',
    title: 'Digital Forensics',
    subtitle: 'The CSI of the Digital World',
    description: "When a cybercrime occurs—whether a data breach, ransomware attack, or internal data theft—digital forensics specialists step in to investigate. Using specialized tools, analysts scientifically collect, preserve, and analyze digital evidence to piece together exactly how the crime happened.",
    badges: ["Deep Analytics", "Legal Operations", "High Prestige"],
    metrics: [
      { val: "Big 4", lbl: "Consulting Firms" },
      { val: "High", lbl: "Precision" },
      { val: "5", lbl: "Job Roles" },
      { val: "4", lbl: "Certifications" },
      { val: "Legal", lbl: "Admissibility" }
    ],
    conceptTitle: "What is Digital Forensics?",
    conceptText: "Digital Forensics bridges the gap between deep computer science and the legal system. Its scope spans corporate internal investigations, corporate espionage, cybersecurity incident root-cause analysis, and law enforcement.",
    conceptFlow: [
      { title: "Collect", sub: "(Acquire)", icon: Server },
      { title: "Examine", sub: "(Analyze)", icon: Eye, active: true },
      { title: "Report", sub: "(Legal)", icon: FileText }
    ],
    blueprintDesc: "Since companies face massive liabilities during data breaches, they need certified experts to accurately prove what was stolen and what wasn't. The job requires meticulous attention to detail and patience.",
    blueprintCards: [
      {
        icon: Users,
        title: "Early Career (1–3 Yrs)",
        salary: "₹5.5L - ₹8.5L",
        role: "Junior Digital Forensics Analyst / Associate"
      },
      {
        icon: TrendingUp,
        title: "Mid-Level (3–5 Yrs)",
        salary: "₹9.0L - ₹16.0L",
        role: "Digital Forensics Specialist / DFIR Consultant",
        highlight: true
      },
      {
        icon: ShieldCheck,
        title: "Senior (5+ Yrs)",
        salary: "₹16.0L - ₹30.0L+",
        role: "Lead Forensic Investigator / SME"
      }
    ],
    phasesTitle: "Step-by-Step Roadmap",
    phasesDesc: "To become a skilled Digital Forensics professional, follow this pathway:",
    phases: [
      { num: '01', title: 'Learn Core System Internals', desc: 'Master file systems (NTFS, FAT32, ext4) and understand Windows/Linux registry structures, system artifacts, and memory management.', label: 'Internals' },
      { num: '02', title: 'Understand the Chain of Custody', desc: 'Learn the strict legal rules for preserving evidence. If you compromise a file\'s integrity, it cannot be used in court.', label: 'Legal' },
      { num: '03', title: 'Master Industry Tools', desc: 'Get hands-on experience with forensic suites like Autopsy, FTK Imager, EnCase, Volatility, and Cellebrite.', label: 'Tools' },
      { num: '04', title: 'Top Certifications', desc: 'Acquire foundational (CHFI, MCFE) or advanced (GCFA, GCFE) certifications.', label: 'Validation' }
    ],
    toolsTitle: "Essential Forensic Suites",
    toolsDesc: "Master these industry-standard tools for digital investigation and analysis.",
    tools: [
      { name: 'Autopsy', cat: 'Open Source', desc: 'A digital forensics platform and graphical interface to The Sleuth Kit.' },
      { name: 'FTK Imager', cat: 'Disk Imaging', desc: 'Data preview and imaging tool used to acquire data in a forensically sound manner.' },
      { name: 'Volatility', cat: 'Memory Forensics', desc: 'An advanced memory forensics framework for extracting artifacts from RAM.' },
      { name: 'Cellebrite', cat: 'Mobile Forensics', desc: 'The industry standard for mobile device forensics and data extraction.' }
    ],
    certs: [
      { name: 'CHFI', full: 'Computer Hacking Forensic Investigator', desc: 'Validates skills in identifying an intruder\'s footprints and properly gathering evidence.', diff: 'Intermediate' },
      { name: 'MCFE', full: 'Magnet Certified Forensic Examiner', desc: 'Certifies competency in using Magnet AXIOM for digital investigations.', diff: 'Intermediate' },
      { name: 'GCFA', full: 'GIAC Certified Forensic Analyst', desc: 'The gold standard certification for advanced incident response and digital forensics.', diff: 'Advanced' }
    ],
    learnList: [
      "Mastering file systems (NTFS, FAT32, ext4)",
      "Understanding Windows and Linux registry structures",
      "Learning strict legal rules for preserving evidence",
      "Creating bit-stream disk images of compromised drives",
      "Extracting artifacts from system memory (RAM)",
      "Practicing with Autopsy, FTK Imager, and Volatility"
    ],
    readyText: "If you enjoy solving complex mysteries and technical deep-dives, it is an incredibly fulfilling career.",
    stats: {
      time: "30-40 Hours",
      diff: "Advanced",
      prereq: "System Administration, Incident Response",
      next: "05. Network Security",
      nextNum: "05"
    }
  },
  '05': {
    num: '05',
    title: 'Network Security',
    subtitle: 'The Digital Transport Shield',
    description: "Network Security is the practice of protecting a company's entire digital transport system—its local networks, wireless connections, routers, switches, and cloud pipelines—from unauthorized access, misuse, or cyberattacks. It ensures that only authorized traffic can pass, while blocking malicious actors and data leaks.",
    badges: ["Core Infrastructure", "High Stability", "Foundational"],
    metrics: [
      { val: "Perimeter", lbl: "Defense" },
      { val: "Very High", lbl: "Demand" },
      { val: "Zero Trust", lbl: "Architecture" },
      { val: "4", lbl: "Certifications" },
      { val: "5", lbl: "Job Roles" }
    ],
    conceptTitle: "What is Network Security?",
    conceptText: "As organizations shift to hybrid work environments and massive cloud networks, the demand for robust network security has never been higher. The scope covers managing perimeter defenses, secure remote access, and secure data transit across both physical and cloud infrastructures.",
    conceptFlow: [
      { title: "Firewalls", sub: "(Block)", icon: ShieldAlert },
      { title: "VPNs", sub: "(Tunnel)", icon: Router, active: true },
      { title: "IDS/IPS", sub: "(Detect)", icon: Radar }
    ],
    blueprintDesc: "Network Security is a cornerstone of the cybersecurity ecosystem. Almost every organization requires a team to maintain and secure its physical or cloud network architecture. It provides an exceptionally stable career path.",
    blueprintCards: [
      {
        icon: TerminalSquare,
        title: "Fresher (0–1 Yrs)",
        salary: "₹3.5L - ₹6.0L",
        role: "Network Security Associate"
      },
      {
        icon: Users,
        title: "Early Career (1–3 Yrs)",
        salary: "₹5.5L - ₹9.0L",
        role: "Network Security Engineer"
      },
      {
        icon: TrendingUp,
        title: "Mid-Level (3–5 Yrs)",
        salary: "₹9.0L - ₹16.0L",
        role: "Senior Network Security Engineer",
        highlight: true
      },
      {
        icon: ShieldCheck,
        title: "Senior (5+ Yrs)",
        salary: "₹16.0L - ₹28.0L+",
        role: "Network Security Architect / Lead"
      }
    ],
    phasesTitle: "Step-by-Step Roadmap",
    phasesDesc: "To build a successful career in Network Security, follow this structured blueprint:",
    phases: [
      { num: '01', title: 'Master Networking Fundamentals', desc: 'Learn the OSI Model, TCP/IP protocols, subnetting, DNS, DHCP, and routing protocols (OSPF, BGP). Get comfortable with Wireshark.', label: 'Basics' },
      { num: '02', title: 'Learn Enterprise Security Devices', desc: 'Understand how Next-Generation Firewalls (NGFWs), IDS/IPS, and Proxy servers operate. Learn to implement ACLs and network segmentation.', label: 'Devices' },
      { num: '03', title: 'Dive into Cloud & Modern Concepts', desc: 'Study Cloud Networking (VPCs, Security Groups) on AWS or Azure. Understand Zero Trust Network Access (ZTNA) and SASE.', label: 'Cloud' },
      { num: '04', title: 'Top Certifications', desc: 'Acquire foundational (Security+, CCNA, PCNSA) or advanced (CCNP Security) certifications to prove your skills.', label: 'Validation' }
    ],
    toolsTitle: "Essential Networking Tools",
    toolsDesc: "Master these industry-standard tools and platforms for securing enterprise networks.",
    tools: [
      { name: 'Wireshark', cat: 'Packet Analysis', desc: 'The world\'s foremost network protocol analyzer for intercepting live packets.' },
      { name: 'Cisco Firewalls', cat: 'Hardware', desc: 'Enterprise-grade Next-Generation Firewalls (NGFW) and security appliances.' },
      { name: 'Palo Alto', cat: 'NGFW', desc: 'Industry-leading Next-Generation Firewalls with advanced threat prevention.' },
      { name: 'AWS/Azure VPC', cat: 'Cloud Networking', desc: 'Virtual Private Clouds and network security groups for cloud infrastructures.' }
    ],
    certs: [
      { name: 'Security+', full: 'CompTIA Security+', desc: 'Global certification that validates baseline security skills and network defense concepts.', diff: 'Beginner' },
      { name: 'CCNA', full: 'Cisco Certified Network Associate', desc: 'Validates ability to navigate the ever-changing landscape of IT networking basics.', diff: 'Beginner' },
      { name: 'PCNSA', full: 'Palo Alto Networks Certified Network Security Administrator', desc: 'Proves you can operate Palo Alto Networks next-generation firewalls.', diff: 'Intermediate' },
      { name: 'CCNP Security', full: 'Cisco Certified Network Professional Security', desc: 'Advanced certification for securing networks with Cisco solutions.', diff: 'Advanced' }
    ],
    learnList: [
      "Mastering the OSI Model and TCP/IP protocols",
      "Using Wireshark for live packet analysis",
      "Configuring Next-Generation Firewalls (NGFWs)",
      "Implementing Access Control Lists (ACLs) and segmentation",
      "Setting up Virtual Private Networks (VPNs)",
      "Applying Zero Trust Network Access (ZTNA) principles"
    ],
    readyText: "If you like configuring systems, understanding how data travels across the globe, and building secure infrastructures from scratch, this field is perfect for you.",
    stats: {
      time: "25-35 Hours",
      diff: "Beginner to Intermediate",
      prereq: "Basic IT Knowledge",
      next: "06. Vulnerability Management",
      nextNum: "06"
    }
  },
  '06': {
    num: '06',
    title: 'Vulnerability Management',
    subtitle: 'The Network Health Check-Up',
    description: "Vulnerability Management is the practice of proactively finding, evaluating, and fixing security weaknesses in an organization's systems before attackers can exploit them. Professionals use automated scanning tools to continuously audit servers and applications, prioritizing weaknesses to patch them effectively.",
    badges: ["Proactive Analysis", "Steady Hours", "High Demand"],
    metrics: [
      { val: "CVSS", lbl: "Scoring" },
      { val: "Constant", lbl: "Scanning" },
      { val: "Global", lbl: "Hiring" },
      { val: "4", lbl: "Certifications" },
      { val: "4", lbl: "Job Roles" }
    ],
    conceptTitle: "What is Vulnerability Management?",
    conceptText: "As modern software ecosystems grow larger and more complex, thousands of new vulnerabilities are discovered globally every year. The scope of this field involves bridging defensive operations and offensive scanning, configuring enterprise-wide scans, and tracking patch remediation progress.",
    conceptFlow: [
      { title: "Scan", sub: "(Find)", icon: Radar },
      { title: "Score", sub: "(Prioritize)", icon: Activity, active: true },
      { title: "Patch", sub: "(Fix)", icon: CheckCircle }
    ],
    blueprintDesc: "Because software code is never perfect, fresh vulnerabilities will always exist. Unlike traditional SOC roles, it rarely requires graveyard shifts. If you like structured problem-solving and risk calculation, this domain is an excellent choice.",
    blueprintCards: [
      {
        icon: TerminalSquare,
        title: "Fresher (0–2 Yrs)",
        salary: "₹4.0L - ₹6.5L",
        role: "Junior Vulnerability Analyst"
      },
      {
        icon: Users,
        title: "Early Career (2–4 Yrs)",
        salary: "₹6.0L - ₹11.0L",
        role: "Threat & Vulnerability Analyst"
      },
      {
        icon: TrendingUp,
        title: "Mid-Level (4–7 Yrs)",
        salary: "₹11.0L - ₹18.0L",
        role: "Senior Vulnerability Engineer",
        highlight: true
      },
      {
        icon: ShieldCheck,
        title: "Senior (7+ Yrs)",
        salary: "₹18.0L - ₹32.0L+",
        role: "Vulnerability Program Lead / Architect"
      }
    ],
    phasesTitle: "Step-by-Step Roadmap",
    phasesDesc: "To kickstart a career in Vulnerability Management, map out this progression:",
    phases: [
      { num: '01', title: 'Understand Risk Frameworks', desc: 'Learn how vulnerabilities are tracked via the CVE database. Master the CVSS to understand severity scores.', label: 'Frameworks' },
      { num: '02', title: 'Master Scanning Tools', desc: 'Learn to operate market-leading scanners like Tenable Nessus, Qualys Guard, or Rapid7 InsightVM safely.', label: 'Scanning' },
      { num: '03', title: 'Learn Patching Pipelines', desc: 'Get comfortable with how software updates are rolled out in enterprise networks or cloud systems.', label: 'Remediation' },
      { num: '04', title: 'Top Certifications', desc: 'Acquire foundational certs like Security+, CySA+, or tool-specific vendor certifications.', label: 'Validation' }
    ],
    toolsTitle: "Essential Vulnerability Scanners",
    toolsDesc: "Master these industry-leading platforms used to identify and manage security flaws.",
    tools: [
      { name: 'Tenable Nessus', cat: 'Scanner', desc: 'One of the most widely deployed vulnerability assessment tools in the cybersecurity industry.' },
      { name: 'Qualys Guard', cat: 'Cloud Platform', desc: 'A cloud-based platform delivering continuous security and compliance solutions.' },
      { name: 'Rapid7 InsightVM', cat: 'Vulnerability Mgmt', desc: 'Provides live vulnerability management and endpoint analytics.' },
      { name: 'WSUS', cat: 'Patch Management', desc: 'Windows Server Update Services for managing the distribution of updates and hotfixes.' }
    ],
    certs: [
      { name: 'CySA+', full: 'CompTIA CySA+', desc: 'Validates skills in leveraging threat intelligence and vulnerability management.', diff: 'Intermediate' },
      { name: 'Security+', full: 'CompTIA Security+', desc: 'Provides the foundational knowledge required for any cybersecurity role.', diff: 'Beginner' },
      { name: 'Qualys Cert', full: 'Qualys Certified Specialist', desc: 'Proves expertise in deploying and operating the Qualys Cloud Platform.', diff: 'Intermediate' },
      { name: 'Tenable Cert', full: 'Tenable Certified Network Auditor', desc: 'Validates knowledge in operating Nessus and Tenable products.', diff: 'Intermediate' }
    ],
    learnList: [
      "Tracking vulnerabilities via the CVE database",
      "Calculating severity scores using CVSS",
      "Operating scanners like Nessus, Qualys, or Rapid7",
      "Scanning without disrupting live production environments",
      "Filtering out false positives from scan results",
      "Coordinating patch pipelines with IT teams"
    ],
    readyText: "If you like structured problem-solving, risk calculation, and working closely with different IT engineering teams, this domain is perfect for you.",
    stats: {
      time: "20-30 Hours",
      diff: "Beginner to Intermediate",
      prereq: "Basic Networking, OS Fundamentals",
      next: "07. Endpoint Security",
      nextNum: "07"
    }
  },
  '07': {
    num: '07',
    title: 'Endpoint Security',
    subtitle: 'The Device Defender',
    description: "Endpoint Security is the practice of protecting individual devices that connect to an organization's network, such as employee laptops, smartphones, and servers. Since endpoints are the primary interface where employees interact with data, they are the number one target for hackers trying to drop malware or steal credentials.",
    badges: ["Device Defense", "High Stability", "Core Skill"],
    metrics: [
      { val: "EDR", lbl: "Platform" },
      { val: "High", lbl: "Demand" },
      { val: "BYOD", lbl: "Focus" },
      { val: "4", lbl: "Certifications" },
      { val: "5", lbl: "Job Roles" }
    ],
    conceptTitle: "What is Endpoint Security?",
    conceptText: "With the massive rise of remote work and Bring Your Own Device (BYOD) corporate policies, the corporate perimeter has shifted directly to the endpoint. Managing these decentralized devices has created a large, dedicated job market for deploying advanced software agents to block threats in real time.",
    conceptFlow: [
      { title: "Deploy", sub: "(Agents)", icon: Package },
      { title: "Monitor", sub: "(EDR)", icon: Activity, active: true },
      { title: "Isolate", sub: "(Block)", icon: Lock }
    ],
    blueprintDesc: "As long as employees use laptops and phones to do their jobs, companies will require endpoint protection experts. If you enjoy OS internals, system management, and practical, device-level defense, this is an excellent area to specialize in.",
    blueprintCards: [
      {
        icon: TerminalSquare,
        title: "Fresher (0–1 Yrs)",
        salary: "₹3.5L - ₹6.0L",
        role: "Associate Endpoint Engineer"
      },
      {
        icon: Users,
        title: "Early Career (1–3 Yrs)",
        salary: "₹5.5L - ₹10.0L",
        role: "Endpoint Security Engineer"
      },
      {
        icon: TrendingUp,
        title: "Mid-Level (3–5 Yrs)",
        salary: "₹10.0L - ₹18.0L",
        role: "Senior Endpoint / EDR Specialist",
        highlight: true
      },
      {
        icon: ShieldCheck,
        title: "Senior (5+ Yrs)",
        salary: "₹18.0L - ₹32.0L+",
        role: "Lead Security Engineer"
      }
    ],
    phasesTitle: "Step-by-Step Roadmap",
    phasesDesc: "To become a professional Endpoint Security Engineer, build your expertise through these phases:",
    phases: [
      { num: '01', title: 'Focus on OS Internals', desc: 'Gain a deep understanding of Windows, Linux, and macOS administration. Learn how system processes run and how registries operate.', label: 'Internals' },
      { num: '02', title: 'Learn Modern EDR', desc: 'Learn how modern EDR platforms use behavioral analysis to spot threats using suites like CrowdStrike Falcon or Microsoft Defender.', label: 'EDR' },
      { num: '03', title: 'Device Management', desc: 'Learn Mobile Device Management (MDM) and unified endpoint management tools like Microsoft Intune or VMware Workspace ONE.', label: 'MDM' },
      { num: '04', title: 'Device Hardening', desc: 'Learn to implement benchmark configurations (like CIS Benchmarks) to lock down operating systems against exploit techniques.', label: 'Hardening' }
    ],
    toolsTitle: "Essential Endpoint Platforms",
    toolsDesc: "Master these industry-leading platforms used for protecting and managing devices.",
    tools: [
      { name: 'CrowdStrike', cat: 'EDR', desc: 'Industry-leading cloud-native endpoint protection platform.' },
      { name: 'Microsoft Defender', cat: 'XDR', desc: 'Comprehensive enterprise defense for endpoints, identities, and applications.' },
      { name: 'Intune', cat: 'MDM', desc: 'Microsoft\'s cloud-based endpoint management solution for mobile and desktop.' },
      { name: 'SentinelOne', cat: 'EDR', desc: 'Autonomous AI-powered endpoint security platform.' }
    ],
    certs: [
      { name: 'Security+', full: 'CompTIA Security+', desc: 'Provides the foundational knowledge required for any cybersecurity role.', diff: 'Beginner' },
      { name: 'SC-900', full: 'Microsoft Security Fundamentals', desc: 'Validates basic knowledge of Microsoft security, compliance, and identity solutions.', diff: 'Beginner' },
      { name: 'CrowdStrike', full: 'Certified Falcon Administrator', desc: 'Proves expertise in deploying and managing the CrowdStrike Falcon platform.', diff: 'Intermediate' },
      { name: 'SC-200', full: 'Microsoft Security Operations Analyst', desc: 'Advanced certification for mitigating threats using Microsoft security solutions.', diff: 'Advanced' }
    ],
    learnList: [
      "Mastering Windows, Linux, and macOS administration",
      "Deploying and managing modern EDR agents",
      "Applying behavioral analysis to spot advanced threats",
      "Configuring Mobile Device Management (MDM) profiles",
      "Implementing CIS Benchmarks for device hardening",
      "Troubleshooting host-based firewall configurations"
    ],
    readyText: "If you enjoy OS internals, system management, and practical, device-level defense, this is an excellent area to specialize in.",
    stats: {
      time: "20-30 Hours",
      diff: "Beginner to Intermediate",
      prereq: "Operating Systems, IT Basics",
      next: "08. Log Analysis",
      nextNum: "08"
    }
  }
};

// Generate placeholders for 03 to 10 to avoid fallback to 01
const placeholderNames = [
  "Threat Intelligence", "Digital Forensics", "Network Security",
  "Vulnerability Management", "Endpoint Security", "Log Analysis",
  "Patch Management", "User Awareness Training"
];

for (let i = 8; i <= 10; i++) {
  const num = i < 10 ? `0${i}` : `${i}`;
  DEFENSIVE_TOPICS[num] = {
    num: num,
    title: placeholderNames[i - 3],
    subtitle: 'Coming Soon',
    description: 'This module is currently under construction. Please check back later when we add the full content.',
    badges: ["Coming Soon"],
    metrics: [],
    conceptTitle: "Work in Progress",
    conceptText: "Content for this section will be added soon.",
    conceptFlow: [],
    blueprintDesc: "",
    blueprintCards: [],
    phasesTitle: "",
    phasesDesc: "",
    phases: [],
    toolsTitle: "",
    toolsDesc: "",
    tools: [],
    certs: [],
    learnList: [],
    readyText: "",
    stats: {
      time: "TBD",
      diff: "TBD",
      prereq: "TBD",
      next: "TBD",
      nextNum: ""
    }
  };
}

export default function DefensiveTopicDetail({ topicId = '01', onBack, onNavigate }) {
  const [activeRoadmapTopic, setActiveRoadmapTopic] = React.useState(topicId);

  React.useEffect(() => {
    setActiveRoadmapTopic(topicId);
  }, [topicId]);

  const activeTopic = DEFENSIVE_TOPICS[activeRoadmapTopic] || DEFENSIVE_TOPICS['01'];

  const sidebarPaths = [
    { name: 'Offensive Security', icon: Swords, active: false, id: 'offensive-detail' },
    { name: 'Defensive Security', icon: ShieldCheck, active: true, id: 'defensive-detail' },
    { name: 'GNC (Governance, Risk & Compliance)', icon: Shield, active: false },
    { name: 'Purple Team', icon: Target, active: false }
  ];

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
    <div className="offensive-dashboard-wrapper select-none defensive-theme">
      <Header view="defensive" onBack={onBack} />

      <div className="offensive-dashboard">
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
          
          <div className="sidebar-progress-card topic-sidebar-progress" style={{ marginTop: '20px' }}>
            <span className="sidebar-section-title" style={{ paddingLeft: 0, marginBottom: '10px', display: 'block' }}>YOUR PROGRESS</span>
            <div className="progress-dial-container">
              <div className="progress-dial-outer">
                <svg className="progress-dial-svg" viewBox="0 0 100 100">
                  <circle className="progress-dial-bg" cx="50" cy="50" r="40" />
                  <circle className="progress-dial-fill" cx="50" cy="50" r="40" style={{ strokeDashoffset: '220.96' }} />
                </svg>
                <div className="progress-dial-value">
                  <span className="dial-percent">10%</span>
                  <span className="dial-label">Overall Completion</span>
                </div>
              </div>
            </div>
            <div className="progress-stats-mini">
              <div>Completed: <strong>1 / 10</strong></div>
              <div>Current Topic: <strong>{activeTopic.title}</strong></div>
            </div>
            <button className="btn-sidebar-progress btn-continue-learning" style={{ width: '100%', marginTop: '14px' }}>
              <span>Continue Learning</span>
              <ArrowRight size={12} />
            </button>
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
                  <div className="hacker-hero-img-container" style={{ filter: 'hue-rotate(180deg)', boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)' }}>
                    <img src={hackerImg} alt="Blue Team Defender" />
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

              {/* What You'll Learn */}
              <section className="topic-section-block">
                <h2 className="section-block-title">What You'll Learn</h2>
                <div className="section-divider-red"></div>
                <ul className="learn-checklist-grid">
                  {activeTopic.learnList.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* What is Concept block */}
              <section className="topic-section-block">
                <h2 className="section-block-title">{activeTopic.conceptTitle}</h2>
                <div className="section-divider-red"></div>
                <p className="section-block-text">
                  {activeTopic.conceptText}
                </p>

                <div className="pentest-flow-row">
                  {activeTopic.conceptFlow.map((step, i) => {
                    const StepIcon = step.icon;
                    return (
                      <React.Fragment key={i}>
                        {i > 0 && <div className="flow-connector-line"></div>}
                        <div className={`flow-step-card ${step.active ? 'active' : ''}`}>
                          <div className="flow-step-icon-outer">
                            <StepIcon size={18} style={{ color: 'var(--theme-accent, #ff5555)' }} />
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
                          <CardIcon size={16} style={{ color: 'var(--theme-accent, #ff5555)' }} />
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
                              <Activity size={24} style={{ color: 'var(--theme-accent, #ff5555)' }} />
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
          </div>
        </div>
      </div>
    </div>
  );
}
