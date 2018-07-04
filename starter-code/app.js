
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));
app.get('/home', (req, res)=> {
    res.sendFile(__dirname+'/views/home.html' )
});


app.get('/gallery', (req, res)=> {
    res.sendFile(__dirname+'/views/gallery.html' )
});


app.get('/about', (req, res)=> {
    res.sendFile(__dirname+'/views/about.html' )
});

app.listen(3000,()=>{
    console.log('escuchando en el 3000');
});
