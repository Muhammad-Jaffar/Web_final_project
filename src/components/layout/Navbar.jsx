import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h2>Vendor Management System</h2>
      </div>
      <div className="navbar-right">
        <span className="welcome-text">Welcome, Admin</span>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Navbar;
