const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    console.log(request.url);
    
    response.sendFile(__dirname + '/views/home.html');

});

app.get('/about', (request, response) => {
    console.log(request.url);
    
    response.sendFile(__dirname + '/views/about.html');

});

app.get('/works', (request, response) => {
    console.log(request.url);
    
    response.sendFile(__dirname + '/views/works.html');

});


app.listen(3001, () => console.log('Servidor ligado na porta 3001'));