const express = require("express");

const { discography } = require("../data");

const router = express.Router();

router.get("/", (request, response) => {
  response.render("index");
});

router.get("/about", (request, response) => {
  response.render("about");
});

router.get("/works", (request, response) => {
  response.render("works", { discography: discography }); 
});

module.exports = router;