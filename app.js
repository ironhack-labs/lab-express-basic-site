const express = require('express');

const app = express();

app.use(express.static('public'));

console.log(__dirname) 

app.get('/', (request, response) => response.sendFile(__dirname + '/views/index.html'));


app.get('/bio', (request, response) => response.sendFile(__dirname + '/views/about.html'));

app.get('/works', (request, response) => response.sendFile(__dirname + '/views/works.html'));

app.get('/img', (request, response) => response.sendFile(__dirname + '/views/image.html'));


app.listen(3000, () => console.log('Listening on port 3000'));