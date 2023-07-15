const express = require("express");

const app = express();

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

app.get("/", (req, res, next) => {
  res.render("home", {});
});

app.get("/works", (req, res, next) => {
  res.render("works", {});
});
app.get("/photoGallery", (req, res, next) => {
  res.render("photoGallery", {});
});
app.get("/about", (req, res, next) => {
  res.render("about", {});
});

const port = 3000;
app.listen(port, () => console.info(`Application runnning at port ${port}`));
