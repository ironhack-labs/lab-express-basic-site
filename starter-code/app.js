const express = require('express');
const app = express();
const path= require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home',(request, response, next) =>{
    response.sendFile(__dirname + '/views/home.html');
});
app.get('/',(request, response, next) =>{
    response.sendFile(__dirname + '/views/home.html');
});

app.get('/about',(request, response, next)=>{
    response.sendFile(__dirname + '/views/about.html');
});
app.get('/Photo-gallery', (request,response,next)=>{
    response.sendFile(__dirname + '/views/photo-gallery.html');
});
app.listen(3000, ()=>{
    console.log("HEEEEEEYYYY!!!")
});