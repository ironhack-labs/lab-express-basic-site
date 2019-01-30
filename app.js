const express = require("express");
const app = express();
app.listen(5556, () => {
  console.log("our app is ready");
});

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/photos", (request, response, next) => {
  response.sendFile(__dirname + "/views/photos.html");
});
