import React from 'react';
import { 
  Shield, 
  Network, 
  Terminal, 
  Radar, 
  ScanSearch, 
  MonitorCheck, 
  Eye, 
  ShieldAlert, 
  ShieldCheck, 
  Award,
  ArrowLeft,
  ChevronDown,
  ArrowRight,
  Target,
  Trophy,
  BookOpen,
  Activity,
  Server,
  Database,
  Lock,
  Cpu,
  Globe
} from 'lucide-react';
import Header from './Header';
import hackerImg from '../assets/cyber-hacker-red.jpg';

const DEFENSIVE_TOPICS = {
  '05': {
    num: '05',
    title: 'SIEM Monitoring',
    subtitle: 'Security Information and Event Management',
    description: "SIEM stands for Security Information and Event Management. Think of it as the central nervous system or the 24/7 security camera room of an organization's digital network.",
    badges: ["Core Skill", "High Demand", "Entry Point"],
    conceptTitle: "The Scope",
    conceptText: "The scope of SIEM monitoring is massive and ever-growing. Since every modern company generates data and faces cyber threats, SIEM is a non-negotiable core component of any corporate Security Operations Center (SOC).",
    roles: ["SOC Analyst (Tier 1/L1, L2, L3)", "SIEM Administrator", "Detection Engineer", "Security Engineer", "SIEM Architect"],
    industries: ["Banking & Finance", "Healthcare", "E-commerce", "Cloud Service Providers", "MSSPs"],
    evolution: "Modern SIEM is rapidly integrating Artificial Intelligence (AI) and Machine Learning to automate threat hunting and log correlation.",
    worthIt: {
      answer: "Absolutely Worth It.",
      desc: "SIEM Monitoring is arguably the best and most reliable entry point into the cybersecurity industry. Organizations are legally required to maintain security compliance and logs, guaranteeing long-term job security. It teaches you how networks operate, what a real cyberattack looks like in data logs, and builds a rock-solid foundation."
    },
    salaries: [
      { level: "Fresher (0–1 Year)", role: "SOC Analyst L1 / Trainee", pay: "₹3.5 LPA – ₹6.5 LPA" },
      { level: "Early Career (1–3 Years)", role: "Security Monitoring Analyst", pay: "₹5.0 LPA – ₹9.0 LPA" },
      { level: "Mid-Level (3–5 Years)", role: "SOC Analyst L2 / Senior Analyst", pay: "₹8.0 LPA – ₹15.0 LPA" },
      { level: "Senior (5+ Years)", role: "SOC L3 / SIEM Architect / Lead", pay: "₹15.0 LPA – ₹25.0+ LPA" }
    ],
    roadmapTitle: "Step-by-Step Roadmap",
    roadmapSteps: [
      { step: "Step 1: Core Fundamentals", items: ["Master basic Networking concepts (OSI Model, TCP/IP, IP addressing).", "Learn Operating System basics (Linux commands and Windows Event Logs)."] },
      { step: "Step 2: Security & Log Basics", items: ["Learn what common security devices do (Firewalls, IDS/IPS, Endpoint Detection & Response).", "Understand how to read common log files (Syslog, HTTP logs, Authentication logs)."] },
      { step: "Step 3: Master SIEM Tooling", items: ["Get hands-on experience with market-leading platforms. You can create free lab environments for Splunk (Splunk BHT) or learn Microsoft Sentinel via Azure free trials.", "Practice writing basic log queries (SPL for Splunk, KQL for Microsoft Sentinel)."] },
      { step: "Step 4: Certifications to Stand Out", items: ["Entry Level: CompTIA Security+ or Splunk Core Certified Power User.", "Advanced Level: CompTIA CySA+ (Cybersecurity Analyst) or Microsoft SC-200."] }
    ]
  }
};

export default function DefensiveTopicDetail({ topicId = '05', onBack, onNavigate }) {
  const [activeRoadmapTopic, setActiveRoadmapTopic] = React.useState(topicId);

  React.useEffect(() => {
    setActiveRoadmapTopic(topicId);
  }, [topicId]);

  const activeTopic = DEFENSIVE_TOPICS[activeRoadmapTopic];

  const sidebarPaths = [
    { name: 'Offensive Security', icon: Shield, active: false, id: 'offensive-detail' },
    { name: 'Defensive Security', icon: ShieldCheck, active: true, id: 'defensive-detail' },
    { name: 'GNC (Governance, Risk & Compliance)', icon: Shield, active: false },
    { name: 'Purple Team', icon: Target, active: false }
  ];

  const roadmapTopics = [
    { num: '01', name: 'Cyber Security Fundamentals' },
    { num: '02', name: 'Networking & Security Basics' },
    { num: '03', name: 'Windows & Linux Administration' },
    { num: '04', name: 'Security Monitoring' },
    { num: '05', name: 'SIEM & Log Analysis' },
    { num: '06', name: 'Threat Detection' },
    { num: '07', name: 'Incident Response' },
    { num: '08', name: 'Digital Forensics' },
    { num: '09', name: 'Blue Team Operations' },
    { num: '10', name: 'Professional Certifications' }
  ];

  if (!activeTopic) {
    return (
      <div className="defensive-dashboard-wrapper select-none">
        <Header view="defensive" onBack={onBack} />
        <div className="dashboard-main-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', color: '#fff' }}>
            <ShieldCheck size={64} style={{ color: '#06b6d4', marginBottom: '20px' }} />
            <h2>Module Content Coming Soon</h2>
            <p style={{ color: '#aaa', marginTop: '10px' }}>We are actively building out this defensive security module.</p>
            <button className="rm-btn-back" style={{ marginTop: '30px', borderColor: '#06b6d4', color: '#06b6d4' }} onClick={() => onNavigate('defensive-roadmap')}>
              <ArrowLeft size={14} />
              <span>Back to Roadmap</span>
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="defensive-dashboard-wrapper select-none defensive-theme-wrapper">
      <Header view="defensive" onBack={onBack} />

      <div className="dashboard-main-wrapper">
        <nav className="dashboard-breadcrumbs defensive-breadcrumbs">
          <span className="breadcrumb-link" onClick={() => onNavigate('defensive-detail')}>Defensive Security</span>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-link" onClick={() => onNavigate('defensive-roadmap')}>Learning Roadmap</span>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-active">{activeTopic.title}</span>
        </nav>

        <div className="topic-content-layout">
          <aside className="topic-sidebar">
            <div className="sidebar-section">
              <span className="sidebar-section-title defensive-text-cyan">LEARNING PATHS</span>
              <div className="sidebar-paths-list">
                {sidebarPaths.map(path => (
                  <div 
                    key={path.name} 
                    className={`sidebar-path-item ${path.active ? 'active defensive-active-path' : ''}`}
                    onClick={() => path.id && onNavigate(path.id)}
                    style={{ cursor: path.id ? 'pointer' : 'default' }}
                  >
                    <path.icon size={16} /><span>{path.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <span className="sidebar-section-title defensive-text-cyan">ROADMAP MODULES</span>
              <div className="sidebar-modules-list">
                {roadmapTopics.map(topic => (
                  <div 
                    key={topic.num} 
                    className={`sidebar-module-item ${activeRoadmapTopic === topic.num ? 'active defensive-active-module' : ''}`}
                    onClick={() => onNavigate('defensive-topic-detail', topic.num)}
                  >
                    <span className="module-num">{topic.num}</span>
                    <span className="module-name">{topic.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <main className="topic-main-area">
            <div className="topic-header-card defensive-card">
              <div className="topic-header-bg-image" style={{ backgroundImage: `url(${hackerImg})`, opacity: 0.1, mixBlendMode: 'luminosity', filter: 'hue-rotate(180deg)' }}></div>
              <div className="topic-header-content">
                <div className="topic-header-badge defensive-badge-cyan">Module {activeTopic.num}</div>
                <h1 className="defensive-text-cyan">{activeTopic.title}</h1>
                <h3 className="defensive-text-light">{activeTopic.subtitle}</h3>
                <p>{activeTopic.description}</p>
                <div className="topic-badges">
                  {activeTopic.badges.map(b => (
                    <span key={b} className="topic-pill defensive-pill"><ShieldCheck size={12}/> {b}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="topic-details-grid">
              <div className="topic-detail-card defensive-card">
                 <div className="card-header defensive-border-bottom">
                   <Target size={18} className="defensive-text-cyan" />
                   <h3 className="defensive-text-cyan">{activeTopic.conceptTitle}</h3>
                 </div>
                 <div className="card-body">
                   <p>{activeTopic.conceptText}</p>
                   
                   <div className="defensive-scope-grid">
                     <div className="defensive-scope-item">
                        <h4 className="defensive-text-cyan"><Shield size={14}/> Roles Available</h4>
                        <ul>
                          {activeTopic.roles.map(r => <li key={r}>{r}</li>)}
                        </ul>
                     </div>
                     <div className="defensive-scope-item">
                        <h4 className="defensive-text-cyan"><Globe size={14}/> Industries Hiring</h4>
                        <ul>
                          {activeTopic.industries.map(i => <li key={i}>{i}</li>)}
                        </ul>
                     </div>
                   </div>
                   <div className="defensive-evolution">
                      <h4 className="defensive-text-cyan"><Activity size={14}/> Evolution</h4>
                      <p>{activeTopic.evolution}</p>
                   </div>
                 </div>
              </div>

              <div className="topic-detail-card defensive-card">
                 <div className="card-header defensive-border-bottom">
                   <Trophy size={18} className="defensive-text-cyan" />
                   <h3 className="defensive-text-cyan">Is It Worth It?</h3>
                 </div>
                 <div className="card-body">
                   <h4 style={{ color: '#22c55e', fontSize: '1.1rem', marginBottom: '10px' }}>{activeTopic.worthIt.answer}</h4>
                   <p>{activeTopic.worthIt.desc}</p>
                 </div>
              </div>

              <div className="topic-detail-card defensive-card full-width">
                 <div className="card-header defensive-border-bottom">
                   <Database size={18} className="defensive-text-cyan" />
                   <h3 className="defensive-text-cyan">Expected Salary (2026 Trends)</h3>
                 </div>
                 <div className="card-body">
                   <div className="defensive-salary-table-container">
                     <table className="defensive-salary-table">
                       <thead>
                         <tr>
                           <th>Experience Level</th>
                           <th>Typical Job Role</th>
                           <th>Expected Salary Range (Per Annum)</th>
                         </tr>
                       </thead>
                       <tbody>
                         {activeTopic.salaries.map((s, i) => (
                           <tr key={i}>
                             <td>{s.level}</td>
                             <td>{s.role}</td>
                             <td className="defensive-text-cyan" style={{fontWeight: 600}}>{s.pay}</td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                 </div>
              </div>

              <div className="topic-detail-card defensive-card full-width">
                 <div className="card-header defensive-border-bottom">
                   <BookOpen size={18} className="defensive-text-cyan" />
                   <h3 className="defensive-text-cyan">{activeTopic.roadmapTitle}</h3>
                 </div>
                 <div className="card-body">
                   <div className="defensive-step-roadmap">
                     {activeTopic.roadmapSteps.map((step, index) => (
                       <div className="defensive-step-card" key={index}>
                         <div className="defensive-step-number">{index + 1}</div>
                         <div className="defensive-step-content">
                           <h4>{step.step}</h4>
                           <ul>
                             {step.items.map((item, i) => (
                               <li key={i}>{item}</li>
                             ))}
                           </ul>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
