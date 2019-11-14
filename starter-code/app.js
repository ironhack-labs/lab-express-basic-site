const express = require('express');

const app = express();


//MIDDLEWARE
app.use(express.static('public'));
app.use((request, response, next) => {
    next();
})

app.get('/', (request, response, next) => {

    response.send('<h1>Welcome Ironhacker !!</h1>');
});

app.get('/home', (request, response, next) => {

    response.sendFile(__dirname + '/public/views/home.html')
})

app.get('/about', (request, response, next) => {

    response.sendFile(__dirname + '/public/views/about.html')
})

app.get('/gallery', (request, response, next) => {

    response.sendFile(__dirname + '/public/views/gallery.html')
})

// SERVER STARTED
app.listen(4000, () => {
    console.log('My first app listening on port 3000!');
   });