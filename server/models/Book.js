const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    enum: ["book", "movie"],
    default: "book",
  },

  available: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);