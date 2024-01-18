// server/controllers/trackerItemController.js

const TrackerItem = require('../models/TrackerItem'); // Adjust the path as needed

// Create a new TrackerItem
exports.createTrackerItem = async (req, res) => {
    try {
        const userId = req.user._id; // Get the logged-in user's ID
        const newTrackerItem = new TrackerItem({ ...req.body, user: userId });
        const savedTrackerItem = await newTrackerItem.save();
        res.status(201).json(savedTrackerItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get all TrackerItems for the logged-in user
exports.getAllTrackerItems = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming the user ID is stored in req.user
        const trackerItems = await TrackerItem.find({ userId: userId });
        res.json(trackerItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get a single TrackerItem by ID
exports.getTrackerItem = async (req, res) => {
    try {
        const userId = req.user._id;
        const trackerItem = await TrackerItem.findOne({ _id: req.params.id, user: userId });
        if (!trackerItem) return res.status(404).json({ message: 'TrackerItem not found or not authorized' });
        res.json(trackerItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Update a TrackerItem by ID
exports.updateTrackerItem = async (req, res) => {
    try {
        const userId = req.user._id;
        const updatedTrackerItem = await TrackerItem.findOneAndUpdate(
            { _id: req.params.id, user: userId },
            req.body,
            { new: true }
        );
        if (!updatedTrackerItem) return res.status(404).json({ message: 'TrackerItem not found or not authorized' });
        res.json(updatedTrackerItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Delete a TrackerItem by ID
exports.deleteTrackerItem = async (req, res) => {
    try {
        const userId = req.user._id;
        const deletedTrackerItem = await TrackerItem.findOneAndDelete({ _id: req.params.id, user: userId });
        if (!deletedTrackerItem) return res.status(404).json({ message: 'TrackerItem not found or not authorized' });
        res.json({ message: 'TrackerItem deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

