require('dotenv').config();
require('./config/dbConnection');

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

const baseRouter = require('./routes/baseRoutes');
app.use('/', baseRouter);

const aboutRouter = require('./routes/aboutRoutes');
app.use('/about', aboutRouter);

const episodesRouter = require('./routes/episodesRoutes');
app.use('/episodes', episodesRouter);

const galleryRouter = require('./routes/galleryRoutes');
app.use('/gallery', galleryRouter);

//process.end.PORT
app.listen(process.env.PORT, () => {
	console.log(`Server running on : http://localhost:${process.env.PORT}`);
});
