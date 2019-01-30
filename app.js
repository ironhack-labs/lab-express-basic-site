const express = require("express");

const app = express();

app.listen(2107, () => {
  console.log("Our express is ready ");
});

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response, next) => {
  //'response' controls what the client will receive wehn they visit this route
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/collect", (request, response, next) => {
  response.sendFile(__dirname + "/views/collect.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about-page.html");
});
