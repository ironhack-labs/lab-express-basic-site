const express = require('express');
const hbs = require('hbs');
const port = 3000;
const app = express();


//MIDLWARE
app.use(express.static('public'));
app.set('views', __dirname + '/views');


app.get("/", (req, res) => {
    res.render("home.hbs");
});

app.get("/about", (req, res) => {
    res.render("about.hbs");
});
app.get("/works", (req, res) => {
    res.render("works.hbs");
});
app.get("/gallery", (req, res) => {
    res.render("gallery.hbs");
});

app.listen(port);
