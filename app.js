const express = require("express");

// CREATE SERVER

const app = express();

// MIDDLEWARE

app.use(express.static("public"));

// ROUTES

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/works.html");
});

app.get("/gallery", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/gallery.html");
});

// START SERVER

app.listen(3000, (req, res, next) => {
  console.log("server is running on port 3000");
});
