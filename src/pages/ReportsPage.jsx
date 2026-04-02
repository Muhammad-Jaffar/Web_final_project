import React from 'react';
import MonthlyExpensesChart from '../components/reports/MonthlyExpensesChart';
import VendorSpendingChart from '../components/reports/VendorSpendingChart';
import ExportPanel from '../components/reports/ExportPanel';

const ReportsPage = () => {
  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 className="page-title">Performance & Reports</h2>
          <p className="page-subtitle">Analyze vendor spending and expenses</p>
        </div>
        <ExportPanel />
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
        <MonthlyExpensesChart />
        <VendorSpendingChart />
      </div>
    </div>
  );
};

export default ReportsPage;
