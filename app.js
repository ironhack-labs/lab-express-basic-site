require("dotenv").config();

// DATABASE CONNECTION
require("./config/mongodb");

const express = require("express");
const app = express();
const path = require("path");
const { ppid } = require("process");
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/images"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

const images = [
  "img-1.jpg",
  "img-2.jpg",
  "img-3.jpeg",
  "img-4.jpg",
  "img-5.jpg",
  "img-6.jpg",
  "img-7.jpg",
  "img-8.jpg",
  "img-9.jpg",
  "img-10.jpg",
  "img-11.jpg",
  "img-12.jpg",
  "img-13.jpg",
];


app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/discover", (req, res) => {
  res.render("discover", { js: ["discover"] });
});

app.get("/galery", (req, res) => {
  res.render("galery", { images, css: ["img-css"] });
});

app.get("/doc", (req, res) => {
  res.render("doc");
});

app.listen(8888, () => {
  console.log(`server is running at http://localhost:8888`);
});
