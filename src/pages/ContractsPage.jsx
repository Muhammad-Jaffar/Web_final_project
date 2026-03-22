import React from 'react';
import Card from '../components/ui/Card';

const ContractsPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h2 className="page-title">Contracts</h2>
        <p className="page-subtitle">View and add contracts</p>
      </div>
      <Card>
        <p>Contracts list will go here</p>
      </Card>
    </div>
  );
};

export default ContractsPage;
