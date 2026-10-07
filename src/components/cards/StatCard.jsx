import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import {
  Users, GraduationCap, BookOpen, CheckCircle, IndianRupee, AlertCircle,
  Calendar, UserPlus, FileText, Award, Bell, Phone, Download,
  MessageSquare, BarChart2, Bus, CreditCard
} from 'lucide-react';

const iconMap = {
  Users, GraduationCap, BookOpen, CheckCircle, IndianRupee, AlertCircle,
  Calendar, UserPlus, FileText, Award, Bell, Phone, Download,
  MessageSquare, BarChart2, Bus, CreditCard
};

const colorMap = {
  blue: { icon: '#2563EB', bg: '#EFF6FF' },
  green: { icon: '#059669', bg: '#F0FDF4' },
  orange: { icon: '#EA580C', bg: '#FFF7ED' },
  teal: { icon: '#0D9488', bg: '#F0FDFA' },
  emerald: { icon: '#10B981', bg: '#ECFDF5' },
  red: { icon: '#DC2626', bg: '#FEF2F2' },
  purple: { icon: '#7C3AED', bg: '#FAF5FF' },
  indigo: { icon: '#4338CA', bg: '#EEF2FF' },
};

const StatCard = ({ title, value, icon, change, changeType, color = 'blue', bg }) => {
  const IconComp = iconMap[icon];
  const colors = colorMap[color] || colorMap.blue;

  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className="stat-icon" style={{ background: bg || colors.bg }}>
          {IconComp && <IconComp size={18} color={colors.icon} />}
        </div>
        {change && (
          <span className={`stat-change ${changeType === 'positive' ? 'positive' : 'negative'}`}>
            {changeType === 'positive' ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
            {change}
          </span>
        )}
      </div>
      <div>
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default StatCard;
