const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  // res.send('Goodbye World!');
  response.sendFile(__dirname + "/public/home.html");
});

// refers to the HTTP GET method
app.get('/about', (request, response) => {
  response.sendFile(__dirname + "/public/about.html");
})

// refers to the HTTP GET method
app.get('/gallery', (request, response) => {
  response.sendFile(__dirname + "/public/gallery.html");
})

app.listen(3000);