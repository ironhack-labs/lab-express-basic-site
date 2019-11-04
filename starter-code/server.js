// set json and express
console.log("hello test");
const express = require("express");
const hbs = require("express");
const path = require("path");
const server = express();
const port = 5501;

// initial setup
server.use(express.static(path.join(__dirname, "public")));
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "hbs");
//

server.get("/", (request, response) => {
  response.render("home", {
    // container: "",
    title: "Welcome in one Day one Cocktail",
    icon: '<i class="fas fa-cocktail"></i>',
    css: ["home", "about", "photo", "styles"]
  });
});

server.get("/about", (request, response) => {
  response.render("about", {
    title: "More about us",
    icon: '<i class="fas fa-cocktail"></i>',
    css: ["styles", "about"]
  });
});

server.get("/photo", (request, response) => {
  response.render("photo", {
    title: "One day One cocktail",
    css: ["styles", "photo"]
  });
});

server.listen(port);
