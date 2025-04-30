const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route to verify Firebase ID token and return user info
router.post('/verify-token', authController.verifyToken);

module.exports = router;
