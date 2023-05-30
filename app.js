const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/homepage.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.listen(3001, () => {
  console.log("server is listening");
});
