require("dotenv").config();
const express = require("express");
const path = require("path");
const server = express();
const hbs = require("hbs");
const data = require("./data.json");

console.log(data.home);

server.use(express.static(path.join(__dirname, "public")));
server.set("view engine", "hbs");

server.get("/", function (request, response) {
  response.render("home.hbs", data.home);
});

server.get("/portfolio", function (request, response) {
  response.render("portfolio.hbs", data.portfolio);
});

server.get("/photos", function (request, response) {
  response.render("photos.hbs", data.photos);
});

// server.listen(process.env.PORT, () => {
//   console.log(`Server listening on http://localhost:${process.env.PORT}`);
// });

server.listen(process.env.PORT || 3000, () =>
  console.log("Server is running...")
);
