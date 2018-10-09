const express = require ('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response,next)=>{
    console.log(request);
    response.sendFile(__dirname + '/views/home.html');
});

app.get('/', (request, response,next)=>{
    console.log(request);
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/', (request, response,next)=>{
    console.log(request);
    response.sendFile(__dirname + '/views/gallery.html');
});

app.use ((request, response)=>{
    response.sendStatus(404)
    response.send(oh, oh)
});

app.listen('3000',() => {
    console.log('Ya estamos en el puerto 3000')
});