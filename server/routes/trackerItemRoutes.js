// server/routes/trackerItemRoutes.js

const express = require('express');
const router = express.Router();
const {
    createTrackerItem,
    getAllTrackerItems,
    getTrackerItem,
    updateTrackerItem,
    deleteTrackerItem
} = require('../controllers/trackerItemController'); 

// Route to create a new tracker item
router.post('/', createTrackerItem);

// Route to retrieve all tracker items
router.get('/', getAllTrackerItems);

// Route to retrieve a single tracker item by ID
router.get('/:id', getTrackerItem);

// Route to update a tracker item by ID
router.put('/:id', updateTrackerItem);

// Route to delete a tracker item by ID
router.delete('/:id', deleteTrackerItem);

module.exports = router;
