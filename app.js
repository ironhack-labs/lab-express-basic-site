const express = require ('express');
const app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/public/views/about.html');
});

app.get('/gallery', (req, res)=>{
    res.sendFile(__dirname + '/public/views/gallery.html');
});

app.listen(2000, ()=>{
    console.log('Listening on port 2000');
});