
const express = require('express');
 
// We create our own server named app
// Express server handling requests and responses
const app = express();


app.use(express.static("public"));

app.get("/", (request, response, next) => {
  response.status(200).sendFile(__dirname + '/views/home.html')
});

app.get("/about", (request, response, next) => {
  response.status(200).sendFile(__dirname + '/views/about.html');
});

app.get("/works", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/works.html');
});

app.get("/photos", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/photo-gallery.html');
});

const port = 3000;

app.listen(3000, () => {
  console.log(`App listening on port ${port}`);
});
