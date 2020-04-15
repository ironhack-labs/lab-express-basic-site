const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/homepage.html");
});

app.listen(3000, () => {
  console.log("Congrats, im working!");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});
