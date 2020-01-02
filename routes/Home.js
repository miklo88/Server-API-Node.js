const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    url: "/",
    message: "You're in Carl's Home.js",
    operation: "GET"
});

module.exports = router;
