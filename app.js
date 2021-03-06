const express = require('express');

const app = express();

app.use(express.static('public'));
//express está usando public pra pegar todos os arquivos estáticos

app.get('/', (request,response) => {
    console.log(request.url);
    response.sendFile(`${__dirname}/views/home.html`);
});

app.get('/about', (request, response) => {
    console.log(request.url);
    response.sendFile(`${__dirname}/views/about.html`)
})

app.get('/works', (request, response) => {
    console.log(request.url);
    response.sendFile(`${__dirname}/views/works.html`)
})

app.get('/photo-gallery', (request, response) => {
    console.log(request.url);
    response.sendFile(`${__dirname}/views/photo-gallery.html`)
})

app.listen(3003, () => console.log('server ligado na porta 3003'))