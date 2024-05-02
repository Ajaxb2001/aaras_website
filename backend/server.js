// server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Environment variables
const port = process.env.PORT || 5000;
const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/aaras_regi";

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

// Schema for Registration
const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

// Model for Registration
const Registration = mongoose.model("Registration", registrationSchema);

// Routes
app.post("/register", (req, res) => {
  const registration = new Registration(req.body);
  registration
    .save()
    .then((item) => res.status(201).json(item))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
