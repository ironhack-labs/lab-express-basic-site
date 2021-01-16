const express = require('express');
const { request } = require('http');
const app = express();

// Public route

app.use(express.static('public/images'));

// first route

app.get('/home', (req, res) => {
res.sendFile(__dirname + '/views/home.html');
})

// Second route

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
})

// Third route

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html');
})

// Fouth route 

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html');
})

app.listen(3000, () => {
    console.log("Server running in port 3000!");
})