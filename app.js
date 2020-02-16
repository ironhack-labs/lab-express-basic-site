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
  const projects = [
    {
      title: 'Arac Revenge',
      img: 'aracrevenge.png',
      description: "Creació d'un petit videojoc com a projecte final del primer módul de l'Ironhack\n <a href='https://jhurtado123.github.io/gameproject/' target='_blank'>Demo ( Only PC, not responsive )</a>",
      tags: ['Html', 'DOM', 'Css', 'Javascript'],
    },
    {
      title: 'Naturgy - Easy Go',
      img: 'easygo.png',
      description: "Conjuntament amb la resta de l'equip de treball, creació d'un aplicatiu que permet al client contractar serveis de reparació dels electrodomèstics.",
      tags: ['Symfony', 'Html', 'Css', 'Javascript'],
    },
    {
      title: 'Naturgy - Contractació',
      img: 'col.png',
      description: 'Mantenir i afegir noves funcionalitats al procés de contractació de Naturgy, així com solventar petits errors que es puguin ocasionar a l\'hora modificar el codi.',
      tags: ['Yii', 'Symfony', 'Html', 'Css', 'Javascript'],
    },
    {
      title: 'Naturgy - Easy Sales',
      img: 'easysales.png',
      description: "Conjuntament amb la resta de l'equip de treball, creació i manteniment d'un aplicatiu per gestionar les ventes i/o noves contractacions de Naturgy, així com tot un procés de contractació personalitzat.",
      tags: ['Symfony', 'Html', 'Css', 'Javascript'],
    },
    {
      title: 'Naturgy - Amazon',
      img: 'amazon.png',
      description: "Creació i manteniment d'una página que permet als clients de Naturgy obtenir i gaudir de descomptes per les seves compres fetes a Amazon, tot això amb un backoffice darrere per gestionar les dades.",
      tags: ['Yii', 'Html', 'Css', 'Javascript'],
    },
    {
      title: 'Back Stock',
      img: 'takeit.png',
      description: "Projecte final de grau, realitzat conjuntament amb un company. Consta d'una APP web que permet gestionar un negoci de restauració, des de l'enviament de comandes a cuina, seguiment de l'stock de l'establiment, fins al menú virtual, on el propi client, des del seu teléfon, és qui gestiona les seves comandes i els pagaments.",
      tags: ['Symfony', 'Html', 'Css', 'Javascript'],
    },
    {
      title: 'Mecarun',
      img: 'mecarun.png',
      description: "Projecte d'E-commerce enfocat a la venta de productes per a motors de vehicles. Elaboració d'una plantilla feta a mida segons els requeriments del client adaptada a Woocommerce i la configuració d'aquet.",
      tags: ['Wordpress', 'Woocommerce'],
    },
    {
      title: 'Aida Huertas',
      img: 'aida.png',
      description: "Projecte d'una página web a l'estil portafolis per a la consulta d'una psicologa especialista. Wordpress amb plantilla feta a mida i amb el seu propi blog.",
      tags: ['Wordpress'],
    },
    {
      title: 'MySnikers',
      img: 'mysnikers.png',
      description: "Projecte d'E-commerce destinat a la venda online de calçat, que requeria manteniment i la creació de noves funcionalitats.",
      tags: ['Wordpress', 'Woocommerce'],
    },
    {
      title: 'Engiser',
      img: 'engiser.png',
      description: "Mateniment i evolutius d'un projecte d'E-commerce destinat a la venda i subministrament de recanvis per a vehicles, que requeria manteniment i la creació de noves funcionalitats.",
      tags: ['Wordpress', 'Woocommerce'],
    },
  ];
  res.render('projects', { projects, title: 'Projectes', showContact: true });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contacte', showContact: false });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
