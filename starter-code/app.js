const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.static("views"));

// `.get` refers to the HTTP GET method

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});
app.get("/photo", (request, response) => {
  response.sendFile(__dirname + "/views/photo.html");
});

app.listen(3000);
