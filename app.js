//set's up express

const express = require('express');

const app = express();

//this is needed to register the public folder
//containing all the assets so that it is accessible in the browser

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){

    //console.log('The home page')

    res.sendFile(__dirname + '/views/home.html');

});


app.get('/about', function(req, res){

    //console.log('The home page')

    res.sendFile(__dirname + '/views/about.html');

});


app.get('/works', function(req, res){

    //console.log('The home page')

    res.sendFile(__dirname + '/views/works.html');

});

app.get('/gallery', function(req, res){

    //console.log('The home page')

    res.sendFile(__dirname + '/views/gallery.html');

});


app.listen(3000, function() {

    console.log('Server Listening');

});