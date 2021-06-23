const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", function (req, res) {
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/photo-gallery", function (req, res) {
  res.sendFile(__dirname + "/views/photo-gallery.html");
});

app.listen(3000, function () {
  console.log("Server listening");
});
