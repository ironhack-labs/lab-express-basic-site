const express = require("express");
const app = express();

// Makes the files in public available for the browser
app.use(express.static("public"));

// app.get(path, code)

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/gallery", (req, res, next) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => console.log("Listening on port 3000"));
