const express = require("express");
const router = new express.Router();

router.get(["/", "/home"], (req, res) => {
  res.send("homepage");
});

router.get("/about", (req, res) => {
  res.send("about page");
});

router.get("/contact", (req, res) => {
  res.send("contact page");
});

module.exports = router;
