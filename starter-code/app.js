const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});
app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});
app.get("/gallery-lindy", (request, response) => {
  response.sendFile(__dirname + "/views//gallery-lindy.html");
});
app.get("/gallery-charleston", (request, response) => {
  response.sendFile(__dirname + "/views//gallery-charleston.html");
});
app.get("/gallery-balboa", (request, response) => {
  response.sendFile(__dirname + "/views//gallery-balboa.html");
});
