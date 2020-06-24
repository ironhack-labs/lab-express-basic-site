// Instructions:
// Your Website should have (at least) 3 pages:

// A Home page, that welcomes the visitor and links to the other pages on the website.
// An About page, that shares some basic information about the person.
// A Works page, where you showcase some of the work of the person you chose.
// Bonus: A Photo Gallery page, displaying some pictures of the person/their work.

const express = require("express");

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get('/works', (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});