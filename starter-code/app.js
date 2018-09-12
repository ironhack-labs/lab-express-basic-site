const express = require('express');

const app = express();


app.use(express.static(__dirname + '/public'));

app.get('/home', (req, res) => {
    console.log(req);
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/gallery', (req, res) => {
    console.log(req);
    res.sendFile(__dirname + '/views/gallery.html')
})

app.get('/about', (req, res) => {
    console.log(req);
    res.sendFile(__dirname + '/views/about.html')
})

app.listen(3000, () =>{
    console.log('LISTENING TO PORT 3000')
})

