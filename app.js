const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/discography', (req,res,next) => {
    res.sendFile(__dirname + '/views/discography.html');
});

app.get('/photoGallery', (req,res,next) => {
    res.sendFile(__dirname + '/views/photoGallery.html');
});

const port = Number(process.env.Port || 3000);
app.listen(port, () => {
    console.log(`Au, tira palante! ${port}`);
});