const express = require("express");
const app = express();
const port = 5000;

app.use(express.static("public"));


app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.listen(port, () => {
  console.log(`My first app in 5000`)
});