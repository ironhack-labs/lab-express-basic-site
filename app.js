const express  = require('express')
const app  = express()

app.use(express.static('public'))

app.get('../', (req, res) => res.sendFile(`${__dirname}/views/index.html`))
app.get('../cap-iron', (req, res) => res.sendFile(`${__dirname}/views/`))

app.listen(3000, () => console.log('App escuchando en el puerto 3000'))