// setting up express
const express = require('express');
const app = express();


// adding public folder to have access to it
app.use(express.static(__dirname + '/public'));

//setting up get requests
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response) =>{
    response.sendFile(__dirname + '/views/about.html');
})

app.get('/work', (request, response) =>{
    response.sendFile(__dirname + '/views/work.html');
})

app.get('/photos', (request, response) => {
    response.sendFile(__dirname + '/views/photos.html');
})


//setting up listen
app.listen(5000, ()=>{
    console.log('Server listening')
})


