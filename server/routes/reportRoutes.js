const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/monthly-expenses', reportController.getMonthlyExpenses);
router.get('/vendor-spending', reportController.getVendorSpending);
router.get('/expiring-contracts', reportController.getExpiringContracts);

module.exports = router;
