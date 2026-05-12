const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  duration: {
    type: String,
    required: true,
  },

  active: {
    type: Boolean,
    default: true,
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model(
  "Membership",
  membershipSchema
);