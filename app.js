const express = require('express');

const app = express();

//app.use(logger('dev'))




app.get("", (req, res, next) => {
res.sendFile(__dirname + '/views/home.html')
})



app.get('/home', (req, response, next) => response.sendFile(__dirname + '/views/home.html'));

app.get('/works', (req, response, next) => response.sendFile(__dirname + '/views/works.html'));

app.get('/about', (req, response, next) => response.sendFile(__dirname + '/views/about.html'));

app.get('/gallery', (req, response, next) => response.sendFile(__dirname + '/views/gallery.html'));




const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
});


