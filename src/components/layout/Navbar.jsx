import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../../utils/auth';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <h2>Vendor Management System</h2>
      </div>
      <div className="navbar-right">
        <span className="welcome-text">Welcome, {user?.name || 'User'}</span>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Navbar;
