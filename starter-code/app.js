const PORT = 3000;
const express = require('express');

let app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(`${__dirname}/views/home.html`);
});

app.get('/about', function(req, res){
    res.sendFile(`${__dirname}/views/about.html`);
});

app.get('/gallery', function(req, res){
    res.sendFile(`${__dirname}/views/gallery.html`);
});

app.listen(PORT, ()=>console.log(`running on port ${PORT}`));
