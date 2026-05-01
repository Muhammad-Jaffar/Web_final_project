require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const reportRoutes = require('./routes/reportRoutes');

// Connect to database
connectDB();

const app = express();

// Basic Custom Logging Middleware (Student style)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/performance', performanceRoutes);
app.use('/api/reports', reportRoutes);

// Test Route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running perfectly!' });
});

// Enhanced Error handling middleware
app.use((err, req, res, next) => {
  console.error(`ERROR TRIGGERED: ${err.message}`);
  console.error(err.stack);
  res.status(err.status || 500).json({ 
    success: false,
    message: err.message || 'An unexpected Server Error occurred',
    // Only send stack trace in development mode
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
