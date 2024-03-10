const express = require("express");
app.use(express.static('public'));

const app = express();

app.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/views/home.html")
);

app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);

app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "/views/works.html")
);

app.get("/Photo Gallery", (request, response, next) =>
  response.sendFile(__dirname + "/views/Photo Gallery.html")
);
app.listen(3000, () => console.log("My first app listening on port 3000! "));
