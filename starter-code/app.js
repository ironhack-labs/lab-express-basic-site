const express = require("express");

const app = express();
app.use(express.static("public"));

// app.get("/", (request, response) => {
//   response.send("This is the welcome page");
// });

app.get("/about", (request, response) => {
  //   response.send("This is the about page");
  response.sendFile(__dirname + "/views/about.html");
  console.log(__dirname);
});

app.get("/", (request, response) => {
  //   response.send("This is the about page");
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/photogallery", (request, response) => {
  //   response.send("This is the about page");
  response.sendFile(__dirname + "/views/photogallery.html");
});

app.get("/home", (request, response) => {
  //   response.send("This is the about page");
  response.sendFile(__dirname + "/views/home.html");
});

app.listen(3010, () => {
  console.log("Server listening on port:3010");
});
