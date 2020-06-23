const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => 
    response.sendFile(__dirname + '/view/home.html')
    //response.send('<p> Some personal information </p>')
);

app.get('/works', (request, response, next) => 
    response.sendFile(__dirname + '/view/works.html'));

app.get('/about', (request, response, next) => response.sendFile(__dirname + '/view/about.html'));

app.listen(3000, () => console.log("Ready..."));