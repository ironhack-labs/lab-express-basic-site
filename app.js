// The express() function creates an Express application.
const express = require('express')
const app = express()

// Make everything inside directory publically available 
app.use(express.static('public'));


// Here I am creating the route via a request and a response
// if the client goes to /home then ...
app.get('/home', (request, response) => {
    response.sendFile(__dirname + "/views/home.html");
  });

  // in order to have another page link I create another route

  app.get('/about', (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
  });

  app.get('/gallery', (request, response) => {
    response.sendFile(__dirname + "/views/gallery.html");
  });

  //  Starting the Server
// if you activate the server once then it will remain active until you kill it
app.listen(2000, () => console.log("Listening in PORT 200"));
