const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/home", (request, response) => {
  const home = `${__dirname}/views/home.html`;

  response.sendFile(home);
});

app.get("/about", (request, response) => {
  const about = `${__dirname}/views/about.html`;

  response.sendFile(about);
});

app.get("/gallery", (request, response) => {
  const gallery = `${__dirname}/views/gallery.html`;

  response.sendFile(gallery);
});

app.get("/works", (request, response) => {
  const works = `${__dirname}/views/works.html`;

  response.sendFile(works);
});

app.listen(4000);
