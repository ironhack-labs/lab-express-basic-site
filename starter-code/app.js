//SET UP :

const express = require("express");
const app = express();



app.use(express.static(__dirname + "/public"));

// ROUTES :

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html")
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html")
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html")
})

app.listen(5556, () => {
  console.log('Express app is ready')
});