import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    // Check credentials
    const result = login(email, password);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f4f4f9' }}>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>VendorSys Login</h2>
        <Card>
          <form onSubmit={handleLogin}>
            {error && <div style={{ color: 'red', marginBottom: '15px', backgroundColor: '#f8d7da', padding: '10px', borderRadius: '4px', border: '1px solid #f5c6cb' }}>{error}</div>}
            
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="admin@vendor.sys" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <Input 
              label="Password" 
              type="password" 
              placeholder="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            <Button type="submit" style={{ width: '100%', marginTop: '10px' }}>Login</Button>
          </form>
          
          <div style={{ marginTop: '25px', fontSize: '13px', color: '#666', borderTop: '1px solid #ddd', paddingTop: '15px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Demo Accounts (password: password):</p>
            <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: '1.6' }}>
              <li>admin@vendor.sys (Admin)</li>
              <li>finance@vendor.sys (Finance Officer)</li>
              <li>procurement@vendor.sys (Procurement Officer)</li>
              <li>viewer@vendor.sys (Viewer)</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
