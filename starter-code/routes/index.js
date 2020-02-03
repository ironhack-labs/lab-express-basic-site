const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/recipe", (req, res) => {
  res.render("recipe");
});
router.get("/random", (req, res) => {
  res.render("random");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
