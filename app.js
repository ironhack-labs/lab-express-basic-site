const express = require('express');
// We create our own server named app
// Express server will be handling requests and responses

const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

//homepage-route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/index.html'));

//aboutpage-route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

//workpage-route:
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html'));

//photopage-route:
app.get('/photos', (request, response, next) => response.sendFile(__dirname + '/views/photos.html'));
// ...

app.listen(3000, () => console.log('My first app listening on port 3000! '));