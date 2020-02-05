const express = require('express');
const port = 3000;

const app = express() // llamamos 

app.use( express.static('public'));

//ROUTES

app.get('/', (req, res, next) => { //home
    console.log('HTTP Method', req.method);

    res.sendfile(__dirname + '/public/views/home.html');
});

app.get('/about', (req, res, next) => { // about
    res.sendfile(__dirname + '/public/views/about.html');
});

app.get('/gallery', (req, res, next) => {//gallery
    res.sendfile(__dirname + '/public/views/gallery.html');
});

app.listen(port, () =>{
    console.log(`Server is running at port ${port}`)
})