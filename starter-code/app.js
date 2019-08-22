const express = require('express')
const app = express()
let hbs = require('hbs');

// view engine setup
app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');


// Make everything inside of public/ available
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render(__dirname + '/views/index.hbs');
})

app.get('/names', function (req, res) {
    res.render(__dirname + '/views/index.hbs', {
        users: [{
            firstName: "mir",
            lastName: "blala"
        }, {
            firstName: "lallalala",
            lastName: "loooo"
        }]
    });
})

app.get('/about', function (req, res) {
    res.render(__dirname + '/views/about.html');
})

app.listen(3000)