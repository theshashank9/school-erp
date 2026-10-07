import React from 'react';
import { Search, Bell, MessageSquare, Menu, Calendar } from 'lucide-react';

const roleColors = {
  admin: '#2563EB',
  teacher: '#059669',
  student: '#7C3AED',
  parent: '#EA580C',
};

const Header = ({
  role,
  userName,
  userRole,
  searchPlaceholder = 'Search students, teachers, classes...',
  onMenuClick,
  extraInfo,
}) => {
  const accentColor = roleColors[role] || '#2563EB';
  const initials = userName ? userName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() : 'A';
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <header className="header">
      <button className="mobile-menu-btn" onClick={onMenuClick}>
        <Menu size={18} />
      </button>
      <div className="header-search">
        <Search size={15} className="header-search-icon" />
        <input type="text" placeholder={searchPlaceholder} />
      </div>
      <div className="header-spacer" />
      <div className="header-actions">
        <div className="header-date-badge">
          <Calendar size={12} />
          {dateStr}
          {extraInfo && <span style={{ marginLeft: 8, color: '#94A3B8' }}>| {extraInfo}</span>}
        </div>
        <div className="header-divider" />
        <button className="header-icon-btn">
          <Bell size={16} />
          <span className="header-badge">3</span>
        </button>
        <button className="header-icon-btn">
          <MessageSquare size={16} />
          <span className="header-badge">5</span>
        </button>
        <div className="header-divider" />
        <div className="header-profile">
          <div className="header-avatar" style={{ background: accentColor }}>
            {initials}
          </div>
          <div className="header-profile-info">
            <h4>{userName}</h4>
            <span>{userRole}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
