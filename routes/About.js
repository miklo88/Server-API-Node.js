const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    url: "/",
    message: "You're getting to know Carl. About.js",
    operation: "GET"
  });
});

module.exports = router;
