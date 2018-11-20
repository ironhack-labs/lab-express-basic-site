// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();
var routes = require('./routes.js')

// Make everything inside of public/ available
app.use(express.static('public'));


// creates an absolute path pointing to a folder called "views"
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/',routes.index);
app.get('/about',routes.about);
app.get('/photo',routes.photoGallery);

// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
});