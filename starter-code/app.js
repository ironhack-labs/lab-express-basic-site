const express = require("express");

const app = express();

app.use(express.static('public'));
app.get("/index", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/about", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/about.html');
});

app.get("/images", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/images.html');
});

app.listen(3000, () => {
  console.log("Daily Exercise");
});

