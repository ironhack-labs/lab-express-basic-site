const express = require("express");

const { album } = require("../work-data")

const router = express.Router();

router.get("/", (request, response) => {
    response.render("index")
});

router.get("/about", (request, response) => {
    response.render("about")
})

router.get("/works", (request, response) => {
    response.render("works", { album })
})

module.exports = router