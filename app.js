const express = require('express');
const app = express();


app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send('<h1 style="color:red">HOMEPAGE</h1>')
    res.sendFile(__dirname + '/views/homepage.html');
})
app.get('/about', (req, res) => {
    // res.send('<h1 style="color:red">ABOUT</h1>')
    res.sendFile(__dirname + '/views/about.html');
})
app.get('/works', (req, res) => {
    // res.send('<h1 style="color:red">WORKS</h1>')
    res.sendFile(__dirname + '/views/works.html');
})
app.get('/photo-gallery', (req, res) => {
    // res.send('<h1 style="color:red">GALLERY</h1>')
    res.sendFile(__dirname + '/views/photo-gallery.html');
});

app.listen(3000, ()=> 'SERVER IS RUNNING' )