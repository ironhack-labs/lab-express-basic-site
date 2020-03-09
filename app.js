const express = require('express');
const hbs = require('hbs');

const app = express();

var works = require("./works.json");

app.use(express.static('public'))
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get("/", (req, res) => {
    res.render("home");
})
app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/works", (req, res) => {
    res.render("works", {
        works: works
    });
})

app.listen(3000, () => {
    console.log("listening on port", 3000)
})