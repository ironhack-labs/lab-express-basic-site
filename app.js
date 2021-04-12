const express = require('express');

const app = express();

app.use(express.static('public'));

//Server routes
app.get('/', (request, response) => response.sendFile(__dirname + '/views/index.html'));
app.get('/about', (request, response) => response.sendFile(__dirname + '/views/about.html'));
app.get('/works', (request, response) => response.sendFile(__dirname + '/views/works.html'));
app.get('/gallery', (request, response) => response.sendFile(__dirname + '/views/gallery.html'));

//Server started
app.listen(3000, () => console.log('Start server at port 3000'));