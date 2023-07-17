const express = require('express');

const app = express();

//configre rendering views engine 
app.set('view engine', 'hbs');
app.set ('views', `${__dirname}/views`)

app.get('/', (req, res, next)=> {
    res.render(`home`);
})

app.get('/about', (req, res, next) => {
    res.render(`about`)
})

app.get('/works', (req, res,next)=>{
    res.render('works')
})

app.get('/photo-gallery', (req, res, next )=> {
    res.render('photo-gallery')
})

const port = 3000;
app.listen(port,() => console.info(`application running at port ${port}`));
