// Require & App Declaration
const express = require('express')
const app = express()

// Middleware de directorio publico
app.use(express.static('public'))

// Enrouting
app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home.html`))
app.get('/about', (req, res) => res.sendFile(`${__dirname}/views/about.html`))
app.get('/works', (req, res) => res.sendFile(`${__dirname}/views/works.html`))
app.get('/photo-gallery', (req, res) => res.sendFile(`${__dirname}/views/photo-gallery.html`))


// Launching Server
app.listen(3000, () => console.log("App Listening in port 3000"))
