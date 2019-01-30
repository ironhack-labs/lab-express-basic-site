const express = require("express");
const app = express();

app.listen(5555, () => {});

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
  const placeHolder = "https://via.placeholder.com/150";
  const number = 100;
  for(i=0; i < number; i++){
    // contruct the html iteration to display 100 placeholders
    
  }
});
