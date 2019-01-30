// Setup
// ---------------------
// #####################

// connect this file to the express npm package
const express = require("express");

// the "app" variable represents our application and all its settings
// (all configuration and content will be defined through "app")
const app = express();

// the listen method allows our program to accept connections from clients
// (this function will run when the program is ready for connection)
// app.listen(5555, function() {
//   console.log("Our Express app is ready");
// });

// or with an arrow function
app.listen(5555, () => {
  console.log("Our Express app is ready");
});

// connect the public folder to our application
// (makes files inside "public" available through our server's domain)

app.use(express.static(__dirname + "/public"));

// ("__dirname" is "directory name" - the folder where the current file is located)

// Routes (content of the wbsite)
// ---------------------
// #####################

// Express Route - defines a page of content on your app
// 2 ARGUMENTS: adress and a function that defines the content
// app.get("/", function(request, response, next) {
//   // "response" controls what the client will receive when they visit the route
//   response.send("<h1>Hello, world!</h1>");
// });

app.get("/", (request, response, next) => {
  // "response" controls what the client will receive when they visit the route
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response, next) => {
  // "response" controls what the client will receive when they visit the route
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response, next) => {
  // "response" controls what the client will receive when they visit the route
  response.sendFile(__dirname + "/views/gallery.html");
});
