// Express setup
const express = require("express");
const app = express();

app.listen(4567, () => {
  console.log("Our Modjo is ready");
});

// Connect public folder
app.use(express.static(__dirname + "/public"));

// Express Routes
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about-page", (request, response, next) => {
  response.sendFile(__dirname + "/views/about-page.html");
});

app.get("/gallery-page", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery-page.html");
});
