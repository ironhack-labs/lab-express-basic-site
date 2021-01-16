const express = require('express');
const app = express();

app.get('/home', (req, res, nxt) =>{
    res.sendFile(__dirname +'/views/home-page.html')
});

app.get('/works', (req, res, nxt) =>{
    res.sendFile(__dirname +'/views/works.html')
});

app.get('/about', (req, res, nxt) =>{
    res.sendFile(__dirname +'/views/about.html')
});

app.get('/photo', (req, res, nxt) =>{
    res.sendFile(__dirname +'/views/photo.html')
})


app.use(express.static("public"))


app.listen(4000,()=>{
    console.log('Server listening on port 4000')
});





