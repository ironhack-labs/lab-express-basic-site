
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/home', function(req, res){res.sendFile(__dirname + '/views/home-page.html')}) 
app.get('/about', function(req, res){res.sendFile(__dirname + '/views/about-page.html')})
app.get('/works', function(req, res){res.sendFile(__dirname + '/views/works-page.html')})
app.get('/photo-gallery', function(req, res){res.sendFile(__dirname + '/views/photo-gallery-page.html')})


app.listen(3000, () => {
    console.log("Listening.");
    console.log(__dirname)
})

