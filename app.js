const express = require("express");

const app = express();

app.use(express.static('public'));

app.get("/", (request, response, next) => {
  response.status(200).sendFile(__dirname + '/views/home-page.html');
});

app.get("/about",(request, response, next) => {
  response.status(200).sendFile(__dirname + '/views/about-page.html');
});

app.get("/works",(request, response, next) => {
  response.status(200).sendFile(__dirname + '/views/works-page.html');
});

const port = 3000;

app.listen(3000, () => {
  console.log(`App listening on port ${port}`);
});
