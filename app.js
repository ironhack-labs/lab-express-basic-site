const express = require("express");
const app = express();
var hbs = require("hbs");

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
  })
  
app.get("/about", (req, res) => {
    res.render("about");
  })

app.get("/work", (req, res) => {
    res.render("work");
  })

app.get("/photo-gallery", (req, res) => {
    res.render("photo-gallery");
  })

app.listen (3000, () => {
    console.log("listening to port", 3000);
})