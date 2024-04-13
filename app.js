const express = require('express');

const app = express();

app.use(express.static('public'));      

app.get('/home', (req, res) =>{         
    res.send('/views/home.html');
});

app.get('/about', (req, res) => {
    res.send('/views/about.html');
})

app.get('/works', (req, res) => {
    res.send('/views/works.html');
});

app.get('/gallery', (req, res) => {
    res.send('/views/gallery.html');
});

app.listen(3000, () => {
    console.log('My first app listener');
});