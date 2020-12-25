const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

require("dotenv").config();




//PUBLIC
/// reach images?
app.use(express.static("public"));

// //ROUTES
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});


app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});