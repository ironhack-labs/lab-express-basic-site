
var express = require('express');
var app = express();

// MiddleWare
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/views/about.html');
})

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname+'/views/gallery.html');
})

// 404 Error
app.use(function(req, res){
    res.send(404);
});

// Server
app.listen(3000);