import React, { useState } from 'react';
import Card from '../components/ui/Card';
import VendorTable from '../components/vendors/VendorTable';
import AddVendorForm from '../components/vendors/AddVendorForm';
import EditVendorForm from '../components/vendors/EditVendorForm';
import VendorRatingForm from '../components/vendors/VendorRatingForm';
import Button from '../components/ui/Button';

const VendorsPage = () => {
  const [vendors, setVendors] = useState([
    { id: 1, name: 'TechCorp Solutions', category: 'IT Services', contact: 'billing@techcorp.com', status: 'Active' },
    { id: 2, name: 'Global Logistics Inc.', category: 'Logistics', contact: 'vendors@globallogistics.com', status: 'Inactive' }
  ]);
  const [viewState, setViewState] = useState('list'); // 'list', 'add', 'edit', 'rate'
  const [selectedVendor, setSelectedVendor] = useState(null);

  const handleAddVendor = (vendor) => {
    setVendors([...vendors, vendor]);
    setViewState('list');
  };

  const handleUpdateVendor = (updatedVendor) => {
    setVendors(vendors.map(v => v.id === updatedVendor.id ? updatedVendor : v));
    setViewState('list');
    setSelectedVendor(null);
  };

  const handleToggleStatus = (id) => {
    setVendors(vendors.map(v => {
      if (v.id === id) {
        return { ...v, status: v.status === 'Active' ? 'Inactive' : 'Active' };
      }
      return v;
    }));
  };

  const handleEditClick = (vendor) => {
    setSelectedVendor(vendor);
    setViewState('edit');
  };

  const handleRateClick = (vendor) => {
    setSelectedVendor(vendor);
    setViewState('rate');
  };

  const handleRatingSubmit = (ratingData) => {
    alert(`Rating submitted for Vendor ${ratingData.vendorId}: ${ratingData.rating} stars!`);
    setViewState('list');
    setSelectedVendor(null);
  };

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 className="page-title">Vendors</h2>
          <p className="page-subtitle">Manage your suppliers and vendors</p>
        </div>
        {viewState === 'list' && (
          <Button onClick={() => setViewState('add')}>+ Add Vendor</Button>
        )}
      </div>

      {viewState === 'list' && (
        <Card>
          <VendorTable 
            vendors={vendors} 
            onEdit={handleEditClick} 
            onToggleStatus={handleToggleStatus} 
            onRate={handleRateClick}
          />
        </Card>
      )}

      {viewState === 'add' && (
        <AddVendorForm 
          onAdd={handleAddVendor} 
          onCancel={() => setViewState('list')} 
        />
      )}

      {viewState === 'edit' && selectedVendor && (
        <EditVendorForm 
          vendor={selectedVendor} 
          onUpdate={handleUpdateVendor} 
          onCancel={() => {
            setViewState('list');
            setSelectedVendor(null);
          }} 
        />
      )}

      {viewState === 'rate' && selectedVendor && (
        <VendorRatingForm 
          vendor={selectedVendor} 
          onSubmit={handleRatingSubmit} 
          onCancel={() => {
            setViewState('list');
            setSelectedVendor(null);
          }} 
        />
      )}
    </div>
  );
};

export default VendorsPage;
