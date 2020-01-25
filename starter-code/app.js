const express = require('express');
const hbs = require('hbs');

// -------------------------
// Express instance
// -------------------------
const app = express();
const port = 4000;
app.listen(port, () => console.log(`Ready on port ${port}`));


// -------------------------
// App configurations
// -------------------------
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use('/public', express.static(__dirname + '/public'))


// -------------------------
// Pages
// -------------------------
app.get('/', (request, response) => {
    response.render('home', {
        home: 'active',
        carousel: [
            {
                image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/12/witcher_14.jpg?itok=-3yoYMWi',
                texto: 'hola 1'
            },
            {
                image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/12/witcher_14.jpg?itok=-3yoYMWi',
                texto: 'hola 2'
            },
            {
                image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/12/witcher_14.jpg?itok=-3yoYMWi',
                texto: 'hola 3'
            }
        ]
    });
});

app.get('/about', (request, response) => {
    response.render('about', {
        about: 'active'
    });
});

app.get('/gallery', (request, response) => {
    response.render('gallery', {
        gallery: 'active'
    });
});

app.get('/contact', (request, response) => {
    response.render('contact', {
        contact: 'active'
    });
});
