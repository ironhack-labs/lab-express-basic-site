// configuration
// -------------------------
// pull in the express package
const express = require("express");
//app variable to set up/configure everything else
// app variable represents our application - all configuration & content will be defined through it
const app = express();

// MAKE EXPRESS AWARE OF public/ folder
//  makes all files inside available through localhost:3000
app.use(express.static(__dirname + "/public"));

// ROUTES
// -------------------------
//ROUTE STRUCTURE
// app.VERB("URL", CALLBACK);
// coolwebsite.pizza
// GET request to localhost:3000/
// route handlers/ route callbacks
// app.get("/", function(request, response, next) {
//   response.send("<h1>Welcome, Ironhacker.</h1>")
// });
// as arrow function:
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

// GET request to localhost:3000/cat

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});


app.listen(3000, () => {
  console.log("I'm listening!");
});