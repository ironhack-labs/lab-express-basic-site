const express = require('express')

const app = express()

app.use(express.static('public'))

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

const data = {
    name: "Marina",
    job: "Graphic Designer",
    email: "marinacidrey@gmail.com",
    bootcamp: {
        school: "IronHack",
        name: "<span>Web Development</span>"
    },
    cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"],
    images: {
        image1:"/images/msmarvel.gif",
        image2:"/images/RenderArlito.jpg",
        image3:"/images/animacion-menu-ppal.gif",
        image4:"/images/last-ticket.gif",
        image5:"/images/1 render.jpg"
    }
}

app.get(['/', '/home'], (request, response, next) => {
    response.render('home', data);
  });

  app.get('/about', (request, response, next) => {
    response.render('about', data);
  });

  app.get('/gallery', (request, response, next) => {
    response.render('gallery', data);
  });

  app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  })