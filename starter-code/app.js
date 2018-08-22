const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "./public")));

// app.get("/style.css", (reg, res) => {
//   console.log(__dirname);
//   console.log("hello");
//   //res.sendFile(path.join(__dirname, "./style.css"));
// });

app.get("/", (reg, res) => {
  console.log("hello");
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/about", (reg, res) => {
  res.sendFile(path.join(__dirname, "./views/about.html"));
});

app.get("/gallery", (reg, res) => {
  res.sendFile(path.join(__dirname, "./views/gallery.html"));
});

app.listen(3000);
