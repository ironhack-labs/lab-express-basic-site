const express = require("express");
const hbs = require("hbs");
//init app object
const app= express();

//app config
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs")

//routes

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/works", (req, res) => {
    res.render("works");
});

app.get("/gallery", (req, res) => {
    res.render("gallery");
})

app.get("*", (req, res) => {
    res.render("Oops, not found");
})

app.listen(3000, () => {
    console.log("ready @ http://localhost:3000");
  });