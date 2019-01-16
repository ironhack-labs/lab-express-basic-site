const express = require ('express');

//express server to handle request and responses
const app = express();

//create public folder to handle static files
app.use(express.static('public'));

//setup first route for home page
app.get('/', (request, response, next) =>{
    response.sendfile(__dirname + '/views/home.html')
})

//setup second routh for about page
app.get('/about', (request,response, next) => {
    response.sendFile(__dirname + '/views/about.html')
});

//setup third route for gallery page
app.get('/about', (request, response, next) =>{
    response.sendFile(__dirname + '/views/gallery.html')
});

//start server
app.listen(3000, () =>{
    
})

