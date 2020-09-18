const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  res.send("test");
});

router.get("/weather", (req, res) => {
  res.send("weather endpoint");
});

router.get("*", (req, res) => {
  res.send("page not found");
});

module.exports = router;
