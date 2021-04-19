const express = require("express");

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get("/", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/home.html")
});

app.get("/about", (request, response, next) => response.sendFile(__dirname + "/views/about.html"))

app.get("/portfolio", (request, response, next) =>
  response.sendFile(__dirname + "/views/portfolio.html")
);

app.get("/gallery", (request, response, next) =>
  response.sendFile(__dirname + "/views/gallery.html")
);

// ... the previously added code
// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));
