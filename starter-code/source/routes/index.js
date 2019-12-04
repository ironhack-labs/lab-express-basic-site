const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "about",
    body:
      "<p> this is the about page, where we explain what the page is about </p>"
  });
});

module.exports = router;
