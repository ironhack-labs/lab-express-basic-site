const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/cat", (request, response) => {
  response.sendFile(__dirname + "/views/cat-page.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
