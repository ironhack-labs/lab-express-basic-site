const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  console.log("user has requested /");
  response.sendFile(__dirname + "/views/index.html");
  //response.send("<h1>Welcome to the home page brudda :)</h1>");
});
app.get("/students", (request, response) => {
  console.log("user has requested /students");
  response.sendFile(__dirname + "/views/students.html");
});
app.get("/moreInfo", (request, response) => {
  console.log("user has requested /moreInfo");
  response.sendFile(__dirname + "/views/moreInfo.html");
});
app.listen(3000, () => {
  console.log("Server is up and running!");
});
