const express = require("express");
// the "app" variable represents our application and all its settings
// (all cnfiguation and content will be defined through app)
const app = express();

app.listen(2828, () => {
  console.log("Our Express app about Asian Food is READY!");
});

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response, next) => {
  //"response" controls what the client will receive
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response, next) => {
  //"response" controls what the client will receive
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/photo-gallery", (request, response, next) => {
  //"response" controls what the client will receive
  response.sendFile(__dirname + "/views/photo-gallery.html");
});
