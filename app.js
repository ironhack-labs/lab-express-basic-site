// jshint esversion:6

const express = require("express");
const app = express();
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   //console.log(req);
//   res.send("hello from the home page");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/photo-gallery", (req, res) => {
  res.sendFile(__dirname + "/views/photo-gallery.html");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
