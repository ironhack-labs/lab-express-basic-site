const express = require('express');

const app = express();

app.use( express.static( 'public' ) );

app.get('/', ( request, response ) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.use(function(request, response) {
  response.status(404).sendFile(__dirname + '/views/404.html');
});

app.listen(3000, () => {
  console.log( "Server listening on port 3000..." );
});