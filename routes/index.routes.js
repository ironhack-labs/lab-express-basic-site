

const express = require("express");
const { imgSrcs } = require("../data");

const router = express.Router();

router.get("/", (request, response) => {
  response.render("home");
});

router.get("/about", (request, response) => {
  response.render("about");
});

router.get("/works", (request, response) => {
  response.render("works");
});

router.get("/photo-gallery", (request, response) => {
  response.render("photo-gallery", { imgSrcs });
});

module.exports = router;