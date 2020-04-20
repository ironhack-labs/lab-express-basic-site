// Put all website URLs in this file

const express = require("express")
const router = new express.Router();


// Setting up URLs:

router.get("/",  function (request, response) {
    response.render("index.hbs", {
        name: "Corgi",
        creator : ["M. Corgi", "Sébastien"],
        age:4
    });
});
router.get("/index",  function (request, response) {
    response.render("index.hbs");
});
router.get('/home', function (request, response) {
    response.render("home.hbs");
});

router.get("/about", function (request, response) {
    response.render("about.hbs");
});

router.get("/photo-gallery", function (request, response) {
    response.render("photo-gallery.hbs");
});

router.get("/works", (request, response) => {
    response.render("works.hbs");
});


// Export it

module.exports = router;