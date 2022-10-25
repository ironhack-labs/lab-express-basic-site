// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

// telling express all the static files are inside of "public"
app.use(express.static("public"));

// create a route in express

app.get("/home", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/home.html");
});

app.get("/galery", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/galery.html");
});

app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/works.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.listen(3000);
