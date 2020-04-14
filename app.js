
// Require of the application Express
const express = require('express')

// Intanciación de la aplicación (Express server handling requests and responses)
const app = express()

// Middleware de directorio público (Make everything inside of public/ available)
app.use(express.static('public'))

//Enrutados (our routes)
app.get('/', (req, res, next) => res.sendFile(`${__dirname}/views/home-page.html`))
app.get('/about', (req, res, next) => res.sendFile(`${__dirname}/views/about.html`))
app.get('/works', (req, res, next) => res.sendFile(`${__dirname}/views/works.html`))
app.get('/gallery', (req, res, next) => res.sendFile(`${__dirname}/views/gallery.html`))
app.get('/generalConditions', (req, res, next) => res.sendFile(`${__dirname}/views/general-conditions.html`))

// Escucha (Server Started)
app.listen(3000, () => console.log("App.js a la escucha en el puerto 3000"))