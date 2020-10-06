const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/views/home.html");
})

app.get("/works", function (req, res) {
  res.sendFile(__dirname + "/views/works.html");
})
app.get("/gallery", function (req, res) {
  res.sendFile(__dirname + "/views/gallery.html");
})

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/views/404.html");
})
app.listen(3000, () => {
  console.log('Works !')
})