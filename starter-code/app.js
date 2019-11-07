const express = require("express");
const app = express(); //returns the server object

app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (request, response) => {
  //   response.render("index", { layout: true });
  response.render("index");
});

app.get("/about", (request, response) => {
  response.render("about");
});

app.get("/gallery", (request, response) => {
  response.render("gallery");
});

app.listen(3000);
