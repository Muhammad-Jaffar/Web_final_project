import React, { useState } from 'react';
import Card from '../components/ui/Card';
import ContractList from '../components/contracts/ContractList';
import UploadContractForm from '../components/contracts/UploadContractForm';
import ContractDetails from '../components/contracts/ContractDetails';
import Button from '../components/ui/Button';

const ContractsPage = () => {
  // Mock data with an active and an expired contract
  const [contracts, setContracts] = useState([
    {
      id: 1,
      vendorName: 'TechCorp Solutions',
      title: 'Cloud Hosting Services Q3',
      startDate: '2025-01-01',
      endDate: '2026-12-31',
      fileName: 'hosting_agreement_2025.pdf'
    },
    {
      id: 2,
      vendorName: 'Global Logistics Inc.',
      title: 'Shipping Partnership 2024',
      startDate: '2024-01-01',
      endDate: '2024-12-31', // Expired
      fileName: 'shipping_contract_2024.pdf'
    }
  ]);
  
  const [viewState, setViewState] = useState('list'); // 'list', 'upload', 'details'
  const [selectedContract, setSelectedContract] = useState(null);

  const handleUploadContract = (newContract) => {
    setContracts([...contracts, newContract]);
    setViewState('list');
  };

  const handleViewDetails = (contract) => {
    setSelectedContract(contract);
    setViewState('details');
  };

  const handleBackToList = () => {
    setViewState('list');
    setSelectedContract(null);
  };

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 className="page-title">Contracts</h2>
          <p className="page-subtitle">View and add contracts</p>
        </div>
        {viewState === 'list' && (
          <Button onClick={() => setViewState('upload')}>+ Upload Contract</Button>
        )}
      </div>

      {viewState === 'list' && (
        <Card>
          <ContractList 
            contracts={contracts} 
            onViewDetails={handleViewDetails} 
          />
        </Card>
      )}

      {viewState === 'upload' && (
        <UploadContractForm 
          onUpload={handleUploadContract} 
          onCancel={handleBackToList} 
        />
      )}

      {viewState === 'details' && selectedContract && (
        <ContractDetails 
          contract={selectedContract} 
          onBack={handleBackToList} 
        />
      )}
    </div>
  );
};

export default ContractsPage;
