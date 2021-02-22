const express = require("express");
const hbs = require("hbs");
const app = express();
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get(["/","/home"], (request, response) => {
  response.render("home");
});
app.get("/about", (request, response) => {
  response.render("about");
});
app.get("/works", (request, response) => {
  response.render("works");
});
app.get("/photo-gallery", (request, response) => {
  response.render("photo-gallery");
});

app.listen(3030, () => {
  console.log("the warp is @ http://localhost:3030");
});
