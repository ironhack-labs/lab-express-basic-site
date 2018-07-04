const express = require('express')
const app = express();

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/html/home.html')

});

app.get('/html/about.html', (req,res)=>{
    res.sendFile(__dirname + '/html/about.html')

});

app.get('/html/second-page.html', (req, res)=>{
    res.sendFile(__dirname + '/html/second-page.html')
});

app.listen(3000, ()=>{
    console.log('Server runing')
});