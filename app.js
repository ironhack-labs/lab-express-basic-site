const { response } = require('express');
const express = require('express');

const app = express();
const port = 3000; 

app.use(express.static(__dirname + '/public'));

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request,response) =>{
    response.sendFile(__dirname + '/views/about-page.html')
});

app.get('/images', (request,response) =>{
    response.sendFile(__dirname + '/views/images-page.html')
});


app.listen(port, ()=> {
    console.log(`server listening port: ${port}`)
})


