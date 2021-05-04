// step 1 : require dependencies
const express = require("express");
const hbs = require("hbs");

// step 2 : base setup
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

hbs.registerPartials(__dirname + "/views/partials");

// step 3 : routes handling
const homeRouter = require('./routes/home.js');
app.get('/', homeRouter);

const itemsRouter = require('./routes/items.js');
app.get('/items', itemsRouter);

const aboutRouter = require('./routes/about.js');
app.get('/about', aboutRouter);

const contactRouter = require('./routes/contact.js');
app.get('/contact', contactRouter);

// step 4 : app listen to kickstart
app.listen(5000);