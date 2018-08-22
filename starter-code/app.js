const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/photogal.html");
});

app.listen(3000);
