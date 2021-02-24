const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.render("index");
});

router.get("/about", (request, response) => {
  response.render("about");
});

router.get("/works", (request, response) => {
  response.render("works");
});

router.get("/gallery", (request, response) => {
  response.render("gallery");
});

module.exports = router;
