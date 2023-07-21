const express = require('express')
const app = express();
const port = 3000

//ENGINE// 
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`)

app.get('/', (req, res) => {
    res.render('home')
}); 
app.get('/about', (req, res, next) => {
    res.render('about')
});
app.get('/photo_gallery', (req, res, next) => {
    imageList = [];
    imageList.push({src: "/public/photo/DSCF0836.JPG", name: "Berlin"});
    res.render('photo_gallery', { imageList: imageList})
});
app.get('/works', (req, res, next) => {
    res.render('works')
});

app.listen(port, () => {
    console.info(`probando 1, 2, 3 ${port}`)
  });
  