import React, { useState } from 'react';
import Button from '../ui/Button';
import './Payments.css';

const AddInvoiceForm = ({ onAdd, onCancel }) => {
  const [formData, setFormData] = useState({
    vendorName: '',
    amount: '',
    dueDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.vendorName || !formData.amount || !formData.dueDate) return alert("Fill all fields");
    
    // Status Logic
    const isOverdue = new Date(formData.dueDate) < new Date();
    
    const newPayment = {
      id: Math.floor(1000 + Math.random() * 9000), // Random 4 digit ID
      vendorName: formData.vendorName,
      amount: formData.amount,
      dateAdded: new Date().toISOString().split('T')[0],
      dueDate: formData.dueDate,
      status: isOverdue ? 'Overdue' : 'Pending',
    };
    
    onAdd(newPayment);
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', border: '1px solid #ddd' }}>
      <h3 style={{ marginTop: 0, marginBottom: '24px' }}>Add New Invoice</h3>
      
      <div className="invoice-form-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Vendor Name</label>
          <input 
            type="text" 
            name="vendorName" 
            className="input-field" 
            value={formData.vendorName} 
            onChange={handleChange} 
            placeholder="e.g. NextGen IT" 
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Amount ($)</label>
          <input 
            type="number" 
            step="0.01"
            name="amount" 
            className="input-field" 
            value={formData.amount} 
            onChange={handleChange} 
            placeholder="0.00" 
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Due Date</label>
          <input 
            type="date" 
            name="dueDate" 
            className="input-field" 
            value={formData.dueDate} 
            onChange={handleChange} 
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '32px' }}>
        <button type="button" onClick={onCancel} className="btn" style={{ backgroundColor: '#6c757d' }}>Cancel</button>
        <Button type="submit">Save Invoice</Button>
      </div>
    </form>
  );
};

export default AddInvoiceForm;
