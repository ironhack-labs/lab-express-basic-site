//REQUIRED DEPENDENCIES
const express = require("express");
const app = express();
const hbs = require("hbs");
const mongoose = require("mongoose");
const Quotes = require("./models/ModelQuote");

//DATEBASE CONNECTION
require("./config/dataMongoDB");

//TEMPLATE ENGINE CONFIG
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about", {css:["about"]});
});

const listOfBooks = [
  { title: "The colour of Magic", image: "/img/color.jpg" },
  { title: "Pyramids", image: "/img/book1.jpg" },
  {
    title: "Going postal",
    image: "/img/book22.jpg",
  },
  {
    title: "Witches abroad",
    image: "/img/book3.jpg",
  },
  {
    title: "Making money",
    image: "/img/book42.jpg",
  },
];
const listOfOthers = [
  { title: "Good omens", image: "/img/goodomens2.jpg" },
  { title: "The long Earth", image: "/img/longEarth.jpeg" },
  {
    title: "Nation",
    image: "/img/nation2.jpg",
  },
];

app.get("/works", (req, res) => {
  res.render("works", { listOfBooks, listOfOthers, css:["works"]});
});

app.listen(8080, () => {});

module.exports = app;
