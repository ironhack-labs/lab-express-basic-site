const express = require("express");
const { request, response } = require("express");

const app = express();

app.use(express.static("views"));
app.use(express.static("public"));

app.get("/index", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
  response.sendFile(__dirname + "/public/style.css")
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
  response.sendFile(__dirname + "/public/style.css")
});

app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.listen(3000, () => console.log("Server up and running on port 3000"));
