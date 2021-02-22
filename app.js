const express = require("express");
const hbs = require("hbs")

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/works", (req, res) => {
    res.render("works")
})

app.get("*", (req, res) => {
    res.send("There is nothing here")
})

app.listen(3001, () => {
    console.log("You can go to http://localhost:3001")
})