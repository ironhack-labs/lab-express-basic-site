const path = require('path');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const workRoutes = require('./routes/works');
const galleryRoutes = require('./routes/gallery');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use(homeRoutes);
app.use(aboutRoutes);
app.use(workRoutes);
app.use(galleryRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});