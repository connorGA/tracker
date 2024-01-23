// server/routes/trackerItemRoutes.js

const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const {
    createTrackerItem,
    getAllTrackerItems,
    getTrackerItem,
    updateTrackerItem,
    deleteTrackerItem
} = require('../controllers/trackerItemController'); 

// Route to create a new tracker item
router.post('/', authenticateToken, createTrackerItem);

// Route to retrieve all tracker items
router.get('/', authenticateToken, getAllTrackerItems);

// Route to retrieve a single tracker item by ID
router.get('/:id', authenticateToken, getTrackerItem);

// Route to update a tracker item by ID
router.put('/:id', authenticateToken, updateTrackerItem);

// Route to delete a tracker item by ID
router.delete('/:id', authenticateToken, deleteTrackerItem);

module.exports = router;
