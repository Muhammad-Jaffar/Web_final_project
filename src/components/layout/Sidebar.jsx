import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>VendorSys</h2>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/vendors" className="nav-link">Vendors</NavLink>
        </li>
        <li>
          <NavLink to="/contracts" className="nav-link">Contracts</NavLink>
        </li>
        <li>
          <NavLink to="/payments" className="nav-link">Payments</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
