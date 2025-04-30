const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get user profile by user ID
router.get('/:id', userController.getUserProfile);

// Update user profile by user ID
router.put('/:id', userController.updateUserProfile);

// Get user progress by user ID
router.get('/:id/progress', userController.getUserProgress);

// Update user progress by user ID
router.put('/:id/progress', userController.updateUserProgress);

module.exports = router;
