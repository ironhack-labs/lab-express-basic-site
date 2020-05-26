// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

function ourMiddleWare(req, res, next) {
  console.log(__dirname);
  next();
}

app.use(ourMiddleWare);
app.use(express.static("public"));

// route with 'send' method
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

///Server Started - listening for request
app.listen(3000, () => {});
