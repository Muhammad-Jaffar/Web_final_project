import React from 'react';
import './Contracts.css';
import Button from '../ui/Button';

const ContractDetails = ({ contract, onBack }) => {
  const isExpired = new Date(contract.endDate) < new Date();

  return (
    <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '5px', border: '1px solid #ddd' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h3 style={{ margin: 0, fontSize: '24px' }}>Contract Details</h3>
        <span className={`badge ${isExpired ? 'badge-expired' : 'badge-active'}`} style={{ fontSize: '14px', padding: '6px 12px' }}>
          {isExpired ? 'Expired' : 'Active'}
        </span>
      </div>

      <div className="details-section">
        <div className="details-label">Vendor Name</div>
        <div className="details-value">{contract.vendorName}</div>
      </div>

      <div className="details-section">
        <div className="details-label">Contract Title</div>
        <div className="details-value">{contract.title}</div>
      </div>

      <div className="contract-form-grid" style={{ marginBottom: 0 }}>
        <div className="details-section" style={{ borderBottom: 'none' }}>
          <div className="details-label">Start Date</div>
          <div className="details-value">{contract.startDate}</div>
        </div>
        <div className="details-section" style={{ borderBottom: 'none' }}>
          <div className="details-label">End Date</div>
          <div className="details-value" style={{ color: isExpired ? '#721c24' : 'inherit', fontWeight: isExpired ? 'bold' : 'normal' }}>
            {contract.endDate} {isExpired && '(Expired)'}
          </div>
        </div>
      </div>

      <div className="details-section" style={{ borderBottom: 'none', borderTop: '1px solid #eee', paddingTop: '16px', marginTop: '16px' }}>
        <div className="details-label">Attached Document</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
          <div style={{ fontSize: '24px' }}>📄</div>
          <div className="details-value">{contract.fileName}</div>
          <button style={{ marginLeft: 'auto', padding: '6px 12px', backgroundColor: '#e9ecef', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}>
            Download
          </button>
        </div>
      </div>

      <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-start' }}>
        <Button onClick={onBack}>← Back to Contracts</Button>
      </div>
    </div>
  );
};

export default ContractDetails;
