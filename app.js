const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
    //res.send('<h1>Hello Express</h1>')
    res.sendFile(__dirname + '/views/my-homepage.html');
});

app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/views/about-page.html');
});
app.get('/works',(req,res)=>{
    res.sendFile(__dirname + '/views/work-page.html');
});
app.get('/photos',(req,res)=>{
    res.sendFile(__dirname + '/views/photo-gallery.html');
});


app.listen(5000,()=>{
    console.log('Server listening on port 5000');
});
