const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) =>{

    res.sendFile(__dirname + '/views/Home.html')

})

app.get('/about', (req, res, next) => {

    res.sendFile(__dirname + '/views/About.html')

})

app.get('/works', (req, res, next) => {

    res.sendFile(__dirname + '/views/Works.html')

})

app.get('/photo', (req, res, next) => {

    res.sendFile(__dirname + '/views/Photo.html')

})

app.listen(3000)