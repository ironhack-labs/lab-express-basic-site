const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');

//Referencia hacia /views
app.set('views', __dirname + '/views');

/*app.get('/', (req, res) => {
    res.render('index');
});*/

//Objeto con nombres para anclas
app.get('/', (req, res, next) => {
    let anchors = {
        game: "Minisumo Sim",
        repository: "Github",
        slides: "Genially"
    };

    res.render('index', anchors);
});

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
  });

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
});

// Puerto donde escuchará
app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
  });

