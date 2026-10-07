export const adminStats = [
  { id: 1, title: 'Total Students', value: '1,248', icon: 'Users', change: '+12%', changeType: 'positive', color: 'blue', bg: '#EFF6FF' },
  { id: 2, title: 'Total Teachers', value: '102', icon: 'GraduationCap', change: '+5%', changeType: 'positive', color: 'green', bg: '#F0FDF4' },
  { id: 3, title: 'Total Classes', value: '32', icon: 'BookOpen', change: '+3%', changeType: 'positive', color: 'orange', bg: '#FFF7ED' },
  { id: 4, title: 'Attendance Rate', value: '98%', icon: 'CheckCircle', change: '+2%', changeType: 'positive', color: 'teal', bg: '#F0FDFA' },
  { id: 5, title: 'Total Fee Collection', value: '₹12,45,000', icon: 'IndianRupee', change: '+16%', changeType: 'positive', color: 'emerald', bg: '#ECFDF5' },
  { id: 6, title: 'Pending Payments', value: '256', icon: 'AlertCircle', change: '+6%', changeType: 'negative', color: 'red', bg: '#FEF2F2' },
  { id: 7, title: 'Upcoming Events', value: '18', icon: 'Calendar', change: '+20%', changeType: 'positive', color: 'purple', bg: '#FAF5FF' },
  { id: 8, title: 'New Admissions', value: '12', icon: 'UserPlus', change: '+20%', changeType: 'positive', color: 'indigo', bg: '#EEF2FF' },
];

export const studentStatisticsData = [
  { month: 'Jan', students: 1100 },
  { month: 'Feb', students: 1150 },
  { month: 'Mar', students: 1180 },
  { month: 'Apr', students: 1160 },
  { month: 'May', students: 1200 },
  { month: 'Jun', students: 1220 },
  { month: 'Jul', students: 1190 },
  { month: 'Aug', students: 1248 },
  { month: 'Sep', students: 1230 },
];

export const attendanceOverviewData = [
  { name: 'Present', value: 1223, color: '#3B82F6' },
  { name: 'Absent', value: 25, color: '#F59E0B' },
  { name: 'Leave', value: 12, color: '#EF4444' },
];

export const upcomingEvents = [
  { id: 1, title: 'PTM - Class 10', date: '9 Sep 2025', time: '09:00 AM', color: '#EF4444' },
  { id: 2, title: 'Science Exhibition', date: '12 Sep 2025', time: '10:00 AM', color: '#3B82F6' },
  { id: 3, title: 'Sports Day', date: '20 Sep 2025', time: '08:00 AM', color: '#10B981' },
  { id: 4, title: 'Monthly Exam', date: '25 Sep 2025', time: '09:00 AM', color: '#8B5CF6' },
];

export const recentActivities = [
  { id: 1, type: 'admission', icon: 'UserPlus', color: '#3B82F6', title: 'New student admission', description: 'Aarav Sharma - Class 10A', time: '2 hours ago' },
  { id: 2, type: 'payment', icon: 'IndianRupee', color: '#10B981', title: 'Fee payment received', description: '₹15,000 - Class 10', time: '4 hours ago' },
  { id: 3, type: 'notice', icon: 'Bell', color: '#F59E0B', title: 'New notice published', description: 'Annual Function 2025', time: '5 hours ago' },
];

export const feeCollectionData = [
  { month: 'Feb', collected: 8000, pending: 2000 },
  { month: 'Mar', collected: 9000, pending: 1500 },
  { month: 'Apr', collected: 8500, pending: 2500 },
  { month: 'May', collected: 10000, pending: 1800 },
  { month: 'Jun', collected: 9500, pending: 2200 },
  { month: 'Jul', collected: 11000, pending: 1200 },
  { month: 'Aug', collected: 12450, pending: 800 },
  { month: 'Sep', collected: 11800, pending: 1000 },
];

export const sidebarNavItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'students', label: 'Students', icon: 'Users' },
  { id: 'teachers', label: 'Teachers & Staff', icon: 'GraduationCap' },
  { id: 'admissions', label: 'Admissions', icon: 'UserPlus' },
  { id: 'classes', label: 'Classes & Sections', icon: 'BookOpen' },
  { id: 'subjects', label: 'Subjects', icon: 'BookMarked' },
  { id: 'academic', label: 'Academic Year', icon: 'Calendar' },
  { id: 'timetable', label: 'Timetable', icon: 'Clock' },
  { id: 'attendance', label: 'Attendance', icon: 'CheckCircle' },
  { id: 'exams', label: 'Exams & Results', icon: 'FileText' },
  { id: 'fees', label: 'Fees & Payments', icon: 'IndianRupee' },
  { id: 'payroll', label: 'Payroll', icon: 'CreditCard' },
  { id: 'library', label: 'Library', icon: 'Library' },
  { id: 'transport', label: 'Transport', icon: 'Bus' },
  { id: 'notices', label: 'Notices & Events', icon: 'Megaphone' },
  { id: 'reports', label: 'Reports', icon: 'BarChart2' },
  { id: 'settings', label: 'Settings', icon: 'Settings' },
];
