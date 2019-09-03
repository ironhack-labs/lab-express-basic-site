//Save in the variable "express" the content of the package "express"
const express = require("express");

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
// Example: http://localhost:3001/wave.gif (without "/public")
// Example: http://localhost:3001/styles/style.css 
app.use(express.static("public"));

// our first Route "/" (http://localhost:3000)
app.get("/", (request, response, next) => {
  console.log("DEBUG request.url", request.url);
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/photogallery", (request, response, next) => {
  console.log("DEBUG request.url", request.url);
  response.sendFile(__dirname + '/views/photogallery.html');
});

app.get("/about", (request, response, next) => {
  console.log("DEBUG request.url", request.url);
  response.sendFile(__dirname + '/views/about.html');
 
});

// $ nodemon app.js --> to start the sever
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
