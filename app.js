const express = require('express');

const app = express();

const path = require('path');

// app.use(express.static('public'));

app.use(express.static(path.join(__dirname,'public')));

// home route

app.get('/', (req, res, next) => {
    
    res.sendFile(path.join(__dirname + '/public/views/home.html'));

});

//about route

app.get('/about', (req, res, next) => {
    
    res.sendFile(path.join(__dirname + '/public/views/about.html'));

});

//gallery route 

app.get('/gallery', (req, res, next) => {
    
    res.sendFile(path.join(__dirname + '/public/views/gallery.html'));

});

//Server started

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})


