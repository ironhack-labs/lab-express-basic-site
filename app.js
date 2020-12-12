const { constants } = require('buffer');

//starting up express
const express = require('express');
const app = express();

//make my pbulic files accessible
app.use(express.static('public'));


//set-up the paths
app.get('/home', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});
app.get('/photos', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});
app.get('/works', (request, response, next) => {
  response.sendFile(__dirname + '/views/works.html');
});

//reroute to homepage for all other paths
app.get('/*', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

//set-up listening feature for the server
app.listen(3000, () => console.log('listening to port 3000'));
