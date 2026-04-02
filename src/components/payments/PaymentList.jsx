import React from 'react';
import './Payments.css';

const PaymentList = ({ payments }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', border: '1px solid #ddd' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
            <th style={{ padding: '12px', textAlign: 'left' }}>Invoice #</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Vendor</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Date Added</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Due Date</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Amount</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id} className={payment.status === 'Overdue' ? 'payment-overdue-row' : ''} style={{ borderBottom: '1px solid #dee2e6' }}>
              <td style={{ padding: '12px', fontWeight: '500' }}>#{payment.id}</td>
              <td style={{ padding: '12px' }}>{payment.vendorName}</td>
              <td style={{ padding: '12px', color: '#64748b' }}>{payment.dateAdded}</td>
              <td style={{ padding: '12px', fontWeight: payment.status === 'Overdue' ? 'bold' : 'normal', color: payment.status === 'Overdue' ? '#dc3545' : 'inherit' }}>
                {payment.dueDate}
              </td>
              <td style={{ padding: '12px', fontWeight: '600' }}>
                ${parseFloat(payment.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </td>
              <td style={{ padding: '12px' }}>
                <span className={`payment-badge badge-${payment.status.toLowerCase()}`}>
                  {payment.status}
                </span>
              </td>
            </tr>
          ))}
          {payments.length === 0 && (
             <tr>
               <td colSpan="6" style={{ padding: '20px', textAlign: 'center', color: '#6c757d' }}>
                 No payments found.
               </td>
             </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentList;
