const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/white', (req,res) => {
    res.sendFile(__dirname + '/views/white.html');
});
app.get('/green', (req,res) => {   
    res.sendFile(__dirname + '/views/green.html');
});
app.get('/yellow', (req,res) => {   
    res.sendFile(__dirname + '/views/yellow.html');
});
app.get('/black', (req,res) => {   
    res.sendFile(__dirname + '/views/black.html');
});
app.get('/red', (req,res) => {   
    res.sendFile(__dirname + '/views/red.html');
});
app.get('/blue', (req,res) => {   
    res.sendFile(__dirname + '/views/blue.html');
});

app.listen(3000, () => {
    
});
