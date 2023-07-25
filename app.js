const express = require("express");

const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/Home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/About.html");
});

app.get("/photogallery", (req, res) => {
  res.sendFile(__dirname + "/views/Photo gallery.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/Works.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
