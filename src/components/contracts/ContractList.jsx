import React from 'react';
import './Contracts.css';

const ContractList = ({ contracts, onViewDetails }) => {
  const isExpired = (endDate) => {
    return new Date(endDate) < new Date();
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', border: '1px solid #ddd' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
            <th style={{ padding: '12px', textAlign: 'left' }}>Vendor</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Contract Title</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Start Date</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>End Date</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Status</th>
            <th style={{ padding: '12px', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map(contract => {
            const expired = isExpired(contract.endDate);
            return (
              <tr key={contract.id} className={expired ? 'contract-expired-row' : ''} style={{ borderBottom: '1px solid #dee2e6' }}>
                <td style={{ padding: '12px' }}>{contract.vendorName}</td>
                <td style={{ padding: '12px' }}>{contract.title}</td>
                <td style={{ padding: '12px' }}>{contract.startDate}</td>
                <td style={{ padding: '12px' }}>
                  {contract.endDate}
                  {expired && <span style={{color: 'red', marginLeft: '8px', fontSize: '12px'}}>(Expired)</span>}
                </td>
                <td style={{ padding: '12px' }}>
                  <span className={`badge ${expired ? 'badge-expired' : 'badge-active'}`}>
                    {expired ? 'Expired' : 'Active'}
                  </span>
                </td>
                <td style={{ padding: '12px', textAlign: 'center' }}>
                  <button 
                    onClick={() => onViewDetails(contract)}
                    style={{ padding: '6px 10px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
                  >
                    View
                  </button>
                </td>
              </tr>
            );
          })}
          {contracts.length === 0 && (
            <tr>
              <td colSpan="6" style={{ padding: '20px', textAlign: 'center', color: '#6c757d' }}>
                No contracts found. Upload one above.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContractList;
