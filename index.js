const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  //middleware
  res.render("home");
});

app.get("/about", (req, res) => {
  //middleware
  res.render("about");
});

app.get("/skills", (req, res) => {
  //middleware
  res.render("skills");
});

app.get("/contact", (req, res) => {
  //middleware
  res.render("contact");
});

app.listen(8888, () => {
  console.log(`server is running at http://localhost:8888`);
});
