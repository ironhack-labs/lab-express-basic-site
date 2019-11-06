const express = require("express");

const app = express();
app.use(express.static("views"));
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
  app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
    app.get("/gallery", (request, response) => {
      response.sendFile(__dirname + "/views/gallery.html");
      // app.get('/public', (request, response) => {
      //     response.sendFile(__dirname + '/public/assets/computer.jpg');
      // })
    });
  });
});

app.listen(3000);
