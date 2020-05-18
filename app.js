const express = require("express");
const hbs = require("hbs");
const app = express();

const data = {
    nombre: 'Nikola',
    apellido: 'Tesla',
    descubrimientos: ['Transferencia inalámbrica de energía eléctrica', 'Generador de corriente alterna.','Bombilla sin filamento o lámpara fluorescente.', 'Dispositivos de electroterapia o diagnóstico', 'Turbina sin paletas, operada por la fricción del fluido.']
};

app.use('/static', express.static('./public'));

app.set('views', __dirname + '/views')


app.get('/', (req, res) => {
    res.render("home.hbs", data);
});

app.get('/about', (req, res) => {
    res.render("about.hbs", data);
});

app.get('/works', (req, res) => {
    res.render("works.hbs", data);
});



app.listen(3000);