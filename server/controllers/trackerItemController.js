// server/controllers/trackerItemController.js

const TrackerItem = require('../models/TrackerItem'); // Adjust the path as needed

// Create a new TrackerItem
exports.createTrackerItem = async (req, res) => {
    try {
        const newTrackerItem = new TrackerItem(req.body);
        const savedTrackerItem = await newTrackerItem.save();
        res.status(201).json(savedTrackerItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all TrackerItems
exports.getAllTrackerItems = async (req, res) => {
    try {
        const trackerItems = await TrackerItem.find();
        res.json(trackerItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single TrackerItem by ID
exports.getTrackerItem = async (req, res) => {
    try {
        const trackerItem = await TrackerItem.findById(req.params.id);
        if (!trackerItem) return res.status(404).json({ message: 'TrackerItem not found' });
        res.json(trackerItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a TrackerItem by ID
exports.updateTrackerItem = async (req, res) => {
    try {
        const updatedTrackerItem = await TrackerItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return the updated object
        );
        if (!updatedTrackerItem) return res.status(404).json({ message: 'TrackerItem not found' });
        res.json(updatedTrackerItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a TrackerItem by ID
exports.deleteTrackerItem = async (req, res) => {
    try {
        const deletedTrackerItem = await TrackerItem.findByIdAndDelete(req.params.id);
        if (!deletedTrackerItem) return res.status(404).json({ message: 'TrackerItem not found' });
        res.json({ message: 'TrackerItem deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
