const express = require("express");

// we create our own server named app
// express server habdling requests and responses
const app = express();

// make everything inside of /public available
app.use(express.static("public"));

// our first route: GET http://localhost:3000
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html")
});
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html")
});
app.get("/photo-gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/photo-gallery.html")
});

// starts the server
app.listen(3000, () => {
  console.log("My first is ready: http://127.0.0.1:3000!");
});
