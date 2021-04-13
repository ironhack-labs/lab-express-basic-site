const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => response.sendFile(__dirname + '/views/index.html'));
app.get('/about', (request, response) => response.sendFile(__dirname + '/views/about.html'));
app.get('/works', (request, response) => response.sendFile(__dirname + '/views/works.html'));
app.get('/photo-gallery', (request, response) => response.sendFile(__dirname + '/views/photo-gallery.html'));

app.listen(3000, () => console.log('Listening on port 3000'));