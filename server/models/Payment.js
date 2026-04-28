const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  vendorId: {
    type: String,
    required: true
  },
  invoiceNumber: {
    type: String,
    required: true,
    unique: true
  },
  amount: {
    type: Number,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid', 'Overdue'],
    default: 'Pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
