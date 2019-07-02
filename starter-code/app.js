const express = require("express");

const app = express();
app.use(express.static('public'));

app.get('/', (request,response,next)=>{
    response.sendFile(__dirname + '/view/home-page.html');
});

app.get('/about', (request,response,next)=>{
    response.sendFile(__dirname + '/view/about-page.html');
});

app.get('/photo', (request,response,next)=>{
    response.sendFile(__dirname + '/view/photo-page.html');
});


app.listen(3000,()=>{
    console.log("My first app listening on port 3000");
})