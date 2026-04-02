import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import PaymentSummaryCards from '../components/payments/PaymentSummaryCards';
import PaymentList from '../components/payments/PaymentList';
import AddInvoiceForm from '../components/payments/AddInvoiceForm';

const PaymentsPage = () => {
  const [payments, setPayments] = useState([
    { id: 1042, vendorName: 'TechCorp Solutions', dateAdded: '2025-01-10', dueDate: '2025-02-10', amount: '4500.00', status: 'Paid' },
    { id: 1043, vendorName: 'Global Logistics Inc.', dateAdded: '2025-02-15', dueDate: '2025-03-01', amount: '1200.50', status: 'Overdue' },
    { id: 1044, vendorName: 'Acme Design', dateAdded: '2025-03-25', dueDate: '2030-04-20', amount: '3450.00', status: 'Pending' }
  ]);
  const [viewState, setViewState] = useState('list'); // 'list' or 'add'

  // Update mock status dynamically based on current date
  const processedPayments = payments.map(p => {
    if (p.status !== 'Paid' && new Date(p.dueDate) < new Date()) {
      return { ...p, status: 'Overdue' };
    }
    return p;
  });

  const handleAddInvoice = (newInvoice) => {
    setPayments([newInvoice, ...payments]);
    setViewState('list');
  };

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 className="page-title">Payments</h2>
          <p className="page-subtitle">Track and manage invoices</p>
        </div>
        {viewState === 'list' && (
          <Button onClick={() => setViewState('add')}>+ Add Invoice</Button>
        )}
      </div>

      {viewState === 'list' && (
        <>
          <PaymentSummaryCards payments={processedPayments} />
          <Card>
            <PaymentList payments={processedPayments} />
          </Card>
        </>
      )}

      {viewState === 'add' && (
        <AddInvoiceForm 
          onAdd={handleAddInvoice} 
          onCancel={() => setViewState('list')} 
        />
      )}
    </div>
  );
};

export default PaymentsPage;
