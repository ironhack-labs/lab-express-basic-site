const express = require("express");
const router = new express.Router();

router.get(["/", "/home"], (req, res) => {
    res.render("home.hbs");
});

router.get("/about", (req, res) => {
    res.render("about.hbs")
});

router.get("/works", (req, res) => {
    res.render("works.hbs")
});

module.exports = router;