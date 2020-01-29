const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  console.log(request);
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response) => {
  console.log(request);
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/photos", (request, response) => {
  console.log(request);
  response.sendFile(__dirname + "/views/photos.html");
});

// app.get("/images", (request, response, next) => {
//   response.sendFile(__dirname + "/public/images/bb8.jpg");
// });

app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
