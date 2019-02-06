const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static(__dirname + "public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home-page.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/photos", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});
app.get("/thepage", (req, res) => {
  res.sendFile(__dirname + "/views/first-page.html");
});

app.listen(3000, function() {
  console.log("les get it");
});
