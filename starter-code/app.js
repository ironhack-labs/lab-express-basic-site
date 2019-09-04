const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

app.get('/', (req, res) => res.sendFile('/Users/juliana/IronHack/w4d3/lab-express-basic-site/starter-code/views/home.html'));

app.get('/about', (req, res) => res.sendFile('/Users/juliana/IronHack/w4d3/lab-express-basic-site/starter-code/views/about.html'));

app.get('/photos', (req, res) => res.sendFile('/Users/juliana/IronHack/w4d3/lab-express-basic-site/starter-code/views/photos.html'));

// app.get('/style.css', (req, res) => res.sendFile('/Users/juliana/IronHack/w4d3/lab-express-basic-site/starter-code/public/style.css'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))