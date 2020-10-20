

const express = require('express');

const app = express();

app.use(express.static('public'));
 
// HOMEPAGE

app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));;

// ABOUT PAGE

app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// WORK PAGE

app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html'));


app.listen(3000, () => console.log('My first app listening on port 3000! '));