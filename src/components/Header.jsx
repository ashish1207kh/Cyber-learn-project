import React from 'react';
import {
  Shield, Swords, Search,
  ChevronDown, Home, BookOpen, FlaskConical,
  Wrench, FileText, Users, Map, Sun, Moon
} from 'lucide-react';
import avatarImg from '../assets/cyber-hacker-red.jpg';

export default function Header({ view = 'landing', onBack }) {
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

  const navItems = [
    { label: 'Home',      icon: Home,        href: '#home',      isBack: true },
    { label: 'Courses',   icon: BookOpen,    href: '#courses' },
    { label: 'Labs',      icon: FlaskConical,href: '#labs' },
    { label: 'Roadmaps',  icon: Map,         href: '#roadmaps' },
    { label: 'Tools',     icon: Wrench,      href: '#tools' },
    { label: 'Resources', icon: FileText,    href: '#resources' },
    { label: 'Community', icon: Users,       href: '#community' },
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

      {/* Nav */}
      <nav className="nav-capsule">
        {navItems.map((item, idx) => {
          const NavIcon = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              className="nav-link"
              onClick={(e) => { if (item.isBack) { e.preventDefault(); onBack(); } }}
            >
              <NavIcon size={14} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Right Controls */}
      <div className="nav-controls">

        {/* Search */}
        <button className="nav-icon-btn" aria-label="Search"><Search size={16} /></button>



        {/* Profile */}
        <div className="profile-badge-card">
          <div className="avatar-wrapper" style={{ borderColor: getThemeColor() }}>
            <img src={avatarImg} alt="Avatar" className="profile-avatar-img" />
          </div>
          <div className="profile-text">
            <span className="profile-name">Ashish N.</span>
            <span className="profile-level">Level 12</span>
          </div>
          <ChevronDown size={14} style={{ marginLeft: '4px' }} />
        </div>
      </div>
    </header>
  );
}
