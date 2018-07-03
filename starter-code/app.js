const express = require('express');

const app = express();

app.use(express.static('public'));


//route1

app.get('/', (request, response, next) => {
console.log(request);
response.sendFile(__dirname+'/views/home.html');
});

app.get('/about', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname+'/views/about.html');
  });

app.get('/photos', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname+'/views/photos.html');
    });


    app.listen(3000,() => {
      console.log('Overlord monitoring port 3000...')
    });