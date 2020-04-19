const express = require("express");
const hbs = require("hbs");
const path = require("path");

const server = express();

server.set("view engine", "hbs");

server.use(express.static(path.join(__dirname, "public")));
server.set('views', path.join(__dirname, 'views'));

server.get("/", (request, response) => {
    response.render("index.hbs", {
      title: "Home Page",
      styles: ["index.css"],
    });
});

server.get("/about", (request, response) => {
    response.render("about.hbs", {
      title: "About Page",
      styles: ["about.css"],
    });
  });

server.get("/works", (request, response) => {
    response.render("works.hbs", {
      title: "Works Page",
      styles: ["works.css"],
    });
});

server.listen(3002, () => {
    console.log("Server running...");
});