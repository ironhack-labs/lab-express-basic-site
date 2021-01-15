const express = require ('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, ext) => response.sendFile(__dirname + '/views/home-page.html'));
app.get('/about', (request, response, ext) => response.sendFile(__dirname + '/views/about-page.html'));
app.get('/works', (request, response, ext) => response.sendFile(__dirname + '/views/work.html'));
app.get('/photo-gallery', (request, response, ext) => response.sendFile(__dirname + '/views/photo-gallery-page.html'));

app.listen(3000, () => console.log('App listening!'));