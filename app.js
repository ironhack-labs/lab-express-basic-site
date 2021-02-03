const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/home-page.html');
})

app.get('/about', (req,res) => {
    res.sendFile(__dirname + '/views/about-page.html')
})

app.get('/works', (req,res) => {
    res.sendFile(__dirname + '/views/works-page.html')
})

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery-page.html')
})

app.listen(3000,() =>{
    console.log('server listening, port 3000')
})