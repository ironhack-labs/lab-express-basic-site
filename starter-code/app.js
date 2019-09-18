const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/photos", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/photos.html");
});

app.get("/about", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/about.html");
});

app.listen(3000, () => {
  console.log("Running!");
});
