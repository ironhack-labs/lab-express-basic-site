const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static("public"));

app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/about");
hbs.registerPartials(__dirname + "/views/works");
hbs.registerPartials(__dirname + "/views/gallery");

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

app.listen(3000);