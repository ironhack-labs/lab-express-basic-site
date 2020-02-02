require("dotenv").config(); 
//above get .env file and parse its content (then accessible as key/value pairs @ process.env object)
const express = require("express");
const server = express();
const hbs = require("hbs");

// 1 - SERVER INITAL CONFIG

server.use(express.urlencoded({ extended: true }));
server.use(express.static("./public"));
server.set("views", "./views");
server.set("view engine", "hbs");
hbs.registerPartials("./views/partials");

// 2 - SERVER ROUTING

server.get("/", (req, res) => {
  const data = {
    js: ["home"]
  }
  res.render("home", data);
});

server.get("/about", (req, res) => {
  res.render("about");
});

server.get("/ironhack", (req, res) => {
  const data = {
    css: ["form"]
  };
  res.render("ironhack", data);
});

server.post("/ironhack", (req, res) => {
  console.log(req.body);
  res.redirect("ironhack");
});

// 2 - SERVER KICKSTART

server.listen(process.env.PORT, () => {
  console.log(`server ready @ http://localhost:${process.env.PORT}`);
});