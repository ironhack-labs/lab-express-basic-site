const express = require('express');

const app = express(); 

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    console.log('appget home works')
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/about', (req, res) => {
    console.log('appget about works')
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/works', (req, res) => {
    console.log('appget works works')
    res.sendFile(__dirname + '/views/works.html');
})

app.get('/galery', (req, res) => {
    console.log('appget galery works')
    res.sendFile(__dirname + '/views/galery.html');
})

app.listen(5556, () => {
    console.log('app.listen works')
})