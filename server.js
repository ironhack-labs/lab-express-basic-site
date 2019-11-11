const express = require("express"); // mandatory lines
const hbs = require("hbs");
const path = require("path");
const server = express();
const port = 8080;

server.use(express.static(path.join(__dirname, "public")));
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "hbs");

server.get("/", (request, response) => {
  response.render("home", {
    title: "Charlotte Perriand, 1903 - 1999",
    p: "abc"
  });
});

server.get("/about", (request, response) => {
  response.render("about", {
    title: "Her life"
  });
});

server.get("/photos", (request, response) => {
  response.render("photos", {
    title: "Galerie photos"
  });
});

server.listen(port);
