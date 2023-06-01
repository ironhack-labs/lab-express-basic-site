const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("views", __dirname+"/views")

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', function(req, res){
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/works', function(req, res){
    res.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', function(req, res){
    res.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000, function(){
    console.log('App listening on port 3000');
});