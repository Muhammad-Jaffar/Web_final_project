import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, CreditCard } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>VendorSys</h2>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/dashboard" className="nav-link">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/vendors" className="nav-link">
            <Users size={20} />
            <span>Vendors</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contracts" className="nav-link">
            <FileText size={20} />
            <span>Contracts</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/payments" className="nav-link">
            <CreditCard size={20} />
            <span>Payments</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
