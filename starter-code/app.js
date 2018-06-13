// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

//public folder
app.use(express.static("public"));

// our first Route:
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/public/views/home-page.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/public/views/about.html");
});

app.get("/quotes", (request, response, next) => {
  response.sendFile(__dirname + "/public/views/quotes.html");
});

// Server Started
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
