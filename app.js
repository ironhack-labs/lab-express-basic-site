const express = require("express");
//const { path } = require("express/lib/application");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  console.log("welcome to my home");
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res, next) => {
  console.log("welcome to about");
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res, next) => {
  console.log("welcome to works");
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/gallery", (req, res, next) => {
  console.log("welcome to gallery");
  res.sendFile(__dirname + "/views/photo-gallery.html");
});

app.listen(80, () => {
  console.log("im listening");
});
