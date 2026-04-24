const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { protect, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/login', loginUser);

// Only an Admin can register a new user
router.post('/register', protect, authorize('Admin'), registerUser);

module.exports = router;
