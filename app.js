const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/argentina", (req, res) => {
  res.render("argentina", {
    name: "",
    capital: "",
    language: "",
    population: 0,
    religion: "",
    area: "",
    GDP: "",
    currency: "",
    timeZone: "",
    culture: "",
  });
});

app.get("/china", (req, res) => {
  res.render("china", {
    name: "",
    capital: "",
    language: "",
    population: 0,
    religion: "",
    area: "",
    GDP: "",
    currency: "",
    timeZone: "",
    culture: "",
  });
});

app.get("/france", (req, res) => {
  res.render("france", {
    name: "",
    capital: "",
    language: "",
    population: 0,
    religion: "",
    area: "",
    GDP: "",
    currency: "",
    timeZone: "",
    culture: "",
  });
});

app.listen(3000);
