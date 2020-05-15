const express = require("express");
const hbs = require("hbs");
const app = express();

//Middleware
app.use(express.static("public"));
app.set("views", __dirname + "/views");

//Routes
app.get("/", (req, res) => {
  res.render("index.hbs");
});
app.get("/", (req, res) => {
  res.render("index.hbs");
});
app.get("/about", (req, res) => {
  res.render("about.hbs");
});
app.get("/photo", (req, res) => {
  res.render("photo.hbs");
});

app.listen(3000);
