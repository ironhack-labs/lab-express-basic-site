'use strict'

const express = require('express');

const morgan = require('morgan');

const logger = morgan('tiny');

const app = express();

//Middleware
app.use(logger);
app.use(express.static('public'));

app.get('/', (req,res,next) => res.sendFile(__dirname + '/public/views/index.html'));
app.get('/about', (req,res,next) => res.sendFile(__dirname + '/public/views/about.html'));
app.get('/gallery', (req,res,next) => res.sendFile(__dirname + '/public/views/gallery.html'));


//server listening
app.listen(3000, () => {
    console.log('Lab server running');
})