const express = require("express");
const hbs = require("hbs");
const path = require("path");
const server = express();

console.log(__dirname);

server.use(express.static(path.join(__dirname, "public")));
server.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "views/partials"));

server.get("/", (request, response) => {
  response.render("index");
});

server.get("/About", (request, response) => {
  response.render("about");
});

server.get("/Work", (request, response) => {
  response.render("work");
});

server.get("/photo_gallery", (request, response) => {
  response.render("photo");
});

server.listen(3001, () => {
  console.log(`Server running at http://localhost:3001`);
});
