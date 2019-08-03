//Rquire Express
const express = require('express');

//Express server handling request and responses
const app = express();

//make everything inside of public/ available

app.use(express.static('public'));

//HOME PAGE ROUTE
app.get('/', (request, response, next) =>{
    response.sendFile(__dirname + '/views/home-page.html');
})

app.get('/gallery', (request, response, next) =>{
    response.sendFile(__dirname + '/views/gallery.html');
})

app.get('/about', (request, response, next) =>{
    response.sendFile(__dirname + '/views/about.html');
})

app.listen(3000, () =>{
    console.log("App running on port 3000");
})