const mongoose = require("mongoose");

const issueBookSchema = new mongoose.Schema({

  bookName: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  issueDate: {
    type: Date,
    required: true,
  },

  returnDate: {
    type: Date,
    required: true,
  },

  remarks: {
    type: String,
  },

});

module.exports = mongoose.model(
  "IssueBook",
  issueBookSchema
);