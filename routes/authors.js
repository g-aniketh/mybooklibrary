const express = require("express");
const { route } = require(".");
const router = express.Router();

// All Authors Route
router.get("/", (req, res) => {
  res.render("authors/index");
});

// New Author
router.get("/new", (req, res) => {
  res.render("authors/new");
});

// Create Author Route
router.post("/", (req, res) => {
  res.status(201);
});

module.exports = router;
