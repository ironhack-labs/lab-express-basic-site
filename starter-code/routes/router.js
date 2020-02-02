const express = require("express");
const router = new express.Router();

router.get("/home", (req, res) => {
    res.render("home");
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/gallery", (req, res) => {
    res.render("gallery");
})

module.exports = router;