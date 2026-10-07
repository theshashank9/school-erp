import React, { useState } from 'react';
import LoginPage from './pages/Login/LoginPage';
import AdminDashboard from './pages/Admin/AdminDashboard';
import TeacherDashboard from './pages/Teacher/TeacherDashboard';
import StudentDashboard from './pages/Student/StudentDashboard';
import ParentDashboard from './pages/Parent/ParentDashboard';
import './styles/global.css';

const App = () => {
  const [currentRole, setCurrentRole] = useState(null);

  const handleLogin = (role) => {
    setCurrentRole(role);
  };

  const handleLogout = () => {
    setCurrentRole(null);
  };

  if (!currentRole) {
    return <LoginPage onLogin={handleLogin} />;
  }

  switch (currentRole) {
    case 'admin':
      return <AdminDashboard onLogout={handleLogout} />;
    case 'teacher':
      return <TeacherDashboard onLogout={handleLogout} />;
    case 'student':
      return <StudentDashboard onLogout={handleLogout} />;
    case 'parent':
      return <ParentDashboard onLogout={handleLogout} />;
    default:
      return <LoginPage onLogin={handleLogin} />;
  }
};

export default App;
