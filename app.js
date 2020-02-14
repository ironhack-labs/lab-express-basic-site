var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

const information = {
  firstname: 'Jaime', 
  lastname: 'Mora',
  title: {portfolio: 'Portfolio', contact: 'Contact', aboutme: 'About me', projects: 'Projects' },
  tech: {html: 'HTML5', css: 'CSS 3', js: 'Javascript'},
  project: {revera: 'Revera', slack: 'Slack', rover: 'Rover', npm: 'NPM'}
}


app.get('/', (req, res, next) => res.render('index', information));
app.get('/contact', (req, res, next) => res.render('contact', information));
app.get('/about-me', (req, res, next) => res.render('about-me', information));
app.get('/projects', (req, res, next) => res.render('projects', information));


app.listen(3000, function() {
  console.log('Jaime\'s portfolio in node.js');
});
