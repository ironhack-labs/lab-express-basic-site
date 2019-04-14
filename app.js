const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

// app.get("/gallery", (request, response, next) => {
//   response.sendFile(__dirname + "/views/where-to-go.html");
// });

// app.get("/gallery", (request, response, next) => {
//   response.sendFile(__dirname + "/views/where-to-stay.html");
// });

// app.get("/gallery", (request, response, next) => {
//   response.sendFile(__dirname + "/views/where-to-eat.html");
// });

// app.get("/gallery", (request, response, next) => {
//   response.sendFile(__dirname + "/views/what-to-do.html");
// });

app.listen(1000, () => {
  console.log("your express app is running at: http://localhost:1000");
});
