const express = require('express');
const app = express();
const hbs = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: '',
    layoutsDir: '',
    partialsDir: __dirname + '/views/partials'
}));

const data = {
    name: 'Brendan',
    surname: 'Eich',
    positions: {
        pos1: 'Creator of the Javascript',
        pos2: 'Co-founder of Mozilla',
        pos3: 'CEO of Brave Software'
    },
    birthDate: new Date('July 4, 1961').getFullYear(),
    date: new Date().getFullYear(),
    age: function(){
      return this.date - this.birthDate;
    }
};

data.age();

app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index', data));
app.get('/about', (req, res) => res.render('about', data));
app.get('/works', (req, res) => res.render('works', data));
app.get('/gallery', (req, res) => res.render('gallery', data));

app.listen(3000, () => console.log('app listening on port 3000'));