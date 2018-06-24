const express = require('express');
const app = express();
const PORT = 4040;

app.use(express.static('public'));


// ROUTES
app.get('/', (req, res, next)=> {
    console.log(req);
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res, next)=> {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (req, res, next)=> {
    res.sendFile(__dirname + '/views/gallery.html');
});

app.listen(PORT, console.log('READY!'));