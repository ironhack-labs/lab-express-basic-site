const express = require("express");
// Create the express app
const app = express();

// Configure the public folder, for css js and .png
app.use(express.static("public"));

app.set("views", __dirname + "/views");

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html')
});

app.get('/works', (req, res, next) => {
  res.sendFile(__dirname + '/views/works.html')
});

app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery.html')
});

// Listen on port 3000
app.listen(3000, () => console.log("Listening on port 3000!"));