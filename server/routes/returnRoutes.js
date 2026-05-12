const express = require("express");

const router = express.Router();

const Book = require("../models/Book");

const IssueBook = require("../models/IssueBook");

/* Return Book */

router.post("/", async (req, res) => {

  try {

    const { bookName } = req.body;

    /* Check Issued Book */

    const issuedBook =
      await IssueBook.findOne({
        bookName,
      });

    /* If Book Not Issued */

    if (!issuedBook) {

      return res.status(400).json({
        message:
          "This book is not issued",
      });

    }

    /* Update Book Availability */

    await Book.findOneAndUpdate(
      { title: bookName },
      { available: true }
    );

    /* Remove Issue Record */

    await IssueBook.findOneAndDelete({
      bookName,
    });

    res.json({
      message:
        "Book Returned Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;