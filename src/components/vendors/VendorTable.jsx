import React from 'react';

const VendorTable = ({ vendors, onEdit, onToggleStatus, onRate }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', border: '1px solid #ddd' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
            <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Category</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Contact</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Status</th>
            <th style={{ padding: '12px', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map(vendor => (
            <tr key={vendor.id} style={{ borderBottom: '1px solid #dee2e6' }}>
              <td style={{ padding: '12px' }}>{vendor.name}</td>
              <td style={{ padding: '12px' }}>{vendor.category}</td>
              <td style={{ padding: '12px' }}>{vendor.contact}</td>
              <td style={{ padding: '12px' }}>
                <span style={{ 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '12px',
                  backgroundColor: vendor.status === 'Active' ? '#d4edda' : '#f8d7da',
                  color: vendor.status === 'Active' ? '#155724' : '#721c24'
                }}>
                  {vendor.status}
                </span>
              </td>
              <td style={{ padding: '12px', textAlign: 'center' }}>
                <button 
                  onClick={() => onRate(vendor)} 
                  style={{ marginRight: '10px', padding: '6px 10px', cursor: 'pointer', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px' }}
                >
                  Rate
                </button>
                <button 
                  onClick={() => onEdit(vendor)} 
                  style={{ marginRight: '10px', padding: '6px 10px', cursor: 'pointer', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '4px' }}
                >
                  Edit
                </button>
                <button 
                  onClick={() => onToggleStatus(vendor.id)}
                  style={{ padding: '6px 10px', cursor: 'pointer', backgroundColor: vendor.status === 'Active' ? '#dc3545' : '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}
                >
                  {vendor.status === 'Active' ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
          {vendors.length === 0 && (
            <tr>
              <td colSpan="5" style={{ padding: '20px', textAlign: 'center', color: '#6c757d' }}>
                No vendors found. Add one above.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VendorTable;
