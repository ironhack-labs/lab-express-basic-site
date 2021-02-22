const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views"); 
app.set("view engine", "hbs");

app.get(["/", "/home"], (request, response) => {
    response.render("home");
  });

app.get(["/about"], (request, response) => {
    response.render("about");
  });
  
app.get(["/works"], (request, response) => {
    response.render("home");
  });

app.get(["*"], (request, response) => {
    response.render("sorry not found");
  });

app.listen(1000, () => {
    console.log("server is ready to rock @ http://localhost:1000");
  });