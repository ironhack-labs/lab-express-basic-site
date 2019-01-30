// Setup (configuration of your app)
// --------------------------------------------------------------------------------------------

// connect this file to the Express npm package
const express = require("express");

// the "app" variable represents our application and all its settings
// (all configurations and content will be defined through "app")
const app = express();

// the listen() method allows our program to accept connections from clients
// (this function will run when the program is ready for connections)
app.listen(3333, () => {
  console.log("Our Express Basic Site app is ready!");
});

// connect the "public" folder to our Express app
// (makes files inside "public/" available through our server's domain)
app.use(express.static(__dirname + "/public"));
// ("__dirname" is "directory name" - the folder where the current file is located)

// Routes (content of your app)
// --------------------------------------------------------------------------------------------

app.get("/", (request, response, next) => {
  // "response" controls what the client will receive when they visit this route
  response.sendFile(__dirname + "/views/index.html");
  // ("__dirname" is "directory name" - the folder where the current file is located)
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});
