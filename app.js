//home, about, work
const { response } = require("express");
const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/home", (request, response) => {
  response.render("home");
});

app.get("/about", (resquest, response) => {
  response.render("about");
});

app.get("/work", (request, response) => {
  response.render("work");
});

app.get("/photo-gallery", (request, reponse) => {
  response.render("photo-gallery");
});
// start the http server
app.listen(1111, () => {
  console.log("lets go @http://localhost:1111");
});
