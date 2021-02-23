const express = require("express");
const hbs = require("hbs");
const app = express();


app.use(express.static(__dirname+"/public"));
app.set("views", __dirname+"/views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/exercises", (req, res) => {
    res.render("exercises");
});

app.get("/books", (req, res) => {
    res.render("books");
});

app.get("/newsletter", (req, res) => {
    res.render("newsletter");
});


app.get("*", (req, res) => {
    res.send("404, sorry page not found!");
});

app.listen(3000, () => {
    console.log("Your website is live @ http://localhost:3000");
});



