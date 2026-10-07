export const parentStats = [
  { id: 1, title: 'Attendance', value: '92%', icon: 'CheckCircle', color: 'orange', bg: '#FFF7ED' },
  { id: 2, title: 'Current Grade', value: 'A', icon: 'Award', color: 'green', bg: '#F0FDF4' },
  { id: 3, title: 'Pending Fees', value: '₹0', icon: 'IndianRupee', color: 'emerald', bg: '#ECFDF5' },
];

export const childProfile = {
  name: 'Aarav Sharma',
  class: 'Class 10A',
  rollNo: '12',
  age: '15 years',
  avatar: null,
};

export const parentTodaysTimetable = [
  { id: 1, time: '08:00 AM', subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 10A' },
  { id: 2, time: '09:00 AM', subject: 'Science', teacher: 'Mrs. Patel', room: 'Room 10A' },
  { id: 3, time: '10:00 AM', subject: 'English', teacher: 'Ms. Singh', room: 'Room 10A' },
  { id: 4, time: '11:00 AM', subject: 'Social Science', teacher: 'Mr. Kumar', room: 'Room 10A' },
  { id: 5, time: '12:00 PM', subject: 'Computer', teacher: 'Mr. Mehta', room: 'Room 10A' },
];

export const parentRecentAssignments = [
  { id: 1, title: 'Science Project', subject: 'Science', dueDate: 'Due: 10 Sep 2025', status: 'Ongoing' },
  { id: 2, title: 'Maths Worksheet', subject: 'Mathematics', dueDate: 'Due: 8 Sep 2025', status: 'Not Submitted' },
  { id: 3, title: 'English Essay', subject: 'English', dueDate: 'Due: 12 Sep 2025', status: 'Submitted' },
];

export const latestNotices = [
  { id: 1, title: 'Annual Function 2025', date: '5 Sep 2025', description: 'Annual Function will be held on 15 Dec 2025. All students must participate.' },
  { id: 2, title: 'PTM Schedule', date: '1 Sep 2025', description: 'Parent Teacher Meeting will be held on 20 Sep 2025.' },
];

export const parentAttendanceData = [
  { month: 'Jun', present: 22, absent: 2 },
  { month: 'Jul', present: 24, absent: 1 },
  { month: 'Aug', present: 23, absent: 2 },
  { month: 'Sep', present: 20, absent: 1 },
];

export const feeStatus = {
  totalFees: 45000,
  paid: 45000,
  pending: 0,
  percentage: 100,
};

export const quickActions = [
  { id: 1, label: 'Contact Teacher', icon: 'Phone', color: '#3B82F6' },
  { id: 2, label: 'Apply Leave', icon: 'Calendar', color: '#F59E0B' },
  { id: 3, label: 'View Results', icon: 'Award', color: '#10B981' },
  { id: 4, label: 'Download Documents', icon: 'Download', color: '#8B5CF6' },
];

export const parentSidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'childprofile', label: 'Child Profile', icon: 'User' },
  { id: 'attendance', label: 'Attendance', icon: 'CheckCircle' },
  { id: 'assignments', label: 'Assignments', icon: 'FileText' },
  { id: 'results', label: 'Results', icon: 'Award' },
  { id: 'fees', label: 'Fees & Payments', icon: 'IndianRupee' },
  { id: 'timetable', label: 'Timetable', icon: 'Clock' },
  { id: 'communication', label: 'Teacher Communication', icon: 'MessageSquare' },
  { id: 'transport', label: 'Transport', icon: 'Bus' },
  { id: 'leave', label: 'Leave', icon: 'Calendar' },
  { id: 'settings', label: 'Settings', icon: 'Settings' },
];
