const express = require('express')
const app = express();
const port = 3000;


app.use(express.static(__dirname + "/public"));

app.get('/home', (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
})

app.get('/about', (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
})

app.get('/works', (request, response) => {
    response.sendFile(__dirname + "/views/works.html");
})

app.get('/photoGallery', (request, response) => {
    response.sendFile(__dirname + "/views/photoGallery.html");
})

app.listen(port, () => console.log('My first app listening on port 3000! '));