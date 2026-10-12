import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  CalendarClock, 
  Settings as SettingsIcon, 
  Sparkles, 
  X,
  FileCheck2
} from 'lucide-react';

export default function Sidebar({ isOpen, onClose, candidatesCount = 8, interviewsCount = 4 }) {
  const navItems = [
    {
      to: '/',
      label: 'Dashboard',
      icon: LayoutDashboard,
      badge: null
    },
    {
      to: '/candidates',
      label: 'Candidates',
      icon: Users,
      badge: candidatesCount
    },
    {
      to: '/interviews',
      label: 'Interviews',
      icon: CalendarClock,
      badge: interviewsCount
    },
    {
      to: '/settings',
      label: 'Settings',
      icon: SettingsIcon,
      badge: null
    }
  ];

  return (
    <>
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <NavLink to="/" className="brand-link" onClick={onClose}>
            <img src="/logo.svg" alt="ScreenSmart Logo" className="brand-logo-img" />
            <div className="brand-text-block">
              <span className="brand-title">
                ScreenSmart
                <span className="brand-tag">Copilot</span>
              </span>
              <span className="brand-subtitle">Resume & Interview ATS</span>
            </div>
          </NavLink>
          {isOpen && (
            <button 
              className="navbar-icon-btn" 
              onClick={onClose}
              style={{ display: 'flex' }}
              aria-label="Close sidebar"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <nav className="sidebar-nav">
          <span className="nav-section-title">Navigation</span>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={onClose}
              >
                <Icon size={18} />
                <span>{item.label}</span>
                {item.badge !== null && (
                  <span className="nav-badge">{item.badge}</span>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="copilot-card">
            <div className="copilot-card-header">
              <Sparkles size={16} />
              <span>AI Screening Engine</span>
            </div>
            <p className="copilot-card-desc">
              Resume parsing and candidate scoring are operating in live demo mode.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
