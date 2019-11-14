const express = require('express');

const morgan = require('morgan')
const app = express();
const logger = morgan('tiny')

app.use(logger);
app.use( express.static('public') );

app.use((req, res, next) => {
    console.log('CUSTOM MIDDLEWARE -> VACA');

    next();
});


app.get('/', (req, res, next) => {
    res.sendFile( __dirname + '/public/views/index.html');
})
app.get('/about', (req, res, next) => {
    res.sendFile( __dirname + '/public/views/about.html');
})
app.get('/gallery', (req, res, next) => {
    res.sendFile( __dirname + '/public/views/gallery.html');
})


app.listen(3000, () => {
    console.log("server running!")
});