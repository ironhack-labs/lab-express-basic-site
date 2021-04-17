const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', (request,response) => {
    //console.log('dirname',__dirname);
    response.sendFile(__dirname + '/views/home-page.html');
})

app.get('/about', (request,response) => {
    //console.log(__dirname);
    response.sendFile(__dirname + '/views/about-page.html');
})

app.get('/works', (request,response) => {
    //console.log(__dirname);
    response.sendFile(__dirname + '/views/works-page.html');
})

app.get('/photo-gallery', (request,response) => {
    //console.log(__dirname);
    response.sendFile(__dirname + '/views/photo-gallery-page.html');
})

app.listen(5000, () =>{
    console.log('server listeing');
})