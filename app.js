const express = require('express');

const app = express();

//Configure rendering views engine
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

//Configure static files
app.use(express.static("public"));

//Routes
const router = require("./config/routes.config");
app.use(router);

const port = 3000;
app.listen(port, () => console.info(`Application running at port ${port}`))