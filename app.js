const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.set(__dirname + "public");
app.get(["/", "/home"], (request, response) => {
  response.render("home");
});
app.get("/about", (request, response) => {
  response.render("about");
});
app.get("/work", (request, response) => {
  response.render("work");
});
app.get("/gallery", (request, response) => {
  response.render("gallery");
});

app.listen(3000, () => {
  console.log("server is ready on port 3000: http://localhost:3000/");
});
