const express = require('express');

const app = express();

//console.log(__dirname);
app.use(express.static(__dirname+'/public'));

app.get('/',(request, response, next)=>{
    console.log(`we received a new request in rout ${request.url}`)

    //response.send('hello ironhackers');

    response.sendFile(__dirname+'/views/home.html');

});

app.get('/about',(request, response, next)=>{
    //console.log(`we received a new request in rout ${request.url}`)

    //response.send('hello ironhackers');

    response.sendFile(__dirname+'/views/about.html');

});

app.get('/works',(request, response, next)=>{
    //console.log(`we received a new request in rout ${request.url}`)

    //response.send('hello ironhackers');

    response.sendFile(__dirname+'/views/works.html');

});

app.get('/gallery',(request, response, next)=>{
    //console.log(`we received a new request in rout ${request.url}`)

    //response.send('hello ironhackers');

    response.sendFile(__dirname+'/views/gallery.html');

});


app.listen(4000, ()=>{
    console.log(`App running on port 3000!!!!`);
})