const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/home", (request, response, next) => {
  response.sendFile(__dirname + "/views/Home.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/About.html");
});

app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/Works.html");
});

app.get("/photos", (request, response, next) => {
  response.sendFile(__dirname + "/views/Photo_Gallery.html");
});

app.listen(8080, () => console.log("My first app listening on port 8080! "));
