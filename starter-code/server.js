const express = require("express");
const hbs = require("hbs");
const path = require("path");
const port = 9090;
const server = express();

server.use(express.static(path.join(__dirname, "public"))); 
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "hbs");

server.get("/", (request, response) => {  
    response.render("home", {
      title: "Life of Koalas"
    });
  });
  
  server.get("/about", (request, response) => {
    const data = {
      title: "About",
    };
    response.render("about", data);
  });
  
  server.get("/galery", (request, response) => {
    const data = {
      title: "Galery",
    }
    response.render("galery", data);
  });

hbs.registerPartials(path.join(__dirname + "/views/partials"));
server.listen(port);