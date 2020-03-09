const expresss = require('express');
const path = require('path');

const app = expresss();

app.use(expresss.static(path.join(__dirname, 'public')));

console.log(__dirname);

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/about', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/work', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'work.html'));
});

app.get('/gallery', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'gallery.html'));
});


app.listen(3000, () => console.log('App running on PORT 3000'));