import React, { useState } from 'react';
import { 
  Shield, 
  Swords,
  Search, 
  Moon, 
  Sun,
  UserPlus,
  Bell,
  ChevronDown,
  Home,
  BookOpen,
  FlaskConical,
  Trophy,
  Wrench,
  FileText,
  Users,
  Map
} from 'lucide-react';
import avatarImg from '../assets/cyber-hacker-red.jpg';

export default function Header({ view = 'landing', onBack }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Dynamically choose logo icon: Swords for offensive, Shield for defensive/landing
  const LogoIcon = view === 'offensive' ? Swords : Shield;

  const getThemeColor = () => {
    if (view === 'offensive') return '#ef4444';
    if (view === 'defensive') return '#0088ff';
    return '#0ea5e9';
  };

  const getSubtext = () => {
    if (view === 'offensive') return 'Learn. Hack. Defend.';
    return 'Learn. Practice. Secure.';
  };

  // Same nav items for both offensive and defensive dashboards
  const navItems = [
    { label: 'Home', icon: Home, href: '#home', isBack: true },
    { label: 'Courses', icon: BookOpen, href: '#courses' },
    { label: 'Labs', icon: FlaskConical, href: '#labs' },
    { label: 'Roadmaps', icon: Map, href: '#roadmaps' },
    { label: 'Tools', icon: Wrench, href: '#tools' },
    { label: 'Resources', icon: FileText, href: '#resources' },
    { label: 'Community', icon: Users, href: '#community' }
  ];

  return (
    <header className="navbar select-none">
      {/* Logo */}
      <div className="logo-container" onClick={onBack} style={{ cursor: 'pointer' }}>
        <div className="logo-icon-wrapper" style={{ borderColor: `${getThemeColor()}40`, boxShadow: `0 0 15px ${getThemeColor()}30` }}>
          <LogoIcon size={24} style={{ color: getThemeColor(), filter: `drop-shadow(0 0 8px ${getThemeColor()}80)` }} strokeWidth={2} />
        </div>
        <div className="logo-text-wrapper">
          <h2>
            <span>Cyber</span>
            <span style={{ color: getThemeColor(), transition: 'color 0.8s ease' }}>Learn</span>
          </h2>
          <p>{getSubtext()}</p>
        </div>
      </div>

      {/* Nav Menu Capsule - Same on both dashboards */}
      {(view === 'offensive' || view === 'defensive') && (
        <nav className="nav-capsule">
          {navItems.map((item, idx) => {
            const NavIcon = item.icon;
            return (
              <a 
                key={idx}
                href={item.href} 
                className="nav-link"
                onClick={(e) => { 
                  if (item.isBack) { e.preventDefault(); onBack(); }
                }}
              >
                <NavIcon size={14} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      )}

      {/* Right Controls / CTA */}
      <div className="nav-controls">
        <button className="nav-icon-btn" aria-label="Search">
          <Search size={16} />
        </button>
        <button 
          className="nav-icon-btn" 
          aria-label="Toggle Theme"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        {view !== 'landing' ? (
          <>
            <button className="nav-icon-btn notification-btn" aria-label="Notifications">
              <Bell size={16} />
              <span className="notification-badge">3</span>
            </button>
            <div className="profile-badge-card">
              <div className="avatar-wrapper" style={{ borderColor: getThemeColor() }}>
                <img src={avatarImg} alt="Avatar" className="profile-avatar-img" />
              </div>
              <div className="profile-text">
                <span className="profile-name">Ashish N.</span>
                <span className="profile-level">Level 12</span>
              </div>
              <ChevronDown size={14} style={{ color: '#94a3b8', marginLeft: '4px' }} />
            </div>
          </>
        ) : (
          <>
            <button className="btn-signin">
              Sign In
            </button>
            <button className="btn-signup" style={{ background: `linear-gradient(135deg, #0ea5e9, #0284c7)` }}>
              <UserPlus size={14} />
              <span>Sign Up</span>
            </button>
          </>
        )}
      </div>
    </header>
  );
}
