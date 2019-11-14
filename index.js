const express = require('express');

var morgan = require('morgan');

const logger = morgan('tiny');

const app = express();

app.use(logger);
app.use(express.static('public'));


//ROUTING
app.get( '/', ( require, response, next) => {
    response.send( '<h1>WELCOME!</h1>' );
});

app.get( '/home', ( require, response, next) => {
    response.sendFile(__dirname + '/public/views/index.html');
})

app.get( '/about', (require, response, next ) => {
    response.sendFile(__dirname + '/public/views/about.html');
} )

app.get('/photo-galery', ( require, response, next ) => {
    response.sendFile(__dirname + '/public/views/photo-gallery.html');
})

app.get('/main.css', ( require, response, next ) => {
    response.sendFile(__dirname + '/public/scss/main.css');
})




//START SERVER
app.listen(3000,  () => {
    console.log('SERVER RUNNING');
});