import React from 'react';
import {
  LayoutDashboard, Users, GraduationCap, UserPlus, BookOpen, BookMarked,
  Calendar, Clock, CheckCircle, FileText, IndianRupee, CreditCard,
  Library, Bus, Megaphone, BarChart2, Settings, MessageSquare, User,
  Award, LogOut, GraduationCap as GradCap, ChevronRight
} from 'lucide-react';

const iconMap = {
  LayoutDashboard, Users, GraduationCap, UserPlus, BookOpen, BookMarked,
  Calendar, Clock, CheckCircle, FileText, IndianRupee, CreditCard,
  Library, Bus, Megaphone, BarChart2, Settings, MessageSquare, User,
  Award, LogOut, GradCap, ChevronRight
};

const roleColors = {
  admin: '#2563EB',
  teacher: '#059669',
  student: '#7C3AED',
  parent: '#EA580C',
};

const Sidebar = ({ items, role, activeItem, onItemClick, onLogout, isMobileOpen, onClose }) => {
  const accentColor = roleColors[role] || '#2563EB';

  return (
    <>
      {isMobileOpen && (
        <div className="sidebar-overlay" onClick={onClose} />
      )}
      <aside className={`sidebar${isMobileOpen ? ' mobile-open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon" style={{ background: accentColor }}>
            <GradCap size={18} color="#fff" />
          </div>
          <div className="sidebar-logo-text">
            <h2>EduSphere</h2>
            <span>School ERP</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {items.map((item) => {
            const IconComp = iconMap[item.icon];
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                className={`sidebar-nav-item${isActive ? ' active' : ''}`}
                style={isActive ? { background: accentColor } : {}}
                onClick={() => { onItemClick(item.id); onClose?.(); }}
              >
                {IconComp && <IconComp size={15} className="sidebar-icon" />}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <button className="sidebar-logout" onClick={onLogout}>
            <LogOut size={15} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
