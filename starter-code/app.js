const express = require('express');

const app = express();

app.use(express.static('public'));


app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
  });
  
  
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-page.html');
});


app.get('/photos', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});

app.listen(3000, () => {
    console.log('server is up and running!');
  });

//   button.onclick = function(){console.log ("that's enough internet for today")};

  