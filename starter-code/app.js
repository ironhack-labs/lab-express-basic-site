const express = require("express");
const app = express()
const PORT = 4100
app.use(express.static("public"));

app.get('/index', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(PORT)
console.log(`Listening on port ${PORT}` )