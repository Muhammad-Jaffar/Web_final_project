const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  vendorId: {
    type: String,
    required: true
  },
  contractTitle: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Active', 'Expired', 'Terminated'],
    default: 'Active'
  }
}, { timestamps: true });

module.exports = mongoose.model('Contract', contractSchema);
