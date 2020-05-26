const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/views/lost.html');
});

app.listen(3000, '127.0.0.1',()=>{
    console.log("http://127.0.0.1:3000");
  });

