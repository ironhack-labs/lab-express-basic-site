require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const path = require('path');

const server = express();

hbs.registerPartials(path.join(__dirname, "views/partials"));
server.use(express.static(path.join(__dirname, "public")));

const baseRouter = require("./routes/baseRoutes");
server.use('/', baseRouter);

server.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
});