const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  //console.log(request.url)
  res.sendFile(`${__dirname}/views/home.html`);
});

app.get("/about", (req, res, next) => {
  res.sendFile(`${__dirname}/views/about.html`);
});

app.get("/works", (req, res, next) => {
  res.sendFile(`${__dirname}/views/works.html`);
});

app.get("/photogallery", (req, res, next) => {
  res.sendFile(`${__dirname}/views/photogallery.html`);
});

app.use(express.static("public"));

app.listen(3000, () => {
  console.log(" listening");
});
