import React, { useState, useRef } from 'react';
import './Contracts.css';
import Button from '../ui/Button';

const UploadContractForm = ({ onUpload, onCancel }) => {
  const [formData, setFormData] = useState({
    vendorName: '',
    title: '',
    startDate: '',
    endDate: '',
    file: null
  });
  
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData({ ...formData, file: e.dataTransfer.files[0] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.vendorName || !formData.title || !formData.startDate || !formData.endDate || !formData.file) {
      alert("Please fill all fields and upload a file.");
      return;
    }
    
    if (new Date(formData.startDate) > new Date(formData.endDate)) {
      alert("End Date cannot be before Start Date.");
      return;
    }

    const newContract = {
      id: Date.now(),
      vendorName: formData.vendorName,
      title: formData.title,
      startDate: formData.startDate,
      endDate: formData.endDate,
      fileName: formData.file.name
    };
    
    onUpload(newContract);
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', border: '1px solid #ddd' }}>
      <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Upload New Contract</h3>
      
      <div className="contract-form-grid">
        <div className="contract-form-group">
          <label>Vendor Name</label>
          <input 
            type="text" 
            name="vendorName" 
            className="input-field" 
            value={formData.vendorName} 
            onChange={handleChange} 
            placeholder="e.g. Acme Corp" 
          />
        </div>
        <div className="contract-form-group">
          <label>Contract Title</label>
          <input 
            type="text" 
            name="title" 
            className="input-field" 
            value={formData.title} 
            onChange={handleChange} 
            placeholder="e.g. Annual Service Agreement" 
          />
        </div>
        <div className="contract-form-group">
          <label>Start Date</label>
          <input 
            type="date" 
            name="startDate" 
            className="input-field" 
            value={formData.startDate} 
            onChange={handleChange} 
          />
        </div>
        <div className="contract-form-group">
          <label>End Date</label>
          <input 
            type="date" 
            name="endDate" 
            className="input-field" 
            value={formData.endDate} 
            onChange={handleChange} 
          />
        </div>
      </div>

      <div className="contract-form-group" style={{ marginBottom: '20px' }}>
        <label>Contract File</label>
        <div 
          className="contract-upload-zone"
          onClick={() => fileInputRef.current.click()}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="contract-upload-icon">📄</div>
          {formData.file ? (
            <p><strong>Selected:</strong> {formData.file.name}</p>
          ) : (
            <p>Drag & drop a file here, or click to select</p>
          )}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            style={{ display: 'none' }}
            accept=".pdf,.doc,.docx"
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        <button 
          type="button" 
          onClick={onCancel} 
          style={{ padding: '10px 15px', borderRadius: '6px', border: '1px solid #ccc', backgroundColor: '#f8f9fa', cursor: 'pointer' }}
        >
          Cancel
        </button>
        <Button type="submit">Upload Contract</Button>
      </div>
    </form>
  );
};

export default UploadContractForm;
