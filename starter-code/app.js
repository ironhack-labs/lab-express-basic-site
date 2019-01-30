const express = require("express");
const app = express();
app.listen(8888, () => console.log("New Express App"));
app.use(express.static(__dirname + "/public"));

app.get("/", (request, response, next) =>
  response.sendFile(__dirname + "/views/home-page.html")
);

app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about-page.html")
);

app.get("/gallery", (request, response, next) =>
  response.sendFile(__dirname + "/views/gallery-page.html")
);
