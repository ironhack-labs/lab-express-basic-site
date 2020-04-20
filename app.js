const express = require("express");
// const hbs = require("hbs");
const path = require("path");
const server = express();
const port = 3002;
server.set("view engine", "hbs");

server.use(express.static(path.join(__dirname, "public")));
server.get("/", function (request, response) {
  response.render("index");
});
server.get("/about", function (request, response) {
  response.render("about");
});
server.get("/works", (request, response) => {
  response.render("works");
});
server.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
