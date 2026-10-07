import React, { useState } from 'react';
import Sidebar from '../../components/layout/Sidebar';
import Header from '../../components/layout/Header';
import StatCard from '../../components/cards/StatCard';
import ChartCard from '../../components/cards/ChartCard';
import {
  teacherStats, todaysClasses, recentAssignments, attendanceData,
  todaySchedule, teacherSidebarItems
} from '../../data/teacherData';
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
import {
  ClipboardList, PlusCircle, Upload, Users
} from 'lucide-react';

const classColors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];
const quickActions = [
  { icon: ClipboardList, label: 'Take Attendance', color: '#3B82F6', bg: '#EFF6FF' },
  { icon: PlusCircle, label: 'Create Assignment', color: '#10B981', bg: '#F0FDF4' },
  { icon: Upload, label: 'Upload Material', color: '#F59E0B', bg: '#FEF3C7' },
  { icon: Users, label: 'View Students', color: '#8B5CF6', bg: '#FAF5FF' },
];

const TeacherDashboard = ({ onLogout }) => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const attendanceRate = Math.round((attendanceData.find(d => d.name === 'Present')?.value || 0) /
    attendanceData.reduce((a, b) => a + b.value, 0) * 100);

  return (
    <div className="app-layout">
      <Sidebar
        items={teacherSidebarItems}
        role="teacher"
        activeItem={activeItem}
        onItemClick={setActiveItem}
        onLogout={onLogout}
        isMobileOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
      <div className="main-content">
        <Header
          role="teacher"
          userName="Mr. Sharma"
          userRole="Mathematics Teacher"
          searchPlaceholder="Search students, classes, assignments..."
          onMenuClick={() => setIsMobileOpen(true)}
          extraInfo="Academic Year: 2025-26"
        />
        <div className="page-content">
          <div className="page-heading">
            <h1>Dashboard</h1>
            <p>Welcome back, Mr. Sharma! Here's your overview.</p>
          </div>

          {/* Stats */}
          <div className="teacher-cards-grid">
            {teacherStats.map(stat => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>

          {/* Main Grid */}
          <div className="teacher-main-grid">
            {/* Today's Classes */}
            <ChartCard title="Today's Classes" actionLabel="View Timetable">
              <div className="class-list">
                {todaysClasses.map((cls, idx) => (
                  <div key={cls.id} className="class-item">
                    <div className="class-color-bar" style={{ background: classColors[idx % classColors.length] }} />
                    <div className="class-info">
                      <h4>{cls.class}</h4>
                      <p>{cls.time} · {cls.room}</p>
                    </div>
                    <span className="badge badge-blue">{cls.status}</span>
                  </div>
                ))}
              </div>
            </ChartCard>

            {/* Recent Assignments */}
            <ChartCard title="Recent Assignments" actionLabel="View All">
              <div className="assignment-list">
                {recentAssignments.map(assign => {
                  const pct = assign.total ? Math.round((assign.submitted / assign.total) * 100) : 0;
                  return (
                    <div key={assign.id} className="assignment-item">
                      <h4>{assign.title}</h4>
                      <div className="assign-meta">{assign.class}</div>
                      <div className="assign-due">{assign.dueDate} · {assign.submitted}/{assign.total} Submitted</div>
                      <div className="assign-progress">
                        <div className="assign-progress-bar" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </ChartCard>

            {/* Attendance Overview */}
            <ChartCard title="Attendance Overview" subtitle="This Month">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ResponsiveContainer width={130} height={130}>
                    <PieChart>
                      <Pie
                        data={attendanceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={42}
                        outerRadius={58}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                      >
                        {attendanceData.map((entry, idx) => (
                          <Cell key={idx} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div style={{ position: 'absolute', textAlign: 'center' }}>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#0F172A' }}>{attendanceRate}%</div>
                    <div style={{ fontSize: '10px', color: '#94A3B8' }}>This Month</div>
                  </div>
                </div>
                <div className="donut-legend" style={{ width: '100%', marginTop: '8px' }}>
                  {attendanceData.map((item, idx) => (
                    <div key={idx} className="donut-legend-item">
                      <span className="donut-legend-label">
                        <span className="donut-legend-dot" style={{ background: item.color }} />
                        {item.name}
                      </span>
                      <span className="donut-legend-value">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ChartCard>
          </div>

          {/* Bottom Row */}
          <div className="bottom-grid">
            {/* Quick Actions */}
            <ChartCard title="Quick Actions" actionLabel={null}>
              <div className="quick-actions-grid">
                {quickActions.map((qa, idx) => (
                  <button key={idx} className="quick-action-btn">
                    <div className="quick-action-icon" style={{ background: qa.bg }}>
                      <qa.icon size={18} color={qa.color} />
                    </div>
                    {qa.label}
                  </button>
                ))}
              </div>
            </ChartCard>

            {/* Today's Schedule */}
            <ChartCard title="Today's Schedule" actionLabel="View All">
              <div className="schedule-list">
                {todaySchedule.map(item => (
                  <div key={item.id} className="schedule-item">
                    <span className="schedule-time">{item.startTime}</span>
                    <div className="schedule-info">
                      <h4>{item.class}</h4>
                      {item.subject && <p>{item.subject} · {item.endTime}</p>}
                    </div>
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

export default TeacherDashboard;
