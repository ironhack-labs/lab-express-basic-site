const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendfile(path.resolve(__dirname, './views/home.html'));
})

app.get('/about', (req, res) => {
    res.sendfile(path.resolve(__dirname, './views/about.html'));
})

app.get('/news', (req, res) => {
    res.sendfile(path.resolve(__dirname, './views/gallery.html'));
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})