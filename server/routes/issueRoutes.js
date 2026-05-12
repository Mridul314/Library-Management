const express = require("express");

const router = express.Router();

const IssueBook = require("../models/IssueBook");

const Book = require("../models/Book");

/* Issue Book */

router.post("/", async (req, res) => {

  try {

    const {
      bookName,
      author,
      issueDate,
      returnDate,
      remarks,
    } = req.body;

    /* Create Issue Entry */

    const issueBook =
      await IssueBook.create({
        bookName,
        author,
        issueDate,
        returnDate,
        remarks,
      });

    /* Update Book Availability */

    await Book.findOneAndUpdate(
      { title: bookName },
      { available: false }
    );

    res.status(201).json({
      message: "Book Issued Successfully",
      issueBook,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;