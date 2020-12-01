const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/bio", (req, res) => {
  res.render("bio");
});

app.get("/philanthropy", (req, res) => {
  res.render("philanthropy");
});

app.listen(3000, () => {
  console.log("server is ready ! http://localhost:3000");
});
