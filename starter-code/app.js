const express = require('express')


const app = express()


app.use(express.static('public'))


app.get('/', (req, res) => res.sendFile(`${__dirname}/views/about.html`))
app.get('/mali', (req, res) => res.sendFile(`${__dirname}/views/malinoa.html`))



app.listen(3000, () => console.log("Servidor levantado..."))