const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    url: "/",
    message: "You're getting ahold of Carl. Contact.js",
    operation: "GET"
  });
});

module.exports = router;
