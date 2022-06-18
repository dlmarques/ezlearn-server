const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Events", eventSchema);
