const express = require('express');
/* const index = require('./src/routes/index'); */
const {bar, about, home, photo} = require('./src/routes/index');
const app = express();

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', bar);

app.get('/home', home);

app.get('/about', about);

app.get('/photo', photo);

app.listen(3000);