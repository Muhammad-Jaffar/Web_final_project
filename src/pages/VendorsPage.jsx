import React from 'react';
import Card from '../components/ui/Card';

const VendorsPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h2 className="page-title">Vendors</h2>
        <p className="page-subtitle">Manage your vendors here</p>
      </div>
      <Card>
        <p>Vendor table will go here</p>
      </Card>
    </div>
  );
};

export default VendorsPage;
