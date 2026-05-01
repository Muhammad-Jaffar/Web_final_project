const Performance = require('../models/Performance');

// Add a new performance rating
exports.addRating = async (req, res, next) => {
  try {
    const { vendorId, qualityRating, deliveryRating, comments } = req.body;

    if (!vendorId || !qualityRating || !deliveryRating) {
      return res.status(400).json({ message: 'VendorId, Quality Rating, and Delivery Rating are required.' });
    }

    const newPerformance = new Performance({
      vendorId,
      qualityRating,
      deliveryRating,
      comments
    });

    await newPerformance.save();
    res.status(201).json({ message: 'Performance rating added successfully', data: newPerformance });
  } catch (err) {
    next(err); // Passes error to centralized error handler
  }
};

// Get performance history for a specific vendor
exports.getVendorHistory = async (req, res, next) => {
  try {
    const { vendorId } = req.params;
    
    // Simple fetch
    const history = await Performance.find({ vendorId }).sort({ dateEvaluated: -1 });
    
    // Calculate simple averages (student style logic)
    let totalQuality = 0;
    let totalDelivery = 0;
    let count = history.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        totalQuality += history[i].qualityRating;
        totalDelivery += history[i].deliveryRating;
      }
    }

    const averages = count > 0 ? {
      averageQuality: (totalQuality / count).toFixed(1),
      averageDelivery: (totalDelivery / count).toFixed(1)
    } : null;

    res.status(200).json({ 
      vendorId, 
      averages, 
      history 
    });
  } catch (err) {
    next(err);
  }
};
