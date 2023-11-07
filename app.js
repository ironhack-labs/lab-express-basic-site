const express = require("express");

const app = express();

//console.log("lol");
app.use(express.static(__dirname + "/public"));
//console.log(__dirname, "dirname");

app.get("/home", (request, response, next) => {
  response.sendFile(__dirname + "/public/views/home.html");
});
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/public/views/about.html");
});
app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/public/views/work.html");
});
app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/public/views/gallery.html");
});

app.listen(3000, () => {
  console.log("the application is running on localhost:3000");
});
