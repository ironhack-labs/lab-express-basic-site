const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(request, response, next){
    response.send('test');
});

app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/homepage.html'));
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

app.listen(3002);
