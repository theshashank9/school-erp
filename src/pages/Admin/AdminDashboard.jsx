import React, { useState } from 'react';
import Sidebar from '../../components/layout/Sidebar';
import Header from '../../components/layout/Header';
import StatCard from '../../components/cards/StatCard';
import ChartCard from '../../components/cards/ChartCard';
import {
  adminStats, studentStatisticsData, attendanceOverviewData,
  upcomingEvents, recentActivities, feeCollectionData, sidebarNavItems
} from '../../data/adminData';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend, CartesianGrid
} from 'recharts';
import {
  UserPlus, IndianRupee, Bell
} from 'lucide-react';

const activityIcons = { UserPlus, IndianRupee, Bell };

const CustomDonutLabel = ({ cx, cy }) => (
  <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
    <tspan x={cx} dy="-8" fontSize="20" fontWeight="700" fill="#0F172A">98%</tspan>
    <tspan x={cx} dy="18" fontSize="11" fill="#94A3B8">Overall</tspan>
  </text>
);

const AdminDashboard = ({ onLogout }) => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar
        items={sidebarNavItems}
        role="admin"
        activeItem={activeItem}
        onItemClick={setActiveItem}
        onLogout={onLogout}
        isMobileOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
      <div className="main-content">
        <Header
          role="admin"
          userName="Admin"
          userRole="Super Admin"
          searchPlaceholder="Search students, teachers, classes..."
          onMenuClick={() => setIsMobileOpen(true)}
          extraInfo="Academic Year: 2025-26"
        />
        <div className="page-content">
          {/* Page Heading */}
          <div className="page-heading">
            <h1>Dashboard</h1>
            <p>Welcome back, Admin! Here's what's happening in your school.</p>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            {adminStats.map(stat => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>

          {/* Charts Row */}
          <div className="charts-grid">
            {/* Student Statistics Bar Chart */}
            <ChartCard title="Student Statistics" subtitle="This Year ↓" actionLabel="View All">
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={studentStatisticsData} barSize={20}>
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '12px' }}
                    cursor={{ fill: 'rgba(37,99,235,0.05)' }}
                  />
                  <Bar dataKey="students" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p style={{ fontSize: '11px', color: '#94A3B8', marginTop: '4px' }}>
                Admin: Aarav Sharma · Class 10A · Sep 2025
              </p>
            </ChartCard>

            {/* Attendance Donut */}
            <ChartCard title="Attendance Overview" subtitle="This Month ↓" actionLabel="View All">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <ResponsiveContainer width={120} height={120}>
                  <PieChart>
                    <Pie
                      data={attendanceOverviewData}
                      cx="50%"
                      cy="50%"
                      innerRadius={38}
                      outerRadius={55}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                      labelLine={false}
                      label={CustomDonutLabel}
                    >
                      {attendanceOverviewData.map((entry, idx) => (
                        <Cell key={idx} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="donut-legend">
                  {attendanceOverviewData.map((item, idx) => (
                    <div key={idx} className="donut-legend-item">
                      <span className="donut-legend-label">
                        <span className="donut-legend-dot" style={{ background: item.color }} />
                        {item.name}
                      </span>
                      <span className="donut-legend-value">{item.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ChartCard>

            {/* Upcoming Events */}
            <ChartCard title="Upcoming Events" actionLabel="View All">
              <div className="event-list">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="event-item">
                    <div className="event-dot" style={{ background: event.color }} />
                    <div className="event-info">
                      <h4>{event.title}</h4>
                      <p>{event.date}</p>
                    </div>
                    <span className="event-time">{event.time}</span>
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>

          {/* Bottom Row */}
          <div className="bottom-grid">
            {/* Recent Activities */}
            <ChartCard title="Recent Activities" actionLabel={null}>
              <div className="activity-list">
                {recentActivities.map(activity => {
                  const IconComp = activityIcons[activity.icon];
                  return (
                    <div key={activity.id} className="activity-item">
                      <div
                        className="activity-icon"
                        style={{ background: activity.color + '18' }}
                      >
                        {IconComp && <IconComp size={16} color={activity.color} />}
                      </div>
                      <div className="activity-info">
                        <h4>{activity.title}</h4>
                        <p>{activity.description}</p>
                      </div>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  );
                })}
              </div>
            </ChartCard>

            {/* Fee Collection */}
            <ChartCard title="Fee Collection" actionLabel={null}>
              <ResponsiveContainer width="100%" height={160}>
                <LineChart data={feeCollectionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(v) => [`₹${(v / 100).toFixed(0)}L`, '']}
                  />
                  <Legend
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="collected"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ r: 3, fill: '#3B82F6' }}
                    name="Collected"
                  />
                  <Line
                    type="monotone"
                    dataKey="pending"
                    stroke="#F59E0B"
                    strokeWidth={2}
                    dot={{ r: 3, fill: '#F59E0B' }}
                    strokeDasharray="4 4"
                    name="Pending"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
