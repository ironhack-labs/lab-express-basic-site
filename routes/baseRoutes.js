const express = require("express");
const router = express.Router();
const userModel = require("../models/user");

router.get("/", (req, res) => {
    res.render("logIn.hbs", {

    });
});

// Create
router.post("/home", (req, res) => {
    userModel.create(req.body)
        .then((dbResult) => {
            userModel.find({})
                .then((dbResult) => {
                    res.render("home.hbs", {
                        users: dbResult,
                        error: "You need to enter all the fields..."
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
});


router.get("/home", (req, res) => {
    res.render("home.hbs")
})

router.get("/practice", (req, res) => {
    res.render("practice.hbs")
})

router.get("/links", (req, res) => {
    res.render("links.hbs")
})


module.exports = router;