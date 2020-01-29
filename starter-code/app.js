const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  //console.log("Get request made to/");

  response.sendFile(__dirname + "/views/homepage.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallarey", (request, response) => {
  response.sendFile(__dirname + "/views/gallarey.html");
});

app.listen(3000, () => {
  console.log("Server is listening on port: 3000");
});
