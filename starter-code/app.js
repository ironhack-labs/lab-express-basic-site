const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// creates an absolute path pointing to a folder called "views" *
app.set('views', __dirname + '/views');


app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html');
  });


app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html');
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html');
});


app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });