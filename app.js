const express = require('express');


const app = express();
app.use(express.static('public'));

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html')
});

app.get("/bands", (req, res, next) => {
    res.sendFile(__dirname + '/views/bands.html')
});

app.get("/jimmy", (req, res, next) => {
    res.sendFile(__dirname + '/views/biografia.html')
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
})