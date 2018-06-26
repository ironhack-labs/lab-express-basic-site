const express = require('express');

const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

app.get('/', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/home_page.html');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about_page.html');
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery_page.html');
});

app.listen(3001, () => {
    console.log('Lab express running on port 3001!')
});