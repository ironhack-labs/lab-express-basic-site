const express = require('express');

const app = express();

app.use(express.static('public'));

// app.get('/', (request, response/*, next) todavia no lo usamos, pero existe un tercer parámetro*/) => {
//     console.log(request);
//     response.sendFile(__dirname + '/views/cat.html');
// });

app.get('/', (request, response) => {
    // console.log(request);
    response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
    // console.log(request);
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response) => {
    // console.log(request);
    response.sendFile(__dirname + '/views/works.html');
});

app.get('/photogallery', (request, response) => {
    // console.log(request);
    response.sendFile(__dirname + '/views/photogallery.html');
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});