// Require Express
const express = require('express');


// Express server handling requests and responses
const app = express();

// Middleware
//app.use (logger);
app.use (express.static('public') ) ; // Get XYZ.ext

//app.use((request, response, next) =>{
//    console.log('CUSTOM MIDDLEWARE > vaca');
    
//    next();
//});



// our first Route:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/index.html', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/about.html');
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/gallery.html');
});

// Server Started
app.listen(3000, () => {
    console.log('Working on port 3000!');
});
