const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.get("/fotos", (req, res) => {
    res.sendFile(__dirname + '/public/fotos.html');
});


app.listen(3000,()=>{
    console.log('app escuchando 3000');
});