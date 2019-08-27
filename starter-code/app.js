// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));
//congifur HBS handlebars
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// our first Route:
app.get('/', (request, response, next) => {
    //respnse.render('index') when index.html is index.hbs
    //reponse.render('index', {username: "Hendrik"})<< this is gonna
    //be the database we use
    response.sendFile(__dirname + '/views/homepage.html');
});

// about route:
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});
//gallery route:
app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
});

// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
});