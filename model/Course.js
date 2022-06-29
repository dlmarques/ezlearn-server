const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
    image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Courses", courseSchema);
