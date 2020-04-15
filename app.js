const express = require('express');
const app = express();

app.use(express.static('public'));

// above template settings.

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home-page.html');
})

app.get('/about-page', function(req, res){
    res.sendFile(__dirname + '/views/about-page.html');
 });

app.get('/works-page', function(req, res){
    res.sendFile(__dirname + '/views/works-page.html');
 });

app.get('/gallery', (req, res) => {
    // console.log(__dirname);
    res.sendFile(__dirname + '/views/gallery.html');
});


 app.listen(5500);


 
