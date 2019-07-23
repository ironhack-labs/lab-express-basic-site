const express = require('express')
const port = 3000


const app = express()


app.use(express.static('public'))


app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home-page.html`))
app.get('/picos_de_europa', (req, res) => res.sendFile(`${__dirname}/views/picos-de-europa.html`))


app.listen(port, () => console.log(`App escuchando en el puerto ${port}`))