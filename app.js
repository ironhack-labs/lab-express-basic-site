// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Elemento "PUBLIC" del HTML
app.use(express.static("public"));


// our first Route:

app.get("/home", (req, response) => {
    // needed to add /public for the views folder as per https://stackoverflow.com/a/25463996/1175555
    response.sendFile(__dirname + "/views/home.html");
  });

  app.get("/about", (req, response) => {
    // needed to add /public for the views folder as per https://stackoverflow.com/a/25463996/1175555
    response.sendFile(__dirname + "/views/about.html");
  });

  app.get("/gallery", (req, response) => {
    // needed to add /public for the views folder as per https://stackoverflow.com/a/25463996/1175555
    response.sendFile(__dirname + "/views/gallery.html");
  });

// app.get('/home', (request, response, next) => {
//   response.send('<h1>Welcome Ironhacker. :)</h1>');
// });

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});