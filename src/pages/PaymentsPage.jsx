import React from 'react';
import Card from '../components/ui/Card';

const PaymentsPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h2 className="page-title">Payments</h2>
        <p className="page-subtitle">Track your payments</p>
      </div>
      <Card>
        <p>Payments records will go here</p>
      </Card>
    </div>
  );
};

export default PaymentsPage;
