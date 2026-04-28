const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// We are intentionally leaving these routes unprotected by auth middleware
// to make frontend student-testing easier.

router.post('/', paymentController.createInvoice);
router.get('/', paymentController.getAllPayments);
router.put('/:id/status', paymentController.updatePaymentStatus);
router.get('/summary', paymentController.getFinancialSummary);

module.exports = router;
