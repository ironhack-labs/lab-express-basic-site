// Setup
const express = require("express");

const app = express();

app.listen(9000, () => {
  console.log("Our server is AWESOME!");
});

app.use(express.static(__dirname + "/public"));



// Routes configuration
app.get("/", (request, response, next) => {
  // "response" controls what clients will get when they visit this route
  response.sendFile(__dirname + "/views/homepage.html");
  // ("__dirname" is directory name - the dolder where this file is located)
});

app.get("/about", (request, response, next) => {
  // "response" controls what clients will get when they visit this route
  response.sendFile(__dirname + "/views/about.html");
  // ("__dirname" is directory name - the dolder where this file is located)
});

app.get("/gallery", (request, response, next) => {
  // "response" controls what clients will get when they visit this route
  response.sendFile(__dirname + "/views/photos.html");
  // ("__dirname" is directory name - the dolder where this file is located)
});