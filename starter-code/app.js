const express = require('express');
const app = express();



app.use(express.static(__dirname + '/view'));


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/view/index.html')
});

app.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/view/about.html')
});

app.get('/galery', (req, res)=>{
    res.sendFile(__dirname + '/view/galery.html')
});

app.listen(3000, ()=>{
    console.log('escuchando en el 3000')
});