import React, { useState, useEffect } from 'react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';

const EditVendorForm = ({ vendor, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({ ...vendor });

  useEffect(() => {
    // eslint-disable-next-line react-compiler/react-compiler, no-restricted-syntax
    // eslint-disable-next-line
    setFormData({ ...vendor });
  }, [vendor]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <Card>
      <h3>Edit Vendor</h3>
      <form onSubmit={handleSubmit}>
        <Input label="Vendor Name" name="name" value={formData.name} onChange={handleChange} required />
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} className="input-field">
            <option value="IT Services">IT Services</option>
            <option value="Hardware">Hardware</option>
            <option value="Consulting">Consulting</option>
            <option value="Logistics">Logistics</option>
          </select>
        </div>

        <Input label="Contact Email" type="email" name="contact" value={formData.contact} onChange={handleChange} required />
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Status</label>
          <select name="status" value={formData.status} onChange={handleChange} className="input-field">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Button type="submit">Update Vendor</Button>
          <button type="button" onClick={onCancel} className="btn" style={{ backgroundColor: '#6c757d' }}>Cancel</button>
        </div>
      </form>
    </Card>
  );
};

export default EditVendorForm;
