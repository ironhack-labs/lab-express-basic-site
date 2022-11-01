const express = require("express");
const hbs = require("hbs");

const app = express();
app.set("view engine", "hbs");
app.use(express.static("public"));
/////////////////////////////////

// Route home

app.get("/", (req, res) => {
  res.render("index");
});
// Route menu

app.get("/menu", (req, res) => {
  res.render("menu");
});

// Route about

app.get("/about", (req, res) => {
  res.render("about");
});

// Route works

app.get("/works", (req, res) => {
  res.render("works");
});

//404
app.all("*", function (req, res) {
  res.json({ message: "Page not found" });
});

// Server start
app.listen(3000, () => console.log("Server started"));
