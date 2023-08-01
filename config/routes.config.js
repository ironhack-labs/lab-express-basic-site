const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.render("home", {
        name: "Antonio", date: new Date(),
    })
});

router.get('/about', (req, res) => {
    res.render('about');
}); 

router.get('/works', (req, res, next) => {
    res.render('works');
})

module.exports = router;