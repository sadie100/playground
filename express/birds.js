const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.sendFile("../react-app/build/index.html");
});

module.exports = router;
