const express = require("express");
const hbs = require("hbs");
const app = express();

//MIDDLEWARE
app.use(express.static('public'));
app.set('views', __dirname + '/views');

//HOME
app.get("/", (req, res) => {
    res.render('home.hbs');
});

app.get("/about", (req, res) => {
    res.render('about.hbs');
});

app.get("/work", (req, res) => {
    res.render('work.hbs');
});


app.listen(3000);