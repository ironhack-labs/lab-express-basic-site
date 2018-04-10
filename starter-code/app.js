// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

app.use(express.static('public'));
app.use(express.static('views'));
// our first Route:
app.get("/", (request, response) => {

  response.sendFile(__dirname + "/views/home.html");
});

app.get("/gallery", (request, response) => {
  
  
    response.sendFile(__dirname + "/views/gallery.html");
  });

  app.get("/about", (request, response) => {
  
  
    response.sendFile(__dirname + "/views/about.html");
  });

// Server Started
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});

