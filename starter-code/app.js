const dataGifs = require('./bin/data');
const express = require("express");
const server = express();
const PORT = 1111;
const hbs = require("hbs");
const path = require("path");

// Make everything inside of public/ available to the browser (styles, images, frontend scripts)
server.use(express.static(path.join(__dirname, "public"))); // rock solid syntax

// indicates express where our "views" templates are located
// view is a term part of MVC design pattern... more coming. in a nutshell, a view is a page ; )
server.set("views", path.join(__dirname, "views"));

// indicates express wich view engine this app will use ; )
server.set("view engine", "hbs"); // in this case hbs, there are others ... pug/jade etc.engine !

hbs.registerPartials(path.join(__dirname, "views/partials"));

//hbs.registerPartial("titleLogo", "{{titleLogo}}");
// what is a view engine ???
// basicaly a way to code HTML++ (loops, conditionals)

server.get("/", (req, res) => {
  const data = {
    text: "some text",
    loveCoding: false,
    siteOwner: "Yannick Bourenane"
  };
  res.render("home", data);
});

server.get("/about", (req, res) => {
  const data = {
    html: "<h1>About</h1><p>This is about page</p>"
  };
  res.render("about", data);
});
server.get("/gifs", (req, res) => {
  res.render("gifs", dataGifs);
});
server.listen(PORT, () => {
  console.log(`Yata ! server is running @ http://localhost:${PORT}`);
});