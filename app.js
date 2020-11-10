// import framework express
const express = require("express");

// make an express 
const app = express();

app.use(express.static("public"));

// Home page
app.get("/", (request, response) => {
   response.sendFile(__dirname + "/views/index.html");
   //response.send('hello')
   //console.log('HELLO')
});

// About page
app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
});

// Works page
app.get("/works", (request, response) => {
   response.sendFile(__dirname + "/views/works.html");
});


// MAKE A PORT
app.listen(3001, () => {
    console.log("LISTENING ON PORT 3001");
  });