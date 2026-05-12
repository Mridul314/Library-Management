const express = require("express");

const router = express.Router();

const Membership = require(
  "../models/Membership"
);

/* Add Membership */

router.post("/", async (req, res) => {

  try {

    const membership =
      await Membership.create(req.body);

    res.status(201).json({
      message:
        "Membership Added Successfully",
      membership,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

/* Get Memberships */

router.get("/", async (req, res) => {

  try {

    const memberships =
      await Membership.find();

    res.json(memberships);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;