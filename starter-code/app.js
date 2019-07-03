const express = require('express');
const app = express();

// our first Route:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/index.html');
  });

// Make everything inside of public/ available
app.use(express.static('./public'));


app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
  });

app.get('/photo', (request, response, next) => {
    response.sendFile(__dirname + '/views/photo.html');
});


app.listen(3000, () => {
    console.log('express is running on port 3000');
    
});