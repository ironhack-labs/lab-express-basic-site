const express = require('express');

const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => res.sendFile(`${__dirname}/views/index.html`));
app.get('/products', (req, res) => res.sendFile(`${__dirname}/views/products.html`));
app.get('/about', (req, res) => res.sendFile(`${__dirname}/views/about.html`));
app.get('/contact', (req, res) => res.sendFile(`${__dirname}/views/contact.html`));

app.listen(3000, () => console.log('Listening to the port: 3000'));