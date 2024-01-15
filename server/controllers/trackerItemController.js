// server/controllers/trackerItemController.js

const TrackerItem = require('../models/TrackerItem'); // Adjust path as needed

// Create a new TrackerItem
exports.createTrackerItem = async (req, res) => {
    try {
        const { name, hoursCollected, goalHours, user } = req.body;
        const newTrackerItem = new TrackerItem({
            name,
            hoursCollected,
            goalHours,
            user // Assuming this is the ID of the user who owns the tracker item
        });

        const savedTrackerItem = await newTrackerItem.save();
        res.status(201).json(savedTrackerItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add rest of CRUD opps
