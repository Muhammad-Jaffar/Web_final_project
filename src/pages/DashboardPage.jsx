import React from 'react';

const DashboardPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h2 className="page-title">Dashboard</h2>
        <p className="page-subtitle">Overview of the system</p>
      </div>
      
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Vendors</h3>
          <p className="metric-value">124</p>
        </div>
        <div className="metric-card">
          <h3>Active Contracts</h3>
          <p className="metric-value">45</p>
        </div>
        <div className="metric-card">
          <h3>Pending Payments</h3>
          <p className="metric-value">$12,450</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
