const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  const htmlFile = `${__dirname}/public/views/index.html`;

  response.sendFile(htmlFile);
});

app.get("/about", (request, response) => {
  const htmlFile = `${__dirname}/public/views/about.html`;

  response.sendFile(htmlFile);
});

app.get("/works", (request, response) => {
  const htmlFile = `${__dirname}/public/views/works.html`;

  response.sendFile(htmlFile);
});

app.get("/gallery", (request, response) => {
  const htmlFile = `${__dirname}/public/views/gallery.html`;

  response.sendFile(htmlFile);
});

app.listen(4000, () => console.log("Hello"));
