import React, { useState } from 'react';
import Sidebar from '../../components/layout/Sidebar';
import Header from '../../components/layout/Header';
import StatCard from '../../components/cards/StatCard';
import ChartCard from '../../components/cards/ChartCard';
import {
  studentStats, todaysTimetable, recentStudentAssignments,
  noticeBoard, upcomingExams, performanceData, studentSidebarItems
} from '../../data/studentData';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const subjectColors = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'];

const statusBadge = (status) => {
  if (status === 'Submitted') return 'badge badge-green';
  if (status === 'Not Submitted') return 'badge badge-red';
  if (status === 'Ongoing') return 'badge badge-orange';
  return 'badge badge-gray';
};

const noticeBadge = (type) => {
  if (type === 'event') return { bg: '#EEF2FF', color: '#4338CA' };
  if (type === 'holiday') return { bg: '#FEF3C7', color: '#D97706' };
  return { bg: '#F0FDF4', color: '#059669' };
};

const StudentDashboard = ({ onLogout }) => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar
        items={studentSidebarItems}
        role="student"
        activeItem={activeItem}
        onItemClick={setActiveItem}
        onLogout={onLogout}
        isMobileOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
      <div className="main-content">
        <Header
          role="student"
          userName="Aarav Sharma"
          userRole="Class 10A"
          searchPlaceholder="Search assignments, study material..."
          onMenuClick={() => setIsMobileOpen(true)}
          extraInfo="Academic Year: 2025-26"
        />
        <div className="page-content">
          <div className="page-heading">
            <h1>Dashboard</h1>
            <p>Welcome back, Aarav! Keep learning and growing.</p>
          </div>

          {/* Stats */}
          <div className="student-stats-grid">
            {studentStats.map(stat => (
              <StatCard key={stat.id} {...stat} color="purple" />
            ))}
          </div>

          {/* Main Grid */}
          <div className="student-main-grid">
            {/* Today's Timetable */}
            <ChartCard title="Today's Timetable" actionLabel="Full Timetable">
              <div className="timetable-list">
                {todaysTimetable.map(item => (
                  <div key={item.id} className="timetable-item" style={{ borderLeftColor: '#7C3AED' }}>
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
                {recentStudentAssignments.map(assign => (
                  <div key={assign.id} className="assignment-item" style={{ borderLeftColor: '#7C3AED' }}>
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

            {/* Notice Board */}
            <ChartCard title="Notice Board" actionLabel="View All">
              <div className="notice-list">
                {noticeBoard.map(notice => {
                  const nb = noticeBadge(notice.type);
                  return (
                    <div key={notice.id} className="notice-item" style={{ borderLeftColor: '#7C3AED' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <h4>{notice.title}</h4>
                        <span style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '9999px', background: nb.bg, color: nb.color, fontWeight: '600' }}>
                          {notice.type}
                        </span>
                      </div>
                      <p>{notice.description}</p>
                      <div className="notice-date">{notice.date}</div>
                    </div>
                  );
                })}
              </div>
            </ChartCard>
          </div>

          {/* Bottom Row */}
          <div className="student-bottom-grid">
            {/* Performance Overview */}
            <ChartCard title="Performance Overview" subtitle="Top Term ↓">
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={performanceData} barSize={24}>
                  <XAxis dataKey="subject" tick={{ fontSize: 10, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(v) => [`${v}%`, 'Score']}
                  />
                  <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                    {performanceData.map((_, idx) => (
                      <Cell key={idx} fill={subjectColors[idx % subjectColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Quick Links */}
            <ChartCard title="Quick Links" actionLabel={null}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {[
                  { label: 'My Timetable', emoji: '📅' },
                  { label: 'Study Material', emoji: '📚' },
                  { label: 'Fee Payment', emoji: '💳' },
                  { label: 'Results', emoji: '🏆' },
                  { label: 'Library', emoji: '📖' },
                  { label: 'Transport', emoji: '🚌' },
                ].map((ql, idx) => (
                  <button key={idx} className="quick-action-btn" style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: '8px', padding: '10px 12px' }}>
                    <span style={{ fontSize: '16px' }}>{ql.emoji}</span>
                    <span style={{ fontSize: '12px' }}>{ql.label}</span>
                  </button>
                ))}
              </div>
            </ChartCard>

            {/* Upcoming Exams */}
            <ChartCard title="Upcoming Exams" actionLabel="View All">
              <div className="exam-list">
                {upcomingExams.map(exam => (
                  <div key={exam.id} className="exam-item">
                    <div>
                      <h4>{exam.subject}</h4>
                      <p>{exam.time}</p>
                    </div>
                    <span className="exam-date">{exam.date}</span>
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
