const express = require("express");
const hbs = require("hbs");
const { dirname } = require("path");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "homepage",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "about page",
  });
});

app.listen(3000, () => {
  console.log("server is ready ! http://localhost:3000");
});
