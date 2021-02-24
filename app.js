const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

const router = require('./routes/index.routes');

app.use('/', router);

app.listen(3000, () => console.log('My first app listening on port 3000! '));