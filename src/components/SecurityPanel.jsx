import React, { useState } from 'react';
import { Target, Shield, BookOpen, ArrowRight } from 'lucide-react';
import hackerImg from '../assets/cyber-hacker-red.jpg';
import analystImg from '../assets/cyber-analyst-blue.jpg';
import gncImg from '../assets/cyber-hud-bg-new.jpg';

const PANELS = [
  {
    id: 'offensive',
    label: 'OFFENSIVE',
    title: 'OFFENSIVE SECURITY',
    desc: 'Think like an attacker. Learn to find vulnerabilities, exploit systems, and strengthen security through ethical hacking.',
    icon: Target,
    color: '#ef4444',
    colorDim: 'rgba(239,68,68,0.12)',
    colorGlow: 'rgba(239,68,68,0.25)',
    colorFill: 'rgba(239,68,68,0.18)',
    learn: ['Penetration Testing', 'Web Application Security', 'Exploitation Techniques', 'Red Teaming & Adversary Simulation', 'Privilege Escalation', 'Malware Development'],
    btnText: 'Explore Offensive Roadmap',
    img: hackerImg,
    view: 'offensive-detail',
  },
  {
    id: 'defensive',
    label: 'DEFENSIVE',
    title: 'DEFENSIVE SECURITY',
    desc: 'Defend, detect, and respond. Learn to protect systems, monitor threats, and respond to incidents effectively.',
    icon: Shield,
    color: '#0088ff',
    colorDim: 'rgba(0,136,255,0.12)',
    colorGlow: 'rgba(0,136,255,0.25)',
    colorFill: 'rgba(0,136,255,0.18)',
    learn: ['SIEM & Log Analysis', 'Incident Response', 'Threat Hunting', 'Digital Forensics', 'Vulnerability Management', 'Security Operations (SOC)'],
    btnText: 'Explore Defensive Roadmap',
    img: analystImg,
    view: 'defensive-detail',
  },
  {
    id: 'gnc',
    label: 'GNC',
    title: 'GOVERNANCE, RISK & COMPLIANCE',
    desc: 'Understand policies, manage risks, ensure compliance, and build a strong security governance framework.',
    icon: BookOpen,
    color: '#22c55e',
    colorDim: 'rgba(34,197,94,0.12)',
    colorGlow: 'rgba(34,197,94,0.25)',
    colorFill: 'rgba(34,197,94,0.18)',
    learn: ['Governance & Leadership', 'Risk Assessment & Mgmt', 'Compliance & Regulations', 'Policies & Frameworks', 'Security Auditing', 'Risk Mitigation'],
    btnText: 'Explore GNC Roadmap',
    img: gncImg,
    view: 'defensive-detail',
  },
];

function PathCard({ panel, onNavigate }) {
  const [hovered, setHovered] = useState(false);
  const PanelIcon = panel.icon;

  return (
    <div
      className="path-card"
      style={{
        '--card-color': panel.color,
        '--card-color-dim': panel.colorDim,
        '--card-color-glow': panel.colorGlow,
        background: hovered
          ? `linear-gradient(135deg, ${panel.colorFill} 0%, rgba(8,14,28,0.6) 100%)`
          : 'rgba(8, 14, 28, 0.7)',
        borderColor: hovered ? panel.color + '80' : panel.colorDim,
        boxShadow: hovered ? `0 8px 40px ${panel.color}30, inset 0 0 60px ${panel.color}08` : 'none',
        transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onNavigate(panel.view)}
    >
      {/* Glitter corner brackets */}
      <span className="glitter-corner tl" style={{ '--card-color': panel.color }} />
      <span className="glitter-corner tr" style={{ '--card-color': panel.color }} />
      <span className="glitter-corner bl" style={{ '--card-color': panel.color }} />
      <span className="glitter-corner br" style={{ '--card-color': panel.color }} />

      {/* Scan-line sweep */}
      <span className="card-scan-line" style={{ '--card-color': panel.color }} />

      {/* Label badge */}
      <div className="path-card-label" style={{
        color: panel.color,
        borderColor: panel.color + '40',
        background: hovered ? panel.color + '20' : 'rgba(0,0,0,0.3)'
      }}>
        {panel.label}
      </div>

      {/* Icon */}
      <div className="path-card-icon-wrap" style={{
        borderColor: panel.color + '60',
        boxShadow: `0 0 ${hovered ? 40 : 24}px ${panel.color}${hovered ? '60' : '30'}`,
        transition: 'box-shadow 0.4s ease'
      }}>
        <PanelIcon size={36} style={{
          color: panel.color,
          filter: `drop-shadow(0 0 ${hovered ? 16 : 10}px ${panel.color})`
        }} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="path-card-title">{panel.title}</h3>

      {/* Description */}
      <p className="path-card-desc">{panel.desc}</p>

      {/* Learn section with image */}
      <div className="path-learn-section">
        <div className="path-learn-list">
          <div className="path-learn-title" style={{ color: panel.color }}>YOU WILL LEARN</div>
          {panel.learn.map((item, i) => (
            <div key={i} className="path-learn-item">
              <span className="path-learn-bullet" style={{ color: panel.color }}>•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="path-learn-img-wrap">
          <img src={panel.img} alt={panel.title} className="path-learn-img" />
          <div className="path-learn-img-overlay" style={{ background: `linear-gradient(to right, rgba(5,10,24,0.9), transparent)` }} />
        </div>
      </div>

      {/* Explore Button */}
      <button
        className="path-card-btn"
        style={{
          background: panel.color,
          boxShadow: hovered ? `0 6px 28px ${panel.color}70` : `0 4px 20px ${panel.color}50`,
          transition: 'box-shadow 0.4s ease',
        }}
        onClick={() => onNavigate(panel.view)}
      >
        <span>{panel.btnText}</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

export default function SecurityPanel({ onNavigate }) {
  return (
    <div className="path-cards-grid">
      {PANELS.map(panel => (
        <PathCard key={panel.id} panel={panel} onNavigate={onNavigate} />
      ))}
    </div>
  );
}
