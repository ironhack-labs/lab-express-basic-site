const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/views/index.html`)
});

app.get('/sobrenos', (req,res) => {
    res.sendFile(`${__dirname}/views/sobrenos.html`)
});

app.get('/galeria', (req,res) => {
    res.sendFile(`${__dirname}/views/galeria.html`)
});

app.listen('3000');