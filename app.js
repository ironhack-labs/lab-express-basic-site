const express = require('express')
const app = express()

//Se indica un directorio Static
app.use(express.static('public'))

//Se enruta
app.get('/', (req, res) => res.sendFile(`${__dirname}/views/Home.html`))
app.get('/about', (req, res) => res.sendFile(`${__dirname}/views/About.html`))
app.get('/work', (req, res) => res.sendFile(`${__dirname}/views/Work.html`))
app.get('/gallery', (req, res) => res.sendFile(`${__dirname}/views/Gallery.html`))

app.listen(3000, () => console.log('Hey there! I am listening on port: 3000:)'))