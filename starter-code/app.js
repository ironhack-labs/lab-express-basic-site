const express = require("express");
const hbs = require("hbs");
const _ = require("lodash");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/photo-gallery", (req, res) => {
  res.render("photo-gallery");
});

app.get("/extras", (req, res) => {
  res.render("extras");
});

const port = 4000;
app.listen(port, () => console.log(`Ready on port ${port}`));
