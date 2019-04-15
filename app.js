const express = require("express");
const app = express();
const hbs = require("hbs");
app.set("view engine", "hbs");

app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (request, response, next) => {
  response.render("home");
});

app.get("/about", (request, response, next) => {
  response.render("about");
});

app.get("/gallery", (request, response, next) => {
  response.render("gallery");
});

// app.get("/gallery", (request, response, next) => {
//   response.sendFile(__dirname + "/views/where-to-go.html");
// });

// app.get("/gallery", (request, response, next) => {
//   response.sendFile(__dirname + "/views/where-to-stay.html");
// });

// app.get("/gallery", (request, response, next) => {
//   response.sendFile(__dirname + "/views/where-to-eat.html");
// });

// app.get("/gallery", (request, response, next) => {
//   response.sendFile(__dirname + "/views/what-to-do.html");
// });

app.listen(4000, () => {
  console.log("your express app is running at: http://localhost:4000");
});
