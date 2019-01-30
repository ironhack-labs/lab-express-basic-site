// setup (configuration of your app)

// connect this file to the express npm package
const express = require("express");

// the "app" variable represents our application and all its settings
// (all configuration and content will be defined through "app")
const app = express();

//the listen() method allows our program to accept connections from clients
// (this function will run when the program is ready for connections)
app.listen(5555, () => {
  console.log("Coucou l'app");
});

//connect the "public/" folder to our express app.
// (makes files inside public/ available through our server's domain)
app.use(express.static(__dirname + "/public"));

// routes (content of your app)

// express route - defines a page of content on your app

//2 arguments : the address and a function that defines the content
app.get("/", (request, response, next) => {
  // "response" controls what the client will receive when they visit this route
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/gallery", function(request, response, next) {
  response.sendFile(__dirname + "/views/gallery.html");
});
app.get("/about", function(request, response, next) {
  response.sendFile(__dirname + "/views/about.html");
});
