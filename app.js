const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(4000, () => console.log("My first app listening on port 4000! "));

app.get("/home", (request, response) => {
  const htmlFile = `${__dirname}/public/home.html`;

  response.sendFile(htmlFile);
});

app.get("/image", (request, response) => {
  const htmlFile = `${__dirname}/public/image.html`;

  response.sendFile(htmlFile);
});

app.get("/about", (request, response) => {
  const htmlFile = `${__dirname}/public/about.html`;

  response.sendFile(htmlFile);
});

app.get("/works", (request, response) => {
  const htmlFile = `${__dirname}/public/works.html`;

  response.sendFile(htmlFile);
});
