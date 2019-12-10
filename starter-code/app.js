const express = module.require('express');
const app = express();

app.use(express.static("public"));

app.get('/', (request, response, next) => {
    console.log("Home directory: " + __dirname);
    response.send('<h1><a href="/home">Welcome to Casa Tomasz</a></h1>');
  });

app.get("/about", (request, response) => {
  response.sendFile (__dirname + "/views/about.html");
});

app.get("/home", (request, response) => {
  response.sendFile (__dirname + "/views/home.html");
});

app.get("/gallery", (request, response) => {
    response.sendFile (__dirname + "/views/gallery.html");
});

app.listen (3000, () => {
    console.log("Listening on port 3000");

});