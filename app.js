// Require Express
const express = require('express');
// Express server handling requests and responses
const app = express();

// Define public folder as default static path
app.use(express.static('public'))

// Define engine an folder for templates
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

const data = {
  name: 'Steve',
  lastName: 'Esteban',
}
// our first Route:
app.get('/', (req, res) => res.redirect('/home'))
app.get('/home', (req, res) => res.render('home', {
  data
}))

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! http://localhost:3000/'));