const express = require('express')
const app = express();

//public available
app.use(express.static('public'));

//routes
app.get('/', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/home.html')
  });

app.get('/about', (request, response, next) => {
console.log(request);
response.sendFile(__dirname + '/views/about.html')
});

app.get('/works', (request, response, next) => {
console.log(request);
response.sendFile(__dirname + '/views/works.html')
});

app.get('/gallery', (request, response, next) => {
console.log(request);
response.sendFile(__dirname + '/views/gallery.html')
});

// Server Started
app.listen(3000, () => console.log('Express listening on port 3000!'));