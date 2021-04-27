const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (req, res, next) => res.sendFile(__dirname + '/views/home.html'));
app.get('/about', (req, res, next) => res.sendFile(__dirname + '/views/about.html'));
app.get('/works', (req, res, next) => res.sendFile(__dirname + '/views/works.html'));
app.get('/shop', (req, res, next) => res.sendFile(__dirname + '/views/shop.html'));
   
//start listening on port
app.listen(3000, () => console.log('My first app listening on port 3000! '));
