import React from 'react';

const ExportPanel = () => {
  const handleExport = (type) => {
    alert(`Mock: Exporting report as ${type}`);
  };

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <button 
        onClick={() => handleExport('CSV')}
        style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #10b981', backgroundColor: '#ecfdf5', color: '#047857', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.2s' }}>
        Export CSV
      </button>
      <button 
        onClick={() => handleExport('PDF')}
        style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #ef4444', backgroundColor: '#fef2f2', color: '#b91c1c', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.2s' }}>
        Export PDF
      </button>
    </div>
  );
};

export default ExportPanel;
