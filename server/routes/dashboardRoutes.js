const express = require("express");

const router = express.Router();

const Book = require("../models/Book");

const IssueBook = require("../models/IssueBook");

const User = require("../models/User");

router.get("/", async (req, res) => {

  try {

    const totalBooks = await Book.countDocuments();

    const issuedBooks =
      await IssueBook.countDocuments();

    const totalUsers =
      await User.countDocuments();

    res.json({
      totalBooks,
      issuedBooks,
      totalUsers,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;