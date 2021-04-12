//Require Express
const express = require('express');

//Create our own server named app
const app = express();

//Middleware for static files (styles or img)
app.use(express.static('public'));

//Server routes
app.get('/',(request, response) => response.sendFile(__dirname + '/views/index.html'));
app.get('/about',(request, response) => response.sendFile(__dirname + '/views/about.html'));
app.get('/works',(request, response) => response.sendFile(__dirname + '/views/works.html'));

//Server start
app.listen(3000, () => console.log('Listening on port 3000'));