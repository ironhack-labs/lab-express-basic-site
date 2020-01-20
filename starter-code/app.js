const myExpress = require('express');
const hbs = require('hbs');

require('dotenv').config();

const app = myExpress();

app.use(myExpress.static('public'));
app.set('views',__dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/htmls/home.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/htmls/about.html');
});

app.get('/photoGallery', (req, res) => {
    res.sendFile(__dirname + '/views/htmls/photoGallery.html');
});

app.listen(process.env.PORT, () =>
    console.log(`Running on port ${process.env.PORT}`)
);

