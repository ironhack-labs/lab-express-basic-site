const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname+'/views/home.html');
  });

app.get('/about', (request, response, next) => {
console.log(request);
// response.send('<h1>Welcome About. :)</h1>');
response.sendFile(__dirname+'/views/about.html');
});

app.get('/photogallery', (request, response, next) => {
    console.log(request);
    // response.send('<h1>Welcome Photogallery. :)</h1>');
    response.sendFile(__dirname+'/views/photogallery.html');
  });


  // Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });