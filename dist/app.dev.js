"use strict";

var express = require("express"); //paso 1 -> express


var app = express();
app.use(express["static"]("public"));
app.get("/", function (req, res) {
  // console.log(__dirname)
  res.sendFile("".concat(__dirname, "/views/index.html"));
});
app.get("/peng", function (req, res) {
  res.sendFile("".concat(__dirname, "/views/peng.html"));
});
app.get("/transient", function (req, res) {
  res.sendFile("".concat(__dirname, "/views/transient.html"));
});
app.get("/mars", function (req, res) {
  res.sendFile("".concat(__dirname, "/views/mars.html"));
});
app.get("/emperor", function (req, res) {
  res.sendFile("".concat(__dirname, "/views/emperor.html"));
});
app.get("/dots", function (req, res) {
  res.sendFile("".concat(__dirname, "/views/dots.html"));
});
app.get("/cobra", function (req, res) {
  res.sendFile("".concat(__dirname, "/views/cobra.html"));
});
app.get("/sound-dust", function (req, res) {
  res.sendFile("".concat(__dirname, "/views/sound-dust.html"));
});
app.get("/margerine", function (req, res) {
  res.sendFile("".concat(__dirname, "/views/margerine.html"));
});
app.get("/chemical", function (req, res) {
  res.sendFile("".concat(__dirname, "/views/chemical.html"));
});
app.get("/not-music", function (req, res) {
  res.sendFile("".concat(__dirname, "/views/not-music.html"));
}); // Ponemos al server a escuchar las peticiones

app.listen(3000, function () {
  console.log("listening on: http://localhost:3000");
});