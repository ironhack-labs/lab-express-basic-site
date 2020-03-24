const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about-page.html");
  });
  
  app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works-page.html");
  });
  
  app.get("/photo-gallery", (req, res, next) => {
    res.sendFile(__dirname + "/views/photo-gallery-page.html");
  });

app.listen(3000, () => {
  console.log("Server online");
});
