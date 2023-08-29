const exp = require("constants");
const express = require("express");
const app = express();

app.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/views/home-page.html")
);
app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about-page.html")
);
app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "/views/works-page.html")
);
app.use(express.static("public"));
app.listen(3000, () => console.log("My second app listening on port 3000!"));
