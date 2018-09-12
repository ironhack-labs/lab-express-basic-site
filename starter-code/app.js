const express = require('express');
const hbs = require('hbs');
const path = require('path');

// We create our own server named app
// Express server handling requests and responses
const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  let data = {
    title: 'James Bond 007',
    imgSource: 'Daniel.jpg',
    description: "In the novels (notably From Russia, with Love), Bond's physical description has generally been consistent: slim build; a three-inch long, thin vertical scar on his right cheek; blue-grey eyes; a 'cruel' mouth; short, black hair, a comma of which falls on his forehead.",
  }

  res.render('index', data);
});

app.get('/about', (req, res, next) => {
  let data = {
    title: 'About James - the man behind the gun',
    imgSource: 'vintageDaniel.jpg',
    aboutJames: "Commander James Bond, CMG, RNVR, is a fictional character created by the British journalist and novelist Ian Fleming in 1953. He is the protagonist of the James Bond series of novels, films, comics and video games. Fleming wrote twelve Bond novels and two short story collections. His final two books—The Man with the Golden Gun (1965) and Octopussy and The Living Daylights (1966)—were published posthumously."
  }

  res.render('about', data);
})

app.get('/gallery', (req, res, next) => {
  let data = {
    title: 'Pics of James - Mr Photogenic',
    image1: 'smooth.jpg',
    image2: 'car.jpg',
    image3: 'barrel.jpg'
    }

  res.render('gallery', data);
})


app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});