const express = require("express");

const router = express.Router();

const User = require("../models/User");

/* Register User */

router.post("/register", async (req, res) => {

  try {

    const user = await User.create(req.body);

    res.status(201).json({
      message: "User Registered",
      user,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

/* Login User */

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;


    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {

      return res.json({
        role: "admin",
        name: "Admin",
        message: "Admin Login Successful",
      });

    }

    /* NORMAL USERS */

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(401).json({
        message: "User Not Found",
      });

    }

    if (user.password !== password) {

      return res.status(401).json({
        message: "Invalid Password",
      });

    }

    res.json({
      role: "user",
      name: user.name,
      message: "User Login Successful",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;