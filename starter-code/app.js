const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile("/public/index.html");
});

app.get("/quotes", (req, res) => {
  res.sendFile(__dirname + "/public/quotes.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/public/gallery.html");
});

app.listen(3000, () => {
  console.log('server is up!');
});


