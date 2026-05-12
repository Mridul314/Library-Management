const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* Routes */

const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");
const membershipRoutes = require("./routes/membershipRoutes");
const issueRoutes = require("./routes/issueRoutes");
const dashboardRoutes =require("./routes/dashboardRoutes");
const returnRoutes = require("./routes/returnRoutes");

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/membership", membershipRoutes);
app.use("/api/issue", issueRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/return", returnRoutes);

/* MongoDB Connection */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Library API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});