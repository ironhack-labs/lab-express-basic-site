// 1 passo tornando isso um servidor usando o express
const express = require('express');
const app = express();

//2 fazer o roteador 
app.get('/home', (request, response, next) => {
    console.log (request.url);
response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
    console.log (request.url);
response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
    console.log (request.url);
response.sendFile(__dirname + '/views/gallery.html');
});

app.get('/works', (request, response, next) => {
    console.log (request.url);
response.sendFile(__dirname + '/views/works.html');
});

// 3 inicializar o servidor 
// listen serve para inicalizar o servidor ele ouve o codigo para saber o 
// comando usando a porta 3000 para se conectar a informacao
app.listen(3000, () => 
    console.log ('3000'));
