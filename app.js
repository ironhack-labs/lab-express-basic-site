const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.listen(2000, () => {
  console.log("Fanpage of the coockiemonster!");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.get("/home-page", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});
