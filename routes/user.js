const express = require("express");
const router = express.Router();

// http://localhost:8000/api --> see app.js/routes middleware
// app.get("/", (req, res) => {
router.get("/", (req, res) => {
    res.send("<h2>Hello from router</h2>");
});

module.exports = router;
