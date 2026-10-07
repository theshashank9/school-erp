import React, { useState } from 'react';
import Sidebar from '../../components/layout/Sidebar';
import Header from '../../components/layout/Header';
import StatCard from '../../components/cards/StatCard';
import ChartCard from '../../components/cards/ChartCard';
import {
  parentStats, childProfile, parentTodaysTimetable, parentRecentAssignments,
  latestNotices, parentAttendanceData, feeStatus, quickActions, parentSidebarItems
} from '../../data/parentData';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { Phone, Calendar, Award, Download, User, Hash, Clock } from 'lucide-react';

const qaIcons = { Phone, Calendar, Award, Download };
const qaColors = {
  'Contact Teacher': { color: '#3B82F6', bg: '#EFF6FF' },
  'Apply Leave': { color: '#F59E0B', bg: '#FEF3C7' },
  'View Results': { color: '#10B981', bg: '#F0FDF4' },
  'Download Documents': { color: '#8B5CF6', bg: '#FAF5FF' },
};

const statusBadge = (status) => {
  if (status === 'Submitted') return 'badge badge-green';
  if (status === 'Not Submitted') return 'badge badge-red';
  if (status === 'Ongoing') return 'badge badge-orange';
  return 'badge badge-gray';
};

const feeDonutData = [
  { name: 'Paid', value: feeStatus.paid, color: '#EA580C' },
  { name: 'Pending', value: feeStatus.pending || 1, color: '#FED7AA' },
];

const ParentDashboard = ({ onLogout }) => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar
        items={parentSidebarItems}
        role="parent"
        activeItem={activeItem}
        onItemClick={setActiveItem}
        onLogout={onLogout}
        isMobileOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
      <div className="main-content">
        <Header
          role="parent"
          userName="Aarav's Parent"
          userRole="Parent"
          searchPlaceholder="Search your child's information..."
          onMenuClick={() => setIsMobileOpen(true)}
          extraInfo="Academic Year: 2025-26"
        />
        <div className="page-content">
          <div className="page-heading">
            <h1>Dashboard</h1>
            <p>Welcome back! Here's Aarav's progress.</p>
          </div>

          {/* Child Profile Card */}
          <div className="child-profile-card">
            <div className="child-avatar">AS</div>
            <div className="child-info">
              <h2>{childProfile.name}</h2>
              <p>{childProfile.class}</p>
              <div className="child-meta">
                <span><Hash size={11} /> Roll No: {childProfile.rollNo}</span>
                <span><User size={11} /> Age: {childProfile.age}</span>
              </div>
            </div>
            <button className="view-profile-btn">View Profile</button>
          </div>

          {/* Stats */}
          <div className="parent-stats-grid">
            {parentStats.map(stat => (
              <StatCard key={stat.id} {...stat} color="orange" />
            ))}
          </div>

          {/* Main Grid */}
          <div className="student-main-grid">
            {/* Today's Timetable */}
            <ChartCard title="Today's Timetable" actionLabel="View All">
              <div className="timetable-list">
                {parentTodaysTimetable.map(item => (
                  <div key={item.id} className="timetable-item" style={{ borderLeftColor: '#EA580C' }}>
                    <span className="timetable-time">{item.time}</span>
                    <div className="timetable-info">
                      <h4>{item.subject}</h4>
                      <p>{item.teacher} · {item.room}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ChartCard>

            {/* Recent Assignments */}
            <ChartCard title="Recent Assignments" actionLabel="View All">
              <div className="assignment-list">
                {parentRecentAssignments.map(assign => (
                  <div key={assign.id} className="assignment-item" style={{ borderLeftColor: '#EA580C' }}>
                    <h4>{assign.title}</h4>
                    <div className="assign-meta">{assign.subject}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '6px' }}>
                      <span className="assign-due">{assign.dueDate}</span>
                      <span className={statusBadge(assign.status)}>{assign.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ChartCard>

            {/* Latest Notice */}
            <ChartCard title="Latest Notice" actionLabel="View All">
              <div className="notice-list">
                {latestNotices.map(notice => (
                  <div key={notice.id} className="notice-item" style={{ borderLeftColor: '#EA580C' }}>
                    <h4>{notice.title}</h4>
                    <p>{notice.description}</p>
                    <div className="notice-date">{notice.date}</div>
                    <button style={{
                      marginTop: '6px', fontSize: '11px', color: '#EA580C',
                      background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontWeight: '500'
                    }}>Read More →</button>
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>

          {/* Bottom Row */}
          <div className="student-bottom-grid">
            {/* Attendance Overview */}
            <ChartCard title="Attendance Overview" subtitle="This Month ↓">
              <ResponsiveContainer width="100%" height={140}>
                <BarChart data={parentAttendanceData} barSize={20}>
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '12px' }}
                  />
                  <Bar dataKey="present" fill="#EA580C" radius={[4, 4, 0, 0]} name="Present" />
                  <Bar dataKey="absent" fill="#FED7AA" radius={[4, 4, 0, 0]} name="Absent" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Fee Status */}
            <ChartCard title="Fee Status" actionLabel={null}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ position: 'relative', display: 'inline-flex' }}>
                  <ResponsiveContainer width={110} height={110}>
                    <PieChart>
                      <Pie
                        data={feeDonutData}
                        cx="50%"
                        cy="50%"
                        innerRadius={35}
                        outerRadius={50}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                      >
                        {feeDonutData.map((entry, idx) => (
                          <Cell key={idx} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '16px', fontWeight: '700', color: '#0F172A' }}>100%</span>
                    <span style={{ fontSize: '10px', color: '#94A3B8' }}>Paid</span>
                  </div>
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {[
                    { label: 'Total Fees', value: `₹${feeStatus.totalFees.toLocaleString()}`, color: '#94A3B8' },
                    { label: 'Paid', value: `₹${feeStatus.paid.toLocaleString()}`, color: '#EA580C' },
                    { label: 'Pending', value: `₹${feeStatus.pending}`, color: '#FED7AA' },
                  ].map((f, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                      <span style={{ color: '#64748B' }}>{f.label}</span>
                      <span style={{ fontWeight: '600', color: f.color }}>{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ChartCard>

            {/* Quick Actions */}
            <ChartCard title="Quick Actions" actionLabel={null}>
              <div className="parent-quick-actions">
                {quickActions.map(qa => {
                  const IconComp = qaIcons[qa.icon];
                  const style = qaColors[qa.label] || { color: qa.color, bg: '#F1F5F9' };
                  return (
                    <button key={qa.id} className="parent-quick-action" style={{ color: style.color }}>
                      <div className="parent-quick-icon" style={{ background: style.bg }}>
                        {IconComp && <IconComp size={14} color={style.color} />}
                      </div>
                      {qa.label}
                    </button>
                  );
                })}
              </div>
            </ChartCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
