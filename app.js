const express = require("express");

// We create our own server named app
// Express server handling requests and responses
const app = express();

app.use(express.static("public"));

app.get("/home", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/books", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/books.html");
});

app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
