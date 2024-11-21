const express = require("express");
const app = express();

app.use(express.static("public"));
// app.use(express.static("views"));

//default
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});
//home
app.get("/home", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});
//about
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});
//works
app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.get("/photos", (request, response, next) => {
  response.sendFile(__dirname + "/views/photos.html");
});

//portdisplay
const port = 3000;
app.listen(port, () => {
  console.log(`***Server is running in port : ${port}***`);
});
