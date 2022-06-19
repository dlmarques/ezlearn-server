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
  start: {
    type: String,
    required: true,
  },
   end: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Events", eventSchema);
