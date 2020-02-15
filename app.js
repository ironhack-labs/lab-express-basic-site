const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 3001;


app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  const languages = {
    frontend: [
      { title: 'HTML5', img: 'html.png', hability: 100 }, { title: 'CSS3', img: 'css-icon.png', hability: 95 }, { title: 'Javascript (ES5 / ES6+ )', img: 'javascript.png', hability: 75 }, { title: 'Jquery', img: 'jquery.png', hability: 90 }, { title: 'Vue.js', img: 'vue.png', hability: 20 }, { title: 'React.js', img: 'react.png', hability: 10 },
    ],
    backend: [
      { title: 'Symfony', img: 'symfony.svg', hability: 60 }, { title: 'Laravel', img: 'laravel.png', hability: 50 }, { title: 'NodeJs', img: 'nodejs.png', hability: 10 }, { title: 'Spring', img: 'spring.png', hability: 20 }, { title: 'Flask', img: 'flask.png', hability: 10 },
    ],
    otros: [
      { title: 'Mysql', img: 'mysql.png', hability: 90 }, { title: 'PostgresSql', img: 'postgres.png', hability: 85 }, { title: 'MongoDB', img: 'mongo.png', hability: 15 }, { title: 'Bash', img: 'bash.png', hability: 75 }, { title: 'Git', img: 'git.png', hability: 80 },
    ],
  };

  res.render('index', { languages, title: 'Home', showContact: true });
});

app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projectes', showContact: true });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contacte', showContact: false });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
