//Basic website

const express = require("express");
const app = express();

app.listen(3000, (err,) => {
if (err) {
    console.log("there was an error on the server", err);
    return;
    }
    console.log("listening on port 3000");
});

app.use(express.static('public'));

app.get('/home', (request, response) => {           //...here we specify the route
    response.sendFile(__dirname + "/views/home.html");
});

app.get('/about', (request, response) => {           //...here we specify the route
    response.sendFile(__dirname + "/views/about.html");
});

app.get('/works', (request, response) => {           //...here we specify the route
    response.sendFile(__dirname + "/views/works.html");
});