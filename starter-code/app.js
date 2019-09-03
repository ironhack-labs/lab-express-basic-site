const express = require('express');

const app = express();

app.use(express.static('public'));


// app.use((request, response, next) =>{
//     console.log("hit my custom middleware.", request.url);
//     next();
// });

app.get('/', (request, response, next) => {
    console.log('Get request in express app');
    response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response, next) => {
    console.log('Get request in express app');
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
    console.log('Get request in express app');
    response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000);

