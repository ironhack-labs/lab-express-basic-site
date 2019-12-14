const express = require ('express');
const app = express();
// our first route

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/gallery', (req, res) => {
    res.render('gallery')
})





app.listen(3000, () => console.log('servidor listo'))