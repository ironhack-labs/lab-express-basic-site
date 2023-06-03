const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
    console.log('__dirname: ', __dirname);
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (request, response, next) => {
    console.log('__dirname: ', __dirname);
    response.sendFile(__dirname + '/views/about.html')
});

app.get('/works', (request, response, next) => {
    console.log('__dirname: ', __dirname);
    response.sendFile(__dirname + '/views/works.html')
});

app.listen(3000, () => {
    console.log('El servidor esta corriendo en el puerto 3000 🏃‍♀️')
})
