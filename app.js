const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/',(request,response) => response.sendFile(__dirname + '/views/index.html'));
app.get('/about', (request, response) => response.sendFile(__dirname + '/views/about.html'));
app.get('/portfolio', (request, response) => response.sendFile(__dirname + '/views/portfolio.html'));


app.listen(3000, () => console.log('listening on port 300'));
