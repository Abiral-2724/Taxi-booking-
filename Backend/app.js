const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/db.js');
const userRoutes = require('./routes/user.routes.js');

const app = express();
const cookieParser = require('cookie-parser') ; 
// Database connection
connectToDb();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing JSON bodies
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data
app.use(cookieParser()) ;
// Root Route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// User Routes
app.use('/users', userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message); // Log the error for debugging
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Export App
module.exports = app;
