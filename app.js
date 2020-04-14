require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const baseRouter = require('./routes/baseRoutes.js');

// link to public folder:
app.use(express.static(path.join(__dirname, 'public')));

// link to partials folder:
hbs.registerPartials(path.join(__dirname + '/views/partials'));

// link to routes folder:
app.use('/', baseRouter);

// define PORT server env:
app.listen(process.env.PORT, () => {
  console.log(`App listening on http://localhost:3001`);
});
