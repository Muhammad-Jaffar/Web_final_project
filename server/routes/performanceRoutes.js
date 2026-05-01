const express = require('express');
const router = express.Router();
const performanceController = require('../controllers/performanceController');

router.post('/', performanceController.addRating);
router.get('/:vendorId', performanceController.getVendorHistory);

module.exports = router;
