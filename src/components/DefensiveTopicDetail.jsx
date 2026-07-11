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
  ChevronRight
} from 'lucide-react';
import Header from './Header';
import analystImg from '../assets/cyber-analyst-blue.jpg';

function SalaryTable({ tiers }) {
  if (!tiers) {
    tiers = [
      { level: "Fresher (0–1 Year)", role: "SOC Analyst L1 / Trainee", range: "₹3.5 LPA – ₹6.5 LPA" },
      { level: "Early Career (1–3 Years)", role: "Security Monitoring Analyst", range: "₹5.0 LPA – ₹9.0 LPA" },
      { level: "Mid-Level (3–5 Years)", role: "SOC Analyst L2 / Senior Analyst", range: "₹8.0 LPA – ₹15.0 LPA" },
      { level: "Senior (5+ Years)", role: "SOC L3 / SIEM Architect / Lead", range: "₹15.0 LPA – ₹25.0+ LPA" }
    ];
  }

  return (
    <div className="salary-table-container">
      <table className="salary-table">
        <thead>
          <tr>
            <th>Experience Level</th>
            <th>Typical Job Role</th>
            <th>Expected Salary Range (INR)</th>
          </tr>
        </thead>
        <tbody>
          {tiers.map((tier, idx) => (
            <tr key={idx}>
              <td className="salary-tier">{tier.level}</td>
              <td>{tier.role}</td>
              <td className="salary-amount">{tier.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SiemRoadmapSteps({ steps }) {
  if (!steps) {
    steps = [
      {
        title: "Step 1: Core Fundamentals",
        points: [
          "Master basic Networking concepts (OSI Model, TCP/IP, IP addressing).",
          "Learn Operating System basics (Linux commands and Windows Event Logs)."
        ]
      },
      {
        title: "Step 2: Security & Log Basics",
        points: [
          "Learn what common security devices do (Firewalls, IDS/IPS, Endpoint Detection & Response).",
          "Understand how to read common log files (Syslog, HTTP logs, Authentication logs)."
        ]
      },
      {
        title: "Step 3: Master SIEM Tooling",
        points: [
          "Get hands-on experience with market-leading platforms. You can create free lab environments for Splunk (Splunk BHT) or learn Microsoft Sentinel via Azure free trials.",
          "Practice writing basic log queries (SPL for Splunk, KQL for Microsoft Sentinel)."
        ]
      },
      {
        title: "Step 4: Certifications to Stand Out",
        points: [
          "Entry Level: CompTIA Security+ or Splunk Core Certified Power User.",
          "Advanced Level: CompTIA CySA+ (Cybersecurity Analyst) or Microsoft SC-200."
        ]
      }
    ];
  }

  return (
    <div className="siem-roadmap-container">
      {steps.map((step, idx) => (
        <div key={idx} className="siem-step-card">
          <div className="siem-step-number">{idx + 1}</div>
          <h4>{step.title}</h4>
          <ul>
            {step.points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Content data for each defensive topic
export const DEFENSIVE_TOPICS = {
  '01': {
    num: '01',
    title: 'SIEM Monitoring',
    subtitle: 'Security Information and Event Management',
    description: "SIEM involves using specialized software tools to automatically gather and aggregate log data, metrics, and security alerts from across an entire company. Analysts monitor this live data stream to detect unusual activity and flag potential cyberattacks in real time.",
    badges: ["Core Skill", "High Demand", "Defensive Operations"],
    stats: { time: "25 Hours", diff: "Beginner", prereq: "Networking Basics, Linux/Windows Logs" },
    sections: [
      {
        id: "sec-means",
        title: "1. What It Means & The Scope",
        content: "SIEM is the central nervous system or the 24/7 security camera room of an organization's digital network. Since every modern company generates data and faces cyber threats, SIEM is a non-negotiable core component of any corporate Security Operations Center (SOC).",
        bulletPoints: [
          "Roles Available: SOC Analyst (Tier 1/L1, L2, L3), SIEM Administrator, Detection Engineer, Security Engineer, and SIEM Architect.",
          "Industries Hiring: Banking & Finance, Healthcare, E-commerce, Cloud Service Providers, and Managed Security Service Providers (MSSPs).",
          "Evolution: Modern SIEM is rapidly integrating AI and Machine Learning to automate threat hunting and log correlation."
        ]
      },
      {
        id: "sec-worth-it",
        title: "2. Is It Worth It or Not?",
        content: "Absolutely Worth It. SIEM Monitoring is arguably the best and most reliable entry point into the cybersecurity industry. Organizations are legally required to maintain security compliance and logs, guaranteeing long-term job security. It teaches you how networks operate, what a real cyberattack looks like in data logs, and builds a rock-solid foundation."
      },
      {
        id: "sec-salary",
        title: "3. Expected Salary (2026 Trends)",
        content: "Salaries vary depending on skills, certifications, and company types. Here is a breakdown of what professionals can expect in India:",
        customComponent: "SalaryTable",
        callout: "💡 Tip for your users: Gaining practical lab experience or premium vendor certifications can boost entry-level offers significantly."
      },
      {
        id: "sec-roadmap",
        title: "4. Step-by-Step Roadmap",
        content: "To become a professional SIEM Monitoring Analyst, follow this clear pathway:",
        customComponent: "SiemRoadmapSteps"
      }
    ],
    certs: [
      { name: 'Splunk Core', full: 'Splunk Core Certified Power User', desc: 'Validates ability to navigate and create dashboards and alerts in Splunk.', diff: 'Beginner' },
      { name: 'CySA+', full: 'CompTIA Cybersecurity Analyst', desc: 'Industry certification focused on incident response, security operations, and log analysis.', diff: 'Intermediate' },
      { name: 'SC-200', full: 'Microsoft Security Operations Analyst', desc: 'Validates skills in investigating, responding to, and hunting for threats using Microsoft Sentinel.', diff: 'Intermediate' }
    ]
  },
  '02': {
    num: '02',
    title: 'Incident Response',
    subtitle: 'The Elite SWAT Team of Cyber Security',
    description: "Incident Response is a structured process that organizations use to handle and manage the aftermath of a cyberattack, data breach, or security incident. The main goal is to limit damage, contain the threat, erase the attacker's footprint, and restore normal business operations as quickly and securely as possible.",
    badges: ["Core Skill", "High Stakes", "Fast Paced"],
    stats: { time: "30 Hours", diff: "Intermediate to Advanced", prereq: "SIEM Monitoring, Systems Internals" },
    sections: [
      {
        id: "sec-means",
        title: "1. What It Means & The Scope",
        content: "When a major ransomware attack or data breach hits a company, the Incident Response team takes full control. The scope spans a mix of technical panic-management and forensic deep-dives.",
        bulletPoints: [
          "Roles Available: Incident Responder, CSIRT (Computer Security Incident Response Team) Analyst, Threat Hunter, Incident Commander, and Cyber Forensic Investigator.",
          "Core Responsibilities: Monitoring live malware behavior, containing compromised networks, isolating infected servers, and patching the initial point of entry.",
          "Industries Hiring: Large enterprises, critical infrastructure, government agencies, defense sectors, and specialized IR consulting firms (like Mandiant, CrowdStrike, or Palo Alto Unit 42)."
        ]
      },
      {
        id: "sec-worth-it",
        title: "2. Is It Worth It or Not?",
        content: "Highly Worth It, but Demanding. Incident Response is one of the highest-paying and most critical sub-fields in cybersecurity. However, it is a high-stakes, fast-paced job. When an incident occurs, teams often work around the clock under intense pressure. If you love solving complex puzzles under adrenaline-pumping, real-world conditions, it is incredibly rewarding."
      },
      {
        id: "sec-salary",
        title: "3. Expected Salary (2026 Trends)",
        content: "Because IR requires a deeper level of technical expertise than basic monitoring, the salary curve is steeper:",
        customComponent: "SalaryTable",
        salaryTiers: [
          { level: "Early Career (1–3 Years)", role: "Incident Responder / L2 Analyst", range: "₹6.0 LPA – ₹10.0 LPA" },
          { level: "Mid-Level (3–5 Years)", role: "Senior IR Specialist / Consultant", range: "₹10.0 LPA – ₹18.0 LPA" },
          { level: "Senior (5+ Years)", role: "IR Consultant / Incident Commander", range: "₹18.0 LPA – ₹32.0+ LPA" }
        ]
      },
      {
        id: "sec-roadmap",
        title: "4. Step-by-Step Roadmap",
        content: "To transition into or start a career in Incident Response, focus on this path:",
        customComponent: "SiemRoadmapSteps",
        roadmapSteps: [
          {
            title: "Step 1: Deep Systems Architecture Knowledge",
            points: [
              "Learn Windows and Linux internals (processes, registry, file systems, and how malware hides in memory).",
              "Understand enterprise networking models and protocols inside out."
            ]
          },
          {
            title: "Step 2: Learn the Standard IR Frameworks",
            points: [
              "Study the standard incident response lifecycles defined by NIST and SANS:",
              "1. Preparation, 2. Identification, 3. Containment, 4. Eradication, 5. Recovery, 6. Lessons Learned."
            ]
          },
          {
            title: "Step 3: Hands-on Containment & Analysis",
            points: [
              "Practice malware analysis basics (understanding how ransomware or trojans execute).",
              "Learn how to use endpoint security and EDR (Endpoint Detection and Response) tools like CrowdStrike Falcon, Carbon Black, or open-source alternatives like Wazuh."
            ]
          },
          {
            title: "Step 4: Certifications to Stand Out",
            points: [
              "Mid-Level: CompTIA CySA+ or GCIH (GIAC Certified Incident Handler — highly respected in the industry).",
              "Advanced: ECIH (EC-Council Certified Incident Handler) or CHFI (Computer Hacking Forensic Investigator)."
            ]
          }
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
        id: "sec-means",
        title: "1. What It Means & The Scope",
        content: "Threat Intelligence bridges the gap between technical data and high-level corporate strategy. Its scope is divided into distinct layers that cater to different audiences within an organization.",
        bulletPoints: [
          "Tactical/Operational: Tracking specific malware hashes, bad IP addresses, and domain names (Indicators of Compromise) to block them automatically.",
          "Strategic: Analyzing high-level cyber threat trends, geopolitical events, and hacker group motives for company executives (CISO/CEO) to guide security budgets.",
          "Roles Available: Threat Intelligence Analyst, Cyber Threat Intelligence (CTI) Specialist, Threat Hunter, and Geopolitical Risk Analyst."
        ]
      },
      {
        id: "sec-worth-it",
        title: "2. Is It Worth It or Not?",
        content: "Highly Worth It, especially for analytical minds. As cyberattacks become more sophisticated and state-sponsored, organizations can no longer survive on reactive security alone. Proactive defense is the future, making Threat Intelligence professionals highly valuable. If you love deep research, connecting dots across the dark web, investigating attacker psychology, and writing analytical reports, this is an incredibly rewarding and elite specialization."
      },
      {
        id: "sec-salary",
        title: "3. Expected Salary (2026 Trends)",
        content: "Threat Intelligence is typically considered a mid-to-senior specialization, requiring a strong conceptual understanding of the cyber landscape, which commands premium compensation:",
        customComponent: "SalaryTable",
        salaryTiers: [
          { level: "Early Career (1–2 Years)", role: "Junior CTI Analyst / Associate", range: "₹5.5 LPA – ₹9.5 LPA" },
          { level: "Mid-Level (2–5 Years)", role: "Cyber Threat Intelligence Analyst", range: "₹9.0 LPA – ₹16.0 LPA" },
          { level: "Senior (5+ Years)", role: "Senior CTI Consultant / Tier 3 Threat Hunter", range: "₹16.0 LPA – ₹28.0+ LPA" }
        ]
      },
      {
        id: "sec-roadmap",
        title: "4. Step-by-Step Roadmap",
        content: "To break into a Threat Intelligence role, follow this structured path:",
        customComponent: "SiemRoadmapSteps",
        roadmapSteps: [
          {
            title: "Step 1: Understand Attacker Frameworks",
            points: [
              "Master the MITRE ATT&CK Framework (the global encyclopedia of hacker tactics).",
              "Study the Cyber Kill Chain to understand the exact lifecycle of an attack."
            ]
          },
          {
            title: "Step 2: Learn Intelligence Gathering & OSINT",
            points: [
              "Learn how to perform Open Source Intelligence (OSINT) to track threat actors.",
              "Understand how to safely navigate dark web forums, paste sites, and threat feeds."
            ]
          },
          {
            title: "Step 3: Get Familiar with TI Platforms & Standards",
            points: [
              "Learn how threat data is shared globally using formats like STIX/TAXII.",
              "Practice using Threat Intelligence Platforms (TIPs) like MISP (Malware Information Sharing Platform), AlienVault OTX, or VirusTotal."
            ]
          },
          {
            title: "Step 4: Top Certifications",
            points: [
              "Foundational/Mid-Level: CompTIA CySA+ or EC-Council Certified Threat Intelligence Analyst (CTIA).",
              "Advanced: GCTI (GIAC Cyber Threat Intelligence — the gold standard for high-tier TI)."
            ]
          }
        ]
      }
    ],
    certs: [
      { name: 'CySA+', full: 'CompTIA Cybersecurity Analyst', desc: 'Provides foundational skills in behavioral analytics and threat intelligence.', diff: 'Intermediate' },
      { name: 'CTIA', full: 'EC-Council Certified Threat Intelligence Analyst', desc: 'Focuses on the entire threat intelligence lifecycle and analysis process.', diff: 'Advanced' },
      { name: 'GCTI', full: 'GIAC Cyber Threat Intelligence', desc: 'The gold standard for high-tier threat intelligence professionals.', diff: 'Advanced' }
    ]
  },
  '04': {
    num: '04',
    title: 'Digital Forensics',
    subtitle: 'The CSI of the Digital World',
    description: "Digital Forensics is the CSI of the digital world. When a cybercrime occurs—whether it is a data breach, ransomware attack, or internal data theft—digital forensics specialists step in to investigate. Using highly specialized tools, analysts collect, preserve, and analyze digital evidence to legally prove what happened.",
    badges: ["Analytical", "Incident Root-Cause", "Investigation"],
    stats: { time: "30 Hours", diff: "Intermediate", prereq: "System Internals, Networking" },
    sections: [
      {
        id: "sec-scope",
        title: "1. The Scope of Digital Forensics",
        content: "Digital Forensics bridges the gap between deep computer science and the legal system. Its scope spans corporate internal investigations, corporate espionage, cybersecurity incident root-cause analysis, and law enforcement.",
        bulletPoints: [
          "Roles Available: Digital Forensics Analyst, Computer Forensic Investigator, Mobile Forensics Specialist, Forensic Consultant, and DFIR Engineer.",
          "Core Responsibilities: Creating bit-stream disk images of compromised drives, recovering deleted files, examining registry keys, and constructing clear timelines of hacker activity.",
          "Industries Hiring: Big 4 consulting firms (Deloitte, EY, PwC, KPMG), private cybersecurity consulting companies, corporate internal investigation units, banks, and law enforcement/government defense labs."
        ]
      },
      {
        id: "sec-worth-it",
        title: "2. Is It Worth It or Not?",
        content: "Extremely Worth It, especially if you love deep analytical work. Digital Forensics is a prestigious and highly specialized field. Since companies face massive liabilities during data breaches, they need certified experts to accurately prove what was stolen and what wasn't. The job requires meticulous attention to detail and patience, as you may spend days digging through hexadecimal data or system RAM. If you enjoy solving complex mysteries and technical deep-dives, it is an incredibly fulfilling career."
      },
      {
        id: "sec-salary",
        title: "3. Expected Salary (2026 Trends)",
        content: "Digital Forensics requires a steep learning curve and precise procedural knowledge, leading to excellent salary potential:",
        customComponent: "SalaryTable",
        salaryTiers: [
          { level: "Early Career (1–3 Years)", role: "Junior Digital Forensics Analyst / Associate", range: "₹5.5 LPA – ₹8.5 LPA" },
          { level: "Mid-Level (3–5 Years)", role: "Digital Forensics Specialist / DFIR Consultant", range: "₹9.0 LPA – ₹16.0 LPA" },
          { level: "Senior (5+ Years)", role: "Lead Forensic Investigator / Subject Matter Expert", range: "₹16.0 LPA – ₹30.0+ LPA" }
        ]
      },
      {
        id: "sec-roadmap",
        title: "4. Step-by-Step Roadmap",
        content: "To become a skilled Digital Forensics professional, follow this pathway:",
        customComponent: "SiemRoadmapSteps",
        roadmapSteps: [
          {
            title: "Step 1: Learn Core System Internals",
            points: [
              "Master file systems (NTFS, FAT32, ext4) and how they store data on a hard drive.",
              "Understand Windows and Linux registry structures, system artifacts, and memory management."
            ]
          },
          {
            title: "Step 2: Understand the Chain of Custody",
            points: [
              "Learn the strict legal rules for preserving evidence.",
              "If you compromise a file's integrity during collection, it cannot be used in court."
            ]
          },
          {
            title: "Step 3: Master Industry Tools",
            points: [
              "Get hands-on experience with popular open-source and commercial forensic suites.",
              "Learn tools like Autopsy, FTK Imager, EnCase, Volatility (for memory forensics), and Cellebrite (for mobile forensics)."
            ]
          },
          {
            title: "Step 4: Top Certifications",
            points: [
              "Foundational/Mid-Level: CHFI (Computer Hacking Forensic Investigator) or MCFE (Magnet Certified Forensic Examiner).",
              "Advanced/Gold Standard: GCFA (GIAC Certified Forensic Analyst) or GCFE (GIAC Certified Forensic Examiner)."
            ]
          }
        ]
      }
    ],
    certs: [
      { name: 'CHFI', full: 'Computer Hacking Forensic Investigator', desc: 'Foundational certification to understand attack methodologies.', diff: 'Intermediate' },
      { name: 'GCFA', full: 'GIAC Certified Forensic Analyst', desc: 'Advanced Gold Standard for digital forensics.', diff: 'Advanced' }
    ]
  },
  '05': {
    num: '05',
    title: 'Network Security',
    subtitle: 'The Enterprise Defense Shield',
    description: "Network Security is the practice of protecting a company's entire digital transport system—its local networks, wireless connections, routers, switches, and cloud pipelines—from unauthorized access, misuse, or cyberattacks.",
    badges: ["Core Infrastructure", "Stable Career", "Architecture"],
    stats: { time: "25 Hours", diff: "Beginner to Intermediate", prereq: "TCP/IP, Routing" },
    sections: [
      {
        id: "sec-means",
        title: "1. What It Means & The Scope",
        content: "If data is the cargo moving through a corporate infrastructure, Network Security ensures that only authorized traffic can pass. The scope covers managing perimeter defenses, secure remote access, and secure data transit.",
        bulletPoints: [
          "Roles Available: Network Security Engineer, Network Security Administrator, Network Security Analyst, Infrastructure Security Engineer, and Network Architect.",
          "Core Responsibilities: Designing and configuring secure network zones, managing Enterprise Firewalls, setting up Virtual Private Networks (VPNs), implementing Zero Trust architectures, and monitoring network traffic for anomalies.",
          "Industries Hiring: Telecommunications companies, ISPs, financial institutions, cloud service providers (AWS, Azure, Google Cloud), and IT infrastructure giants."
        ]
      },
      {
        id: "sec-worth-it",
        title: "2. Is It Worth It or Not?",
        content: "Highly Worth It. Network Security is a cornerstone of the cybersecurity ecosystem. Almost every organization requires a team to maintain and secure its physical or cloud network architecture. It provides an exceptionally stable career path because the foundational principles of networking rarely change drastically—they just adapt to new technologies like the cloud. If you like configuring systems, understanding how data travels across the globe, and building secure infrastructures from scratch, this field is perfect for you."
      },
      {
        id: "sec-salary",
        title: "3. Expected Salary (2026 Trends)",
        content: "Network Security specialists are highly valued because a single network misconfiguration can shut down an entire multi-million-dollar business:",
        customComponent: "SalaryTable",
        salaryTiers: [
          { level: "Fresher (0–1 Year)", role: "Network Security Associate / Trainee", range: "₹3.5 LPA – ₹6.0 LPA" },
          { level: "Early Career (1–3 Years)", role: "Network Security Engineer", range: "₹5.5 LPA – ₹9.0 LPA" },
          { level: "Mid-Level (3–5 Years)", role: "Senior Network Security Engineer", range: "₹9.0 LPA – ₹16.0 LPA" },
          { level: "Senior (5+ Years)", role: "Network Security Architect / Lead", range: "₹16.0 LPA – ₹28.0+ LPA" }
        ]
      },
      {
        id: "sec-roadmap",
        title: "4. Step-by-Step Roadmap",
        content: "To build a successful career in Network Security, follow this structured blueprint:",
        customComponent: "SiemRoadmapSteps",
        roadmapSteps: [
          {
            title: "Step 1: Master Networking Fundamentals First",
            points: [
              "Learn the OSI Model, TCP/IP protocols, subnetting, DNS, DHCP, and routing protocols (OSPF, BGP).",
              "Get comfortable using Wireshark to intercept, read, and analyze live network packets."
            ]
          },
          {
            title: "Step 2: Learn Enterprise Network Security Devices",
            points: [
              "Understand how Next-Generation Firewalls (NGFWs), Intrusion Detection/Prevention Systems (IDS/IPS), and Proxy servers operate.",
              "Learn how to implement Access Control Lists (ACLs) and network segmentation."
            ]
          },
          {
            title: "Step 3: Dive into Cloud & Modern Concepts",
            points: [
              "Study Cloud Networking (VPCs, Security Groups) on platforms like AWS or Azure.",
              "Understand modern paradigms like Zero Trust Network Access (ZTNA) and Secure Access Service Edge (SASE)."
            ]
          },
          {
            title: "Step 4: Top Certifications",
            points: [
              "Foundational/Mid-Level: CompTIA Security+, Cisco CCNA (Cisco Certified Network Associate), or Palo Alto Networks Certified Network Security Administrator (PCNSA).",
              "Advanced: Cisco CCNP Security (Cisco Certified Network Professional Security)."
            ]
          }
        ]
      }
    ],
    certs: [
      { name: 'CCNA', full: 'Cisco Certified Network Associate', desc: 'Foundational networking knowledge.', diff: 'Beginner' },
      { name: 'PCNSA', full: 'Palo Alto Networks Certified Network Security Administrator', desc: 'Validates firewall administration skills.', diff: 'Intermediate' },
      { name: 'CCNP', full: 'Cisco Certified Network Professional Security', desc: 'Advanced network security concepts.', diff: 'Advanced' }
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
        id: "sec-means",
        title: "1. What It Means & The Scope",
        content: "Think of it like a healthcare check-up for a corporate network. Use automated scanning tools to continuously audit servers, applications, and operating systems for known flaws, misconfigurations, or missing security updates.",
        bulletPoints: [
          "Roles Available: Vulnerability Management Analyst, Vulnerability Assessment Specialist, Threat & Vulnerability Engineer, and Vulnerability Management Program Lead.",
          "Core Responsibilities: Configuring and scheduling enterprise-wide security scans, filtering out false positives, scoring risks using global systems (like CVSS), and tracking patch remediation progress.",
          "Industries Hiring: Global Tech Hubs, Banking & Financial Institutions (BFSI), Healthcare providers, and Major IT Consultancies (like Infosys, TCS, and LTIMindtree)."
        ]
      },
      {
        id: "sec-worth-it",
        title: "2. Is It Worth It or Not?",
        content: "Highly Worth It. Vulnerability Management is a crucial and highly sustainable career track. Because software code is never perfect, fresh vulnerabilities will always exist, meaning companies need permanent teams to handle them. Unlike traditional SOC roles, it rarely requires graveyard shifts since scanning and patch coordination usually follow steady business hours. If you like structured problem-solving, risk calculation, and working closely with different IT engineering teams, this domain is an excellent choice."
      },
      {
        id: "sec-salary",
        title: "3. Expected Salary (2026 Trends)",
        content: "Vulnerability Management specialists command highly competitive compensation due to the direct impact their risk assessments have on corporate security posture:",
        customComponent: "SalaryTable",
        salaryTiers: [
          { level: "Fresher (0–2 Years)", role: "Junior Vulnerability Analyst", range: "₹4.0 LPA – ₹6.5 LPA" },
          { level: "Early Career (2–4 Years)", role: "Threat & Vulnerability Analyst", range: "₹6.0 LPA – ₹11.0 LPA" },
          { level: "Mid-Level (4–7 Years)", role: "Senior Vulnerability Engineer", range: "₹11.0 LPA – ₹18.0 LPA" },
          { level: "Senior (7+ Years)", role: "Vulnerability Program Lead / Architect", range: "₹18.0 LPA – ₹32.0+ LPA" }
        ]
      },
      {
        id: "sec-roadmap",
        title: "4. Step-by-Step Roadmap",
        content: "To kickstart a career in Vulnerability Management, map out this progression:",
        customComponent: "SiemRoadmapSteps",
        roadmapSteps: [
          {
            title: "Step 1: Understand Risk Frameworks & Standards",
            points: [
              "Learn how vulnerabilities are named and tracked globally via the CVE (Common Vulnerabilities and Exposures) database.",
              "Master the CVSS (Common Vulnerability Scoring System) to understand how severity scores (Low, Medium, High, Critical) are calculated."
            ]
          },
          {
            title: "Step 2: Master Enterprise Scanning Tools",
            points: [
              "Learn how to operate market-leading vulnerability scanners like Tenable Nessus, Qualys Guard, or Rapid7 InsightVM.",
              "Understand how to safely scan without disrupting live production environments."
            ]
          },
          {
            title: "Step 3: Learn Patching & Remediation Pipelines",
            points: [
              "Get comfortable with how software updates are rolled out in enterprise networks.",
              "Learn systems like Windows Server Update Services (WSUS) or cloud-native patch management systems."
            ]
          },
          {
            title: "Step 4: Top Certifications",
            points: [
              "Foundational/Mid-Level: CompTIA Security+, CompTIA CySA+ (Cybersecurity Analyst).",
              "Tool-Specific: Qualys Certified Specialist or Tenable Certified Network Auditor."
            ]
          }
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
    description: "Endpoint Security is the practice of protecting individual devices that connect to an organization's network. These devices—referred to as \"endpoints\"—include employee laptops, smartphones, desktop computers, tablets, and even network servers.",
    badges: ["EDR Mastery", "System Internals", "Highly Valued"],
    stats: { time: "25 Hours", diff: "Intermediate", prereq: "OS Administration" },
    sections: [
      {
        id: "sec-means",
        title: "1. What It Means & The Scope",
        content: "With the massive rise of remote work and Bring Your Own Device (BYOD) corporate policies, the corporate perimeter has shifted directly to the endpoint. Managing these decentralized devices has created a large, dedicated job market.",
        bulletPoints: [
          "Roles Available: Endpoint Security Engineer, EDR Specialist, System Security Administrator, Workplace Security Engineer, and Endpoint Management Specialist.",
          "Core Responsibilities: Deploying and maintaining Endpoint Detection and Response (EDR) agents, configuring mobile device management (MDM) profiles, managing application whitelisting, and troubleshooting host-based firewall configurations.",
          "Industries Hiring: Global corporate enterprises, tech corporations, remote-first companies, and Managed Security Service Providers (MSSPs)."
        ]
      },
      {
        id: "sec-worth-it",
        title: "2. Is It Worth It or Not?",
        content: "Highly Worth It. Endpoint Security is an incredibly stable and vital sub-field. As long as employees use laptops and phones to do their jobs, companies will require endpoint protection experts. It is less abstract than network or SIEM security because you are working directly with operating systems (Windows, macOS, Linux) and real-world user devices. If you enjoy OS internals, system management, and practical, device-level defense, this is an excellent area to specialize in."
      },
      {
        id: "sec-salary",
        title: "3. Expected Salary (2026 Trends)",
        content: "Endpoint security skills, especially around modern EDR and XDR (Extended Detection and Response) platforms, are commanding top-tier market rates:",
        customComponent: "SalaryTable",
        salaryTiers: [
          { level: "Fresher (0–1 Year)", role: "Associate Endpoint Engineer / IT Security Trainee", range: "₹3.5 LPA – ₹6.0 LPA" },
          { level: "Early Career (1–3 Years)", role: "Endpoint Security Engineer / Security Ops Engineer", range: "₹5.5 LPA – ₹10.0 LPA" },
          { level: "Mid-Level (3–5 Years)", role: "Senior Endpoint / EDR Specialist", range: "₹10.0 LPA – ₹18.0 LPA" },
          { level: "Senior (5+ Years)", role: "Lead Security Engineer / Infrastructure Architect", range: "₹18.0 LPA – ₹32.0+ LPA" }
        ]
      },
      {
        id: "sec-roadmap",
        title: "4. Step-by-Step Roadmap",
        content: "To become a professional Endpoint Security Engineer, build your expertise through these phases:",
        customComponent: "SiemRoadmapSteps",
        roadmapSteps: [
          {
            title: "Step 1: Focus on Operating System Internals",
            points: [
              "Gain a deep understanding of Windows, Linux, and macOS administration.",
              "Learn how system processes run, how registries operate, and how local user access controls function."
            ]
          },
          {
            title: "Step 2: Learn Modern Endpoint Tooling (EDR & MDM)",
            points: [
              "Move past basic, traditional antivirus concepts. Learn how modern EDR (Endpoint Detection and Response) platforms use behavioral analysis.",
              "Get familiar with enterprise suites like CrowdStrike Falcon, Microsoft Defender for Endpoint, SentinelOne, or Trend Micro.",
              "Learn Mobile Device Management (MDM) tools like Microsoft Intune or VMware Workspace ONE."
            ]
          },
          {
            title: "Step 3: Master Device Hardening Principles",
            points: [
              "Learn how to implement benchmark configurations (like CIS Benchmarks) to lock down operating systems against standard exploit techniques."
            ]
          },
          {
            title: "Step 4: Top Certifications",
            points: [
              "Foundational/Mid-Level: CompTIA Security+, Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900).",
              "Advanced: CrowdStrike Certified Falcon Administrator or Microsoft SC-200."
            ]
          }
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
        id: "sec-means",
        title: "1. What It Means & The Scope",
        content: "Every time a user logs in, a file is modified, or a firewall blocks a connection, a line of data is recorded. Log Analysis is the art of digging through millions of these raw text lines to map out normal behavior and spot the exact second an anomaly or cyberattack occurs. It is not limited to just one job; instead, it is a daily requirement for multiple teams.",
        bulletPoints: [
          "Roles Available: SOC Analyst (L1/L2), Threat Hunter, Security Automation Engineer, and Log Management Administrator.",
          "Core Responsibilities: Parsing unstructured text files into clean formats (like JSON), building custom search queries to isolate specific hacker actions, and writing rules to trigger alerts when suspicious patterns are matched.",
          "Industries Hiring: Managed Security Service Providers (MSSPs), e-commerce platforms tracking massive web transaction logs, tech conglomerates, and corporate IT operations teams."
        ]
      },
      {
        id: "sec-worth-it",
        title: "2. Is It Worth It or Not?",
        content: "100% Worth It—It is a mandatory foundation. You cannot have a career in cybersecurity defense without mastering log analysis. It is the ultimate differentiator between an analyst who simply clicks buttons on a dashboard and a true security expert who understands *how* an exploit happened. While looking at raw data text can feel dry at first, learning to read logs gives you deep, technical visibility into system architectures that makes you highly employable."
      },
      {
        id: "sec-salary",
        title: "3. Expected Salary (2026 Trends)",
        content: "Log analysis is standard for entry-level SOC roles, offering rapid salary jumps as you learn to automate the process:",
        customComponent: "SalaryTable",
        salaryTiers: [
          { level: "Fresher (0–1 Year)", role: "Junior Security Analyst / SOC L1", range: "₹3.5 LPA – ₹6.5 LPA" },
          { level: "Early Career (1–3 Years)", role: "Cyber Security Analyst", range: "₹5.5 LPA – ₹8.5 LPA" },
          { level: "Mid-Level (3–5 Years)", role: "SOC Senior Analyst / Detection Specialist", range: "₹8.5 LPA – ₹15.0 LPA" },
          { level: "Senior (5+ Years)", role: "SOC L3 / Detection Engineer", range: "₹15.0 LPA – ₹26.0+ LPA" }
        ]
      },
      {
        id: "sec-roadmap",
        title: "4. Step-by-Step Roadmap",
        content: "To become a master at reading and analyzing logs, focus on this technical path:",
        customComponent: "SiemRoadmapSteps",
        roadmapSteps: [
          {
            title: "Step 1: Learn Core System Event Formats",
            points: [
              "Study Windows Event Logs (specifically critical security event IDs like 4624 for successful logins and 4625 for failures).",
              "Learn Linux Logs (understanding /var/log/auth.log, syslog, and how to use journalctl)."
            ]
          },
          {
            title: "Step 2: Master Basic Text Filters",
            points: [
              "Learn basic Linux command-line tools to filter text rapidly using grep, awk, sed, and cut.",
              "Learn Regular Expressions (Regex) to help you extract patterns like IP addresses or email formats out of raw text."
            ]
          },
          {
            title: "Step 3: Dive into Query Languages",
            points: [
              "Learn SPL (Search Processing Language) for Splunk.",
              "Learn KQL (Kusto Query Language) used in Microsoft Sentinel."
            ]
          },
          {
            title: "Step 4: Top Certifications & Training",
            points: [
              "Foundational: CompTIA Security+ or Blue Team Level 1 (BTL1).",
              "Tool Specific: Splunk Core Certified Power User."
            ]
          }
        ]
      },
      {
        id: "sec-video",
        title: "Cybersecurity Monitoring Tool Overview",
        content: "This video provides a practical, real-world walkthrough of the precise tools—such as Splunk and the ELK stack—used by modern security analysts to centralize and conduct live log analysis.",
        videoUrl: "https://www.youtube.com/embed/VStekc4I0kg"
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
    description: "Patch Management is the process of distributing and applying updates (known as \"patches\") to software, operating systems, and firmware across an organization's entire IT infrastructure.",
    badges: ["High Stability", "Automation", "Compliance"],
    stats: { time: "20 Hours", diff: "Beginner to Intermediate", prereq: "System Administration" },
    sections: [
      {
        id: "sec-means",
        title: "1. What It Means & The Scope",
        content: "Think of code as a building. Over time, cracks (vulnerabilities and bugs) are discovered in the walls. Software vendors issue a patch to seal that crack. Patch Management ensures these fixes are systematically tested, deployed, and verified on hundreds or thousands of corporate devices without breaking existing systems or interrupting day-to-day business operations.",
        bulletPoints: [
          "Roles Available: Patch Management Specialist, Systems Administrator, Endpoint Operations Engineer, IT Infrastructure Engineer, and Systems Management Lead.",
          "Core Responsibilities: Scheduling automated patch cycles, testing updates in isolated environments, handling failed patch installations, and generating compliance verification reports.",
          "Industries Hiring: Managed Service Providers (MSPs), large-scale IT service providers (like Wipro, TCS, and Infosys), financial institutions with strict security compliances, and large corporate data centers."
        ]
      },
      {
        id: "sec-worth-it",
        title: "2. Is It Worth It or Not?",
        content: "Highly Worth It for a Stable, High-Demand Career. While it might lack the \"flashiness\" of ethical hacking, Patch Management is one of the most critical security practices in the real world. Over 80% of successful corporate data breaches occur because a known patch was left uninstalled. Because keeping software updated is a continuous, never-ending cycle, this domain offers incredible job stability. It is perfect for individuals who excel at systems automation, structured schedules, and building flawless IT infrastructure pipelines."
      },
      {
        id: "sec-salary",
        title: "3. Expected Salary (2026 Trends)",
        content: "Salaries reflect the vast responsibilities of keeping large corporate networks stable and secure, with experienced automation professionals commanding excellent packages:",
        customComponent: "SalaryTable",
        salaryTiers: [
          { level: "Fresher (0–2 Years)", role: "Junior Systems / Patch Administrator", range: "₹3.5 LPA – ₹6.0 LPA" },
          { level: "Early Career (2–4 Years)", role: "Patch Management Specialist", range: "₹5.5 LPA – ₹9.5 LPA" },
          { level: "Mid-Level (4–7 Years)", role: "Infrastructure & Automation Engineer", range: "₹9.5 LPA – ₹16.0 LPA" },
          { level: "Senior (7+ Years)", role: "Patching Manager / Infrastructure Lead", range: "₹16.0 LPA – ₹27.0+ LPA" }
        ]
      },
      {
        id: "sec-roadmap",
        title: "4. Step-by-Step Roadmap",
        content: "To become an elite Patch Management and Infrastructure professional, build your path across these areas:",
        customComponent: "SiemRoadmapSteps",
        roadmapSteps: [
          {
            title: "Step 1: Master Operating System Deployment & Architecture",
            points: [
              "Learn enterprise Windows Server features (Active Directory, Group Policy Objects - GPOs).",
              "Understand how Linux distributions package and deploy software updates (using package managers like apt, yum, or dnf)."
            ]
          },
          {
            title: "Step 2: Learn Enterprise Deployment Tools",
            points: [
              "Master central software deployment tools. The corporate gold standard for Windows infrastructure is Microsoft SCCM / MECM (Microsoft Endpoint Configuration Manager).",
              "Gain hands-on experience with modern cloud-based patching systems like Microsoft Intune, Ivanti, or ManageEngine Patch Manager Plus."
            ]
          },
          {
            title: "Step 3: Master Automation and Scripting",
            points: [
              "Learn PowerShell (for Windows) or Bash scripting (for Linux) to automate patch tracking, reboots, and remote software delivery.",
              "Explore configuration management tools like Ansible to push updates to multiple servers simultaneously."
            ]
          },
          {
            title: "Step 4: Top Certifications",
            points: [
              "Foundational: CompTIA Security+ or Linux Foundation Certified System Administrator (LFCS).",
              "Platform Specific: Microsoft Certified: Endpoint Administrator Associate (MD-102)."
            ]
          }
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
                      {sec.customComponent === 'SalaryTable' && <SalaryTable tiers={sec.salaryTiers} />}
                      {sec.customComponent === 'SiemRoadmapSteps' && <SiemRoadmapSteps steps={sec.roadmapSteps} />}

                      {sec.videoUrl && (
                        <div style={{ margin: '24px 0', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                          <iframe 
                            width="100%" 
                            height="350" 
                            src={sec.videoUrl} 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
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
                    <h2>{activeTopic.sections.length + 1}. Recommended Professional Certifications</h2>
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
