import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Bell, Search, User } from 'lucide-react';

export default function Navbar({ onToggleSidebar, settings }) {
  const location = useLocation();
  const [showNotificationToast, setShowNotificationToast] = useState(false);

  // Derive title from current path
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Dashboard';
    if (path === '/candidates') return 'Candidate Pipeline';
    if (path.startsWith('/candidates/')) return 'Candidate Profile & Screening';
    if (path === '/interviews') return 'Interview Scheduling';
    if (path === '/settings') return 'Recruiter Settings';
    return 'ScreenSmart Copilot';
  };

  const handleNotificationClick = () => {
    setShowNotificationToast((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <button
          type="button"
          className="menu-toggle-btn"
          onClick={onToggleSidebar}
          aria-label="Toggle Navigation Menu"
        >
          <Menu size={20} />
        </button>
        <div>
          <h1 className="navbar-page-title">{getPageTitle()}</h1>
        </div>
      </div>

      <div className="navbar-right">
        <button
          type="button"
          className="navbar-icon-btn"
          onClick={handleNotificationClick}
          aria-label="View notifications"
          title="Notifications"
        >
          <Bell size={18} />
          <span className="notification-dot" />
        </button>

        {showNotificationToast && (
          <div
            style={{
              position: 'absolute',
              top: '64px',
              right: '80px',
              background: '#fff',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-md)',
              padding: '14px 18px',
              width: '280px',
              zIndex: 50
            }}
          >
            <div style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px', color: 'var(--color-text-main)' }}>
              Notifications (1 Unread)
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', lineHeight: '1.4' }}>
              Elena Rostova's Technical Deep Dive interview is scheduled for Oct 15 at 10:30 AM.
            </div>
          </div>
        )}

        <Link to="/settings" className="navbar-profile" title="View Profile & Settings">
          <div className="profile-avatar-fallback">
            {settings?.fullName ? settings.fullName.charAt(0) : 'R'}
          </div>
          <div className="profile-info">
            <span className="profile-name">{settings?.fullName || 'Rachel Adams'}</span>
            <span className="profile-role">{settings?.roleTitle || 'Lead Talent Acquisition'}</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
