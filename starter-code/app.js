const express = require('express')
const app = express()

app.use(express.static('public'));


//HOME PAGE
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home-page.html`);
});

//ABOUT
app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`);
});

//GALLERY
app.get('/gallery', (req, res) => {
    res.sendFile(`${__dirname}/views/gallery.html`);
  });
  


app.listen(3000, () => {
console.log('server running')
})