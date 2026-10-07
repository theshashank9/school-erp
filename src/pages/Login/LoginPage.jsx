import React, { useState } from 'react';
import {
  GraduationCap, Mail, Lock, Eye, EyeOff, ArrowRight,
  CheckCircle, Zap, MessageCircle, Shield, Users, BookOpen
} from 'lucide-react';
import schoolCampus from '../../assets/images/school-campus.jpg';

const roles = [
  {
    id: 'admin',
    name: 'Admin',
    subtitle: 'Manage School',
    icon: Shield,
    color: '#2563EB',
    bg: '#EFF6FF',
    email: 'admin@edusphere.com',
  },
  {
    id: 'teacher',
    name: 'Teacher',
    subtitle: 'Teach & Track',
    icon: BookOpen,
    color: '#059669',
    bg: '#F0FDF4',
    email: 'teacher@edusphere.com',
  },
  {
    id: 'student',
    name: 'Student',
    subtitle: 'Learn & Grow',
    icon: GraduationCap,
    color: '#7C3AED',
    bg: '#FAF5FF',
    email: 'student@edusphere.com',
  },
  {
    id: 'parent',
    name: 'Parent',
    subtitle: 'Stay Connected',
    icon: Users,
    color: '#EA580C',
    bg: '#FFF7ED',
    email: 'parent@edusphere.com',
  },
];

const features = [
  { icon: CheckCircle, label: 'Easy Management' },
  { icon: Zap, label: 'Real-time Updates' },
  { icon: MessageCircle, label: 'Better Communication' },
  { icon: Shield, label: 'Secure & Reliable' },
];

const stats = [
  { value: '1,200+', label: 'Students' },
  { value: '100+', label: 'Teachers' },
  { value: '50+', label: 'Classes' },
  { value: '98%', label: 'Success Rate' },
];

const LoginPage = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState('admin');
  const [email, setEmail] = useState('admin@edusphere.com');
  const [password, setPassword] = useState('123456');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    const role = roles.find(r => r.id === roleId);
    if (role) setEmail(role.email);
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== '123456') {
      setError('Incorrect password. Use: 123456');
      return;
    }
    onLogin(selectedRole);
  };

  const selectedRoleData = roles.find(r => r.id === selectedRole);

  return (
    <div className="login-page">
      {/* Left Side */}
      <div className="login-left">
        <div
          className="login-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(10,35,75,0.52), rgba(10,35,75,0.52)), url(${schoolCampus})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="login-overlay" />

        {/* Logo */}
        <div className="login-logo">
          <div className="login-logo-icon">
            <GraduationCap size={20} color="#fff" />
          </div>
          <div className="login-logo-text">
            <h2>EduSphere</h2>
            <span>School ERP</span>
          </div>
        </div>

        {/* Tagline */}
        <div className="login-tagline">
          Better Education &nbsp;·&nbsp; Brighter Tomorrow
        </div>

        {/* Content */}
        <div className="login-left-content">
          <h1>
            Smart School<br />
            Management<br />
            for a Brighter Future
          </h1>
          <p>
            A complete School ERP for Admins, Teachers, Students and Parents.
            Manage academics, attendance, exams, fees, communication and more — all in one place.
          </p>

          <div className="login-features">
            {features.map((f, i) => (
              <div key={i} className="login-feature-item">
                <div className="login-feature-icon">
                  <f.icon size={14} />
                </div>
                {f.label}
              </div>
            ))}
          </div>

          <div className="login-stats">
            {stats.map((s, i) => (
              <div key={i} className="login-stat-item">
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side — Login Card */}
      <div className="login-right">
        <div className="login-card">
          {/* Welcome */}
          <div className="login-welcome">
            <h2>Welcome Back 👋</h2>
            <p>Login to your School ERP Portal</p>
          </div>

          {/* Role Selector */}
          <div className="role-grid">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`role-card${selectedRole === role.id ? ' selected' : ''}`}
                style={{ '--role-color': role.color, '--role-bg': role.bg + '80' }}
                onClick={() => handleRoleSelect(role.id)}
              >
                <div className="role-icon-wrapper" style={{ background: role.bg }}>
                  <role.icon size={18} color={role.color} />
                </div>
                <span className="role-name">{role.name}</span>
                <span className="role-subtitle">{role.subtitle}</span>
              </div>
            ))}
          </div>

          {/* Login Form */}
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>User ID / Email</label>
              <div className="form-input-wrapper">
                <Mail size={14} className="form-input-icon" />
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter your user ID or email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(''); }}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="form-input-wrapper">
                <Lock size={14} className="form-input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(''); }}
                  style={{ paddingRight: '36px' }}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            {error && (
              <div style={{ fontSize: '12px', color: '#DC2626', background: '#FEF2F2', padding: '8px 12px', borderRadius: '6px', border: '1px solid #FECACA' }}>
                {error}
              </div>
            )}

            <div className="form-row">
              <label className="form-checkbox">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <button type="button" className="forgot-link">Forgot Password?</button>
            </div>

            <button
              type="submit"
              className="login-btn"
              style={{ background: selectedRoleData?.color || '#2563EB' }}
            >
              Login
              <ArrowRight size={16} />
            </button>

            <div className="or-divider">OR</div>

            <button type="button" className="google-btn">
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Login with Google
            </button>

            <div className="login-help">
              <span>🔒</span>
              Need help? Contact your school administrator.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
