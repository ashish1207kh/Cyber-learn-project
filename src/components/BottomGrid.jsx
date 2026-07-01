import React from 'react';
import { ArrowRight, GitBranch, BarChart2, Trophy, Users, Star } from 'lucide-react';

const FEATURE_TILES = [
  {
    icon: GitBranch,
    color: '#0ea5e9',
    title: 'Roadmap Visualizer',
    desc: 'Track your journey and visualize your learning path',
    link: 'View Roadmap',
  },
  {
    icon: BarChart2,
    color: '#a855f7',
    title: 'Skill Analytics',
    desc: 'Analyze your skills and identify areas to improve',
    link: 'View Analytics',
  },
  {
    icon: Trophy,
    color: '#f59e0b',
    title: 'Achievements',
    desc: 'Earn badges and showcase your accomplishments',
    link: 'View Achievements',
  },
  {
    icon: Users,
    color: '#22c55e',
    title: 'Community',
    desc: 'Connect with learners and professionals',
    link: 'Join Community',
  },
];

export default function BottomGrid({ onNavigate }) {
  const TILE_COLOR = '#0ea5e9';

  function Corners({ color = '#0ea5e9' }) {
    return (
      <>
        <span className="tile-corner tl" style={{ '--tc': color }} />
        <span className="tile-corner tr" style={{ '--tc': color }} />
        <span className="tile-corner bl" style={{ '--tc': color }} />
        <span className="tile-corner br" style={{ '--tc': color }} />
      </>
    );
  }

  return (
    <div className="bottom-grid-wrapper">
      {/* Progress tile */}
      <div className="bottom-tile progress-tile">
        <Corners color="#0ea5e9" />
        <div className="progress-tile-top">
          <span className="bottom-tile-label">Your Progress</span>
          <span className="bottom-tile-sublabel">Overall Completion</span>
        </div>
        <div className="progress-donut-wrap">
          <svg viewBox="0 0 80 80" width="80" height="80" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
            <circle cx="40" cy="40" r="32" fill="none" stroke="#0ea5e9" strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 32 * 0.68} ${2 * Math.PI * 32 * 0.32}`}
            />
          </svg>
          <div className="progress-donut-label">
            <span className="progress-donut-pct">68%</span>
          </div>
        </div>
        <div className="progress-xp-row">
          <span className="xp-label">XP</span>
          <div className="xp-bar-wrap">
            <div className="xp-bar-track">
              <div className="xp-bar-fill" style={{ width: '68%' }}></div>
            </div>
          </div>
          <span className="xp-count">12,450 / 18,000</span>
        </div>
      </div>

      {/* Feature tiles */}
      {FEATURE_TILES.map((tile, i) => {
        const TIcon = tile.icon;
        return (
          <div key={i} className="bottom-tile feature-tile">
            <Corners color={tile.color} />
            <div className="feature-tile-icon" style={{ color: tile.color, background: `${tile.color}15`, border: `1px solid ${tile.color}30` }}>
              <TIcon size={22} />
            </div>
            <h4 className="feature-tile-title">{tile.title}</h4>
            <p className="feature-tile-desc">{tile.desc}</p>
            <button className="feature-tile-link" style={{ color: tile.color }}>
              {tile.link} <ArrowRight size={12} />
            </button>
          </div>
        );
      })}

      {/* Milestone tile */}
      <div className="bottom-tile milestone-tile">
        <Corners color="#a855f7" />
        <div className="milestone-tile-header">
          <span className="bottom-tile-label">Your Next Milestone</span>
        </div>
        <p className="milestone-desc">Complete 5 labs in Defensive Security to level up!</p>
        <div className="milestone-progress-row">
          <Star size={14} style={{ color: '#a855f7' }} />
          <div className="milestone-track">
            <div className="milestone-fill" style={{ width: '60%' }}></div>
          </div>
          <span className="milestone-count">3 / 5 Labs</span>
        </div>
      </div>
    </div>
  );
}
