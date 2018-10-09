'use strict'
const express = require('express');
const app = express();
const port = 3000;

app.set('views', __dirname + '/views');

/*app.get('/', (req, res) => {
 res.send('hola');
})

app.get('/adios', (req, res) => {
 res.send('adios');
})*/

app.listen(port, (error) => {
 error ? console.log(error) : console.log('Todo ok') ;
})