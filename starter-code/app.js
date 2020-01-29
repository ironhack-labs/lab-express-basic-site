const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  console.log(request);
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/destinations", (request, response) => {
  console.log(request);
  response.sendFile(__dirname + "/views/destinations.html");
});

app.get("/images/cancun", (request, response) => {
  response.sendFile(__dirname + "/public/images/chill-beach.jpg");
});

app.get("/images/barcelona", (request, response) => {
  response.sendFile(__dirname + "/public/images/barcelona.jpg");
});

app.get("/images/berlin", (request, response) => {
  response.sendFile(__dirname + "/public/images/berlin.jpg");
});

app.get("/images/japan", (request, response) => {
  response.sendFile(__dirname + "/public/images/japan.jpg");
});

app.get("/images/new-york", (request, response) => {
  response.sendFile(__dirname + "/public/images/new-york.jpg");
});

app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
