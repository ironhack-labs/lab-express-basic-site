const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) =>{
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/about.html', (request, response, next) =>{
    response.sendFile(__dirname + '/views/about.html')
});

app.get('/photogallery.html', (request, response, next) =>{
    response.sendFile(__dirname + '/views/photogallery.html')
});

// Server Started
app.listen(3000, () => {
    console.log('First Express Project')
  });