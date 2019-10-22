const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    const templatePath = __dirname + '/views/home.html';
    console.log(templatePath);
    response.sendFile(templatePath);
});

app.get('/about', (request, response) => {
    const templatePath = __dirname + '/views/about.html';
    console.log(templatePath);
    response.sendFile(templatePath);
});

app.get('/gallery', (request, response) => {
    const templatePath = __dirname + '/views/gallery.html';
    console.log(templatePath);
    response.sendFile(templatePath);
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});

