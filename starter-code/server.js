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
    title: "WELCOME IN ONE DAY ONE COCKTAIL",
    css: ["home", "styles"]
  });
});

server.get("/about", (request, response) => {
  response.render("about", {
    title: "More about us",
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
