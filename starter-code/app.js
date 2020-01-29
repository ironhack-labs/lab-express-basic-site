// express is the middleware
const express = require ("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
    console.log("GET request made to /");
    response.sendFile(__dirname + "/views/index.html"); 
  });

  app.get("/about", (request, response) => {
    console.log("GET request made to /");
    response.sendFile(__dirname + "/views/about.html"); 
  });

  app.get("/gallery", (request, response) => {
    console.log("GET request made to /");
    response.sendFile(__dirname + "/views/gallery.html"); 
  });

  // app.get("/", (request, response) => {
  //   console.log("GET request made to /");
  //   response.sendFile(__dirname + "/gallery/pacino.jpg"); 
  // });
  

app.listen(3003,() => {console.log("Server listening to 3003")});


