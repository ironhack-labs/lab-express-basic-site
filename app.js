// Library to build corect path strings for the OS
const path = require('path')

// * 3. Import the newly installed express module (library)
const express = require('express')

// * 4. Setup the express.app()
const app = express()

// * 8. Route the files
app.use(express.static('public'))

app.get('/home', (request, response) => {
    response.sendFile(__dirname + "/views/home.html");
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
});


app.get('/works', (request, response) => {
    response.sendFile(__dirname + "/views/works.html");
});

app.listen(3000);