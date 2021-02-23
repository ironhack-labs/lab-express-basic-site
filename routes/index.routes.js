const express = require("express");
const { films } = require("../data");

const router = express.Router();

router.get("/", (request, response) => {
  response.render("home");
});

router.get("/about", (request, response) => {
  response.render("about");
});

router.get("/works", (request, response) => {
  response.render("works", { films });
});

router.get("/photo-gallery", (request, response) => {
  response.render("photo-gallery");
});

module.exports = router;
