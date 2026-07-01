import React, { useState } from 'react';
import { ArrowRight, Users2, Target, Brain, ShieldCheck, Network, Eye } from 'lucide-react';

const PURPLE_COLOR = '#a855f7';
const PURPLE_FILL  = 'rgba(168,85,247,0.18)';

const PURPLE_ITEMS = [
  { icon: Target,      label: 'Attack Emulation' },
  { icon: Eye,         label: 'Detection Eng.' },
  { icon: Brain,       label: 'Threat Intel' },
  { icon: ShieldCheck, label: 'Security Validation' },
  { icon: Network,     label: 'MITRE ATT&CK' },
];

export default function GNCBanner({ onNavigate }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="gnc-banner"
      style={{
        borderColor: hovered ? `${PURPLE_COLOR}70` : `${PURPLE_COLOR}22`,
        background: hovered
          ? `linear-gradient(135deg, ${PURPLE_FILL} 0%, rgba(8,14,28,0.65) 100%)`
          : 'rgba(8, 14, 28, 0.6)',
        boxShadow: hovered ? `0 8px 40px ${PURPLE_COLOR}28, inset 0 0 60px ${PURPLE_COLOR}08` : 'none',
        transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glitter corner brackets (purple) */}
      <span className="gnc-corner tl" style={{ '--gnc-c': PURPLE_COLOR }} />
      <span className="gnc-corner tr" style={{ '--gnc-c': PURPLE_COLOR }} />
      <span className="gnc-corner bl" style={{ '--gnc-c': PURPLE_COLOR }} />
      <span className="gnc-corner br" style={{ '--gnc-c': PURPLE_COLOR }} />

      <div className="gnc-left">
        <div
          className="gnc-icon-wrap"
          style={{
            background: `${PURPLE_COLOR}${hovered ? '25' : '15'}`,
            borderColor: `${PURPLE_COLOR}${hovered ? '60' : '30'}`,
            boxShadow: hovered ? `0 0 20px ${PURPLE_COLOR}50` : `0 0 10px ${PURPLE_COLOR}20`,
            transition: 'all 0.4s ease',
          }}
        >
          <Users2 size={28} style={{ color: PURPLE_COLOR }} />
        </div>
        <div className="gnc-text">
          <h3 className="gnc-title">
            <span style={{ color: PURPLE_COLOR }}>PURPLE TEAM</span>
            <span style={{ color: '#94a3b8', fontWeight: 400, fontSize: '14px', marginLeft: '8px' }}>
              (Collaborative SecOps)
            </span>
          </h3>
          <p className="gnc-desc">
            Bridge the gap between attack and defense. Collaborate, simulate and improve security posture continuously.
          </p>
        </div>
      </div>

      <div className="gnc-categories">
        {PURPLE_ITEMS.map((item, i) => {
          const PIcon = item.icon;
          return (
            <div key={i} className="gnc-category-item">
              <PIcon size={20} style={{ color: PURPLE_COLOR }} />
              <span style={{ color: hovered ? '#e2e8f0' : '#94a3b8', transition: 'color 0.4s ease' }}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      <button
        className="gnc-btn"
        style={{
          background: PURPLE_COLOR,
          boxShadow: hovered ? `0 6px 28px ${PURPLE_COLOR}70` : `0 4px 18px ${PURPLE_COLOR}40`,
          transition: 'box-shadow 0.4s ease',
        }}
        onClick={() => onNavigate && onNavigate('offensive-detail')}
      >
        <span>Explore Purple Roadmap</span>
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
