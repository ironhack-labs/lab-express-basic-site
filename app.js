const express = require("express");
const path = require("path");

const app = express();

// Make everything inside of public/ available

app.use(express.static("public"));
//app.use(express.static(__dirname + "/public"));
//app.use(express.static(path.join(__dirname, '/public')));

app.get("/home", (request, response, next) => {
  response.sendFile(path.join(__dirname, "/views/home-page.html"));
});

app.get("/about", (request, response, next) => {
  response.sendFile(path.join(__dirname, "/views/about-page.html"));
});

app.get("/works", (request, response, next) => {
  response.sendFile(path.join(__dirname, "/views/works-page.html"));
});

app.get("/photos", (request, response, next) => {
  response.sendFile(path.join(__dirname, "/views/photos-page.html"));
});

app.listen(3000, () => console.log("My first app listening on port 3000! "));
