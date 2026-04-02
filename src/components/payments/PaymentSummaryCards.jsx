import React from 'react';
import './Payments.css';

const PaymentSummaryCards = ({ payments }) => {
  const getTotals = () => {
    let paid = 0;
    let pending = 0;
    let overdue = 0;
    
    payments.forEach(p => {
      const amount = parseFloat(p.amount);
      if (p.status === 'Paid') paid += amount;
      if (p.status === 'Pending') pending += amount;
      if (p.status === 'Overdue') overdue += amount;
    });

    return { paid, pending, overdue };
  };

  const totals = getTotals();
  const formatCurrency = (val) => `$${val.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  return (
    <div className="summary-cards-wrapper">
      <div className="summary-card summary-card-paid">
        <span className="summary-card-title">Total Paid</span>
        <span className="summary-card-value">{formatCurrency(totals.paid)}</span>
      </div>
      <div className="summary-card summary-card-pending">
        <span className="summary-card-title">Total Pending</span>
        <span className="summary-card-value">{formatCurrency(totals.pending)}</span>
      </div>
      <div className="summary-card summary-card-overdue">
        <span className="summary-card-title">Total Overdue</span>
        <span className="summary-card-value">{formatCurrency(totals.overdue)}</span>
      </div>
    </div>
  );
};

export default PaymentSummaryCards;
