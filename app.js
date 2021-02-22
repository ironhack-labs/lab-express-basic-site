console.log("version 1.1")

const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("work");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/photo-gallery", (req, res) => {
    res.render("photo-gallery");
});

app.get("*", (req, res) => {
    res.send("Page not found");
});

app.listen(3002, () => {
    console.log("ready @ http://localhost:3002")
});






