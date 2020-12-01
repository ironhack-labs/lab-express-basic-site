const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "Home Page",
    css: ["home"],
  });
});

app.get("/content", (req, res) => {
  res.render("content", {
    pageTitle: "Must Try's of 2020",
    css: ["content"],
  });
});

app.get("*", (req, res) => {
  res.send("Oh shucks! 404! There is no ice cream here!");
});

app.listen(3000, () => {
  console.log("ice cream me man : http://localhost:3000");
});
