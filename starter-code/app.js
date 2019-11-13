const express = require('express');// Express server handling requests and responses
const app = express();// our first Route:

const morgan = require('morgan');

const logger = morgan('tiny');

//Middleware
app.use(logger);
app.use( express.static('public')); // GET XYZ. extensions

app.use((request,response, next) => {
    console.log('custom middleware VACA');
    next();
});


app.get("/", (request, response, next) => {
 //response.send("<h1>Welcoome :)</h1>");
 response.sendFile(__dirname + "/public/views/index.html");
});
app.get("/home", (request, response, next) => {
 response.sendFile(__dirname + "/public/views/index.html");
});
app.get("/about", (request, response, next) => {
 response.sendFile(__dirname + "/public/views/about.html");
});
app.get("/gallery", (request, response, next) => {
    response.sendFile(__dirname + "/public/views/gallery.html");
});
// Server Started
app.listen(3000, () => {
 console.log('My second app listening on port 3000!');
});