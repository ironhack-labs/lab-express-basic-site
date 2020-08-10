// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// Home-page Route:
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});
// About-page Route:
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about-page.html");
});
// Works-page Route:
app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works-page.html");
});
// Photos-page Route:
app.get("/photos", (request, response, next) => {
  response.sendFile(__dirname + "/views/photos-page.html");
});

// Server Started
app.listen(3001, () => {
  console.log("My first app listening on port 3001!");
});
