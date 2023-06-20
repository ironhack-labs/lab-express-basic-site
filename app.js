const express = require("express");
const { mkdir } = require("fs");

const app = express();

app.use(express.static("public"));

app.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/views/index.html")
);

app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);

app.get("/contribution", (request, response, next) =>
  response.sendFile(__dirname + "/views/contribution.html")
);

console.log(__dirname);

app.listen(2500, () => console.log("My first app listening on port 2500! "));