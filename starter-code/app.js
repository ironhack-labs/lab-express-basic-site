const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallary", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallary.html");
});
app.get("/welcome", (request, response, next) => {
  response.sendFile(__dirname + "/views/welcome.html");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
