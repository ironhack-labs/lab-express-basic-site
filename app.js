const express = require('express');

const app = express()


app.use(express.static('public'));



app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/start-page.html'); 
   // <a href="/about">Go to about Page </a>
    
    

;
});


app.get('/about', (req, res, next)=>{
    res.sendFile(__dirname + '/views/about-page.html');
})

app.get('/history', (req, res, next)=>{
    res.sendFile(__dirname + '/views/history-page.html')
})

app.get('/personality', (req, res, next)=>{
    res.sendFile(__dirname + '/views/personality.html');
})



app.listen(3000, () => {

})