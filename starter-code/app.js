const express = require('express');
const app = express();

app.use(express.static('public'));
//página Home
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/Views/home.html');

});
//página about
app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/Views/about.html');

});
//página de galería
app.get('/gallery',(req,res)=>{
    res.sendFile(__dirname + '/Views/gallery.html');

});

//Servidor
app.listen(27017,()=>{
    console.log("Server up and running");
});

