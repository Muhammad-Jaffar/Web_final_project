const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
  vendorId: {
    type: String,
    required: true
  },
  qualityRating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  deliveryRating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comments: {
    type: String
  },
  dateEvaluated: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Performance', performanceSchema);
