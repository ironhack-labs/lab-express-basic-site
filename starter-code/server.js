const express = require("express");
const server = express();
const hbs = require("hbs");
const path = require("path");
const port = 9040;

server.use(express.static(path.join(__dirname, "public")));

server.set("views", path.join(__dirname, "views"));

server.set("view engine", "hbs");

server.get("/", (req, res) => {
  res.render("home", {
    title: "REUNION ISLAND",
    subtitle: "A journey to the heart of the Indian Ocean",
    css: "style"
  });
});

server.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    css: "style"
  });
});

server.get("/photos", (req, res) => {
  res.render("photos", {
    title: "Gallery",
    css: "style"
  });
});

server.listen(port);
