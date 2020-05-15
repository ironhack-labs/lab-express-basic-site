const express = require("express");
const hbs = require("hbs");

const app = express();

//MIDDLEWARE
app.use(express.static("./public"));
app.set("views", __dirname + "/views");

app.get("/home", (req, res) => {
  res.render("home.hbs");
});
app.get("/about", (req, res) => {
  res.render("about.hbs");
});
app.get("/works", (req, res) => {
  res.render("works.hbs");
});
app.get("/photogalley", (req, res) => {
  res.render("photogallery.hbs");
});

app.listen(3000);
