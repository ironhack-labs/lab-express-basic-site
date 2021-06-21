const express = require('express');

const app = express();

//Make everything inside public available
app.use(express.static('public'));

//Home
app.get('/home', (request, response) => {
    
    response.sendFile(__dirname + "/views/home.html"); //__dirname current path on my computer where the file is (reserved word of node)
});

//About
app.get('/about', (request, response) => {

    response.sendFile(__dirname + "/views/about.html");
});

//Works
app.get('/works', (request, response) => {

    response.sendFile(__dirname + "/views/works.html");
});


//Gallery
app.get('/gallery', (request, response) => {

    response.sendFile(__dirname + "/views/gallery.html"); 
});



app.listen(4000, () => console.log('Server listening on port 4000'));