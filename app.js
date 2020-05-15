const express = require("express");

const app = express();

app.get('/home', (req,res, next) => {
    console.log(req);
    res.send('<h1> Welcome Ironhacker </h1>')
});

app.listen(3000)