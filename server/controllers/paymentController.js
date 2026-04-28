const Payment = require('../models/Payment');

// Create a new invoice
exports.createInvoice = async (req, res) => {
  try {
    const { vendorId, invoiceNumber, amount, dueDate } = req.body;
    
    // basic validation
    if (!vendorId || !invoiceNumber || !amount || !dueDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newPayment = new Payment({
      vendorId,
      invoiceNumber,
      amount,
      dueDate,
      paymentStatus: 'Pending' // default
    });

    await newPayment.save();
    res.status(201).json({ message: 'Invoice created successfully', payment: newPayment });
  } catch (err) {
    res.status(500).json({ message: 'Error creating invoice', error: err.message });
  }
};

// Get all payments with dynamic overdue logic
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    
    // Student-style overdue logic: dynamically check dates
    const currentDate = new Date();
    
    for (let i = 0; i < payments.length; i++) {
      let payment = payments[i];
      // If payment is still Pending but past due date, mark it Overdue
      if (payment.paymentStatus === 'Pending' && new Date(payment.dueDate) < currentDate) {
        payment.paymentStatus = 'Overdue';
        await payment.save(); // Save the updated status to DB
      }
    }

    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching payments', error: err.message });
  }
};

// Update payment status
exports.updatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;

    if (!['Pending', 'Paid', 'Overdue'].includes(paymentStatus)) {
      return res.status(400).json({ message: 'Invalid payment status' });
    }

    const payment = await Payment.findByIdAndUpdate(
      id, 
      { paymentStatus }, 
      { new: true }
    );

    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    res.status(200).json({ message: 'Status updated', payment });
  } catch (err) {
    res.status(500).json({ message: 'Error updating payment status', error: err.message });
  }
};

// Get financial summaries
exports.getFinancialSummary = async (req, res) => {
  try {
    const payments = await Payment.find();
    
    let totalPaid = 0;
    let totalPending = 0;

    for (let i = 0; i < payments.length; i++) {
      if (payments[i].paymentStatus === 'Paid') {
        totalPaid += payments[i].amount;
      } else {
        totalPending += payments[i].amount; // Counts both Pending and Overdue
      }
    }

    res.status(200).json({
      totalPaid,
      totalPending,
      totalInvoices: payments.length
    });
  } catch (err) {
    res.status(500).json({ message: 'Error calculating summaries', error: err.message });
  }
};
