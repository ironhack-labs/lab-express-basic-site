const express = require("express");

// "app" variable represents our application
// (all configurationand content will  be defined through it)
const app = express(); // const because this variable will never be re assign.

// app.VERB("URL", CALLBACK)
//GET request() to localhost:3000/

// Make Express aware of the "public/" folder
// (make all file inside available)
app.use(express.static("public"));



app.get("/", (request, response, next) => {

    response.sendFile(__dirname + "/views/index.html");

});



app.get("/about", (request, response, next) => {

    response.sendFile(__dirname + "/views/about.html");
});


app.get("/portfolio", (request, response, next) => {

    response.sendFile(__dirname + "/views/portfolio.html");
});



app.listen(3002, () => {

    console.log("I'm listing");


});