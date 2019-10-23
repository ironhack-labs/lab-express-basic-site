const { home, about, gallery } = require("./src/index")

const express = require('express')
app = express();

app.get('/home', home);
app.get('/about', about);
app.get('/gallery', gallery);
app.use(express.static('public'));

app.listen(3000)