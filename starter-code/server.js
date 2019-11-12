const express = require("express"); // get the framework !
const hbs = require("hbs"); // require the templating engine
// you get a function that you should use ton generate the backend app !!!
const path = require("path"); // part of the node's core lib
const server = express();
// console.log(server);
const port = 4321;

// Make everything inside of public/ available to the browser (styles, images, frontend scripts)
server.use(express.static(path.join(__dirname, "public"))); // rock solid syntax
// indicates express where our "views" templates are located
server.set("views", path.join(__dirname, "views"));
// absolute path to a folder called "views"

// indicates express wich view engine this app will use ; )
server.set("view engine", "hbs"); // in this case hbs, there are many others ... pug/jade etc.engine !

server.get("/", (request, response) => {
  response.render("home");
});

server.get("/filmography", (request, response) => {
  response.render("filmography");
});

server.get("/museum", (request, response) => {
  response.render("museum");
});

server.get("/mononoke", (request, response) => {
  response.render("mononoke", {
    title: "Mononoke"
  });
});

server.listen(port);
