const express = require('express');
const {request} = require('http');

const app = express();

app.use(express.static('public'));

app.get('/home',(request,response,next)=>
response.sendFile(__dirname + '/views/home.html'));

app.get('/about',(request,response,next)=>
response.sendFile(__dirname + '/views/about.html'));

app.get('/works',(request,response,next)=>
response.sendFile(__dirname + '/views/works.html'))

app.listen(3000,()=>console.log("it's listening on port 3000"));

