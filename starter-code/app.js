const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});
app.get("/index.html", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});
app.get("/about.html", (request, response) => {
  response.sendFile(__dirname + "/about.html");
});
app.get("/gallery-lindy.html", (request, response) => {
  response.sendFile(__dirname + "/gallery-lindy.html");
});
app.get("/gallery-charleston.html", (request, response) => {
  response.sendFile(__dirname + "/gallery-charleston.html");
});
app.get("/gallery-balboa.html", (request, response) => {
  response.sendFile(__dirname + "/gallery-balboa.html");
});
