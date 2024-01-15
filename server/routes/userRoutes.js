const express = require('express');
const router = express.Router();

const { registerUser } = require('../controllers/userController');
const { loginUser } = require('../controllers/userController');

// User routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// TrackerItem routes
// router.post('/trackerItem', createTrackerItem);
// Add more routes for reading, updating, and deleting tracker items

module.exports = router;
