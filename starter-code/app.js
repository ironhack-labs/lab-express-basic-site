const express = require('express');
const app = express();

app.use(express.static('public'));

//our first Route
app.get('/', (request, response, next) => {
    
    console.log(request);

    response.sendFile(__dirname + '/views/home.html');
});

app.get('/about-us', (request, response, next) => {
    
    console.log(request);

    response.sendFile(__dirname + '/views/about-us.html');
});

app.get('/photo-gallery', (request, response, next) => {
    
    console.log(request);

    response.sendFile(__dirname + '/views/photo-gallery.html');
});


app.listen(3000, () => {
    console.log('My first app listening on Port: 3000!');
});