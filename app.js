console.log('hola')

const express = require("express")
//const hbs = require('hbs') 
const info = require("./data/profile")
// const bootstrap = require('bootstrap') 

const app = express();
app.use('/public', express.static(__dirname + '/public'));

app.get('/home', (request, response, ext) => response.sendFile(__dirname + '/views/partials/home.html'));
app.get('/about', (request, response, ext) => response.sendFile(__dirname + '/views/partials/about.html'));
app.get('/works', (request, response, ext) => response.sendFile(__dirname + '/views/partials/works.html'));
app.get('/photo-gallery', (request, response, ext) => response.sendFile(__dirname + '/views/partials/photoGallery.html'));


app.listen(3000, () => console.log("Listening on port 3000!"))


