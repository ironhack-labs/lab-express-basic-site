const express = require("express");
const page = express();
page.use(express.static("public"));
page.listen(3000, () => {
  console.log("Server listening on port 3000");
});

page.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home-page.html");
});

page.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about-page.html");
});

page.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works-page.html");
});
