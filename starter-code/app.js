// Require Express
const express = require("express");

// Express server handling requests and resposnes
const app = express();


app.use(express.static('public'));

// our first Route:
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

// About Page Route 
app.get("/about", (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

// Photo Gallery Route 
app.get("/photos", (req, res) => {
  res.sendFile(__dirname + '/views/photos.html');
});

//Server Started
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
