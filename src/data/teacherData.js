export const teacherStats = [
  { id: 1, title: 'My Classes', value: '4', icon: 'BookOpen', color: 'blue', bg: '#EFF6FF' },
  { id: 2, title: 'Total Students', value: '128', icon: 'Users', color: 'green', bg: '#F0FDF4' },
  { id: 3, title: 'Pending Assignments', value: '5', icon: 'FileText', color: 'orange', bg: '#FFF7ED' },
  { id: 4, title: 'Attendance Rate', value: '92%', icon: 'CheckCircle', color: 'teal', bg: '#F0FDFA' },
];

export const todaysClasses = [
  { id: 1, class: 'Class 8A - Mathematics', subject: 'Mathematics', time: '08:00 AM - 08:45 AM', room: 'Room 91', status: 'Upcoming' },
  { id: 2, class: 'Class 10B - Mathematics', subject: 'Mathematics', time: '09:30 AM - 10:15 AM', room: 'Room 90', status: 'Upcoming' },
  { id: 3, class: 'Class 10B - Mathematics', subject: 'Mathematics', time: '11:00 AM - 11:45 AM', room: 'Room 90', status: 'Upcoming' },
  { id: 4, class: 'Class 09 - Mathematics', subject: 'Mathematics', time: '01:00 PM - 01:45 PM', room: 'Room 90', status: 'Upcoming' },
];

export const recentAssignments = [
  { id: 1, title: 'Quadratic Equations', class: 'Class 10A', dueDate: 'Due: 12 Sep', submitted: 28, total: 32, status: 'Active' },
  { id: 2, title: 'Linear Equations', class: 'Class 10B', dueDate: 'Due: 15 Sep', submitted: 0, total: 30, status: 'Active' },
  { id: 3, title: 'Algebra Practice', class: 'Class 9A', dueDate: 'Due: 10 Sep', submitted: 25, total: 30, status: 'Active' },
];

export const attendanceData = [
  { name: 'Present', value: 119, color: '#3B82F6' },
  { name: 'Absent', value: 6, color: '#EF4444' },
  { name: 'Leave', value: 2, color: '#F59E0B' },
];

export const todaySchedule = [
  { id: 1, class: 'Class 9A', subject: 'Mathematics', startTime: '08:00 AM', endTime: '08:45 AM' },
  { id: 2, class: 'Class 10B - Mathematics', subject: 'Mathematics', startTime: '09:30 AM', endTime: '10:15 AM' },
  { id: 3, class: 'Staff Meeting', subject: '', startTime: '11:00 AM', endTime: '12:00 PM' },
  { id: 4, class: 'Class 9S - Mathematics', subject: 'Mathematics', startTime: '01:00 PM', endTime: '01:45 PM' },
];

export const teacherSidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'classes', label: 'My Classes', icon: 'BookOpen' },
  { id: 'attendance', label: 'Attendance', icon: 'CheckCircle' },
  { id: 'timetable', label: 'Timetable', icon: 'Clock' },
  { id: 'assignments', label: 'Assignments', icon: 'FileText' },
  { id: 'gradebook', label: 'Gradebook', icon: 'BarChart2' },
  { id: 'students', label: 'Students', icon: 'Users' },
  { id: 'lessonplans', label: 'Lesson Plans', icon: 'BookMarked' },
  { id: 'leave', label: 'Leave', icon: 'Calendar' },
  { id: 'messages', label: 'Messages', icon: 'MessageSquare' },
];
