const mongoose = require('mongoose');

const trackerItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    hoursCollected: { type: Number, default: 0 },
    goalHours: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });
  
  const TrackerItem = mongoose.model('TrackerItem', trackerItemSchema);

  module.exports = TrackerItem;
  