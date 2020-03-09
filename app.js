const express = require("express");
const app = express();
var hbs = require(`hbs`);

app.use(express.static("public"));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');

app.get("/", (req, res) =>{
    res.render("home");
})

app.get("/about", (req, res) =>{
  res.render("about");
})

app.get("/works", (req, res) =>{
  res.render("works");
})

app.get("/gallery", (req, res) =>{
  res.render("gallery");
})

app.listen (3000, () => {
    console.log("listening to port", 3000);
})