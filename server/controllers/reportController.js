const Payment = require('../models/Payment');
const Contract = require('../models/Contract');

// Get monthly expenses
exports.getMonthlyExpenses = async (req, res, next) => {
  try {
    const payments = await Payment.find({ paymentStatus: 'Paid' });
    
    // Student style aggregation using plain objects
    const monthlyData = {};

    for (let i = 0; i < payments.length; i++) {
      let date = new Date(payments[i].dueDate); // Assuming due date or a payment date
      let monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;
      
      if (!monthlyData[monthYear]) {
        monthlyData[monthYear] = 0;
      }
      monthlyData[monthYear] += payments[i].amount;
    }

    res.status(200).json({ data: monthlyData });
  } catch (err) {
    next(err);
  }
};

// Get spending grouped by vendor
exports.getVendorSpending = async (req, res, next) => {
  try {
    const payments = await Payment.find({ paymentStatus: 'Paid' });
    
    const vendorData = {};

    for (let i = 0; i < payments.length; i++) {
      let vId = payments[i].vendorId;
      if (!vendorData[vId]) {
        vendorData[vId] = 0;
      }
      vendorData[vId] += payments[i].amount;
    }

    res.status(200).json({ data: vendorData });
  } catch (err) {
    next(err);
  }
};

// Get expiring contracts
exports.getExpiringContracts = async (req, res, next) => {
  try {
    const currentDate = new Date();
    // Setting future date to 30 days from now
    const next30Days = new Date();
    next30Days.setDate(currentDate.getDate() + 30);

    const expiringContracts = await Contract.find({
      status: 'Active',
      endDate: { $gte: currentDate, $lte: next30Days }
    });

    res.status(200).json({ count: expiringContracts.length, data: expiringContracts });
  } catch (err) {
    next(err);
  }
};
