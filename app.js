const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    next();
})

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/:pages', (req, res) => {
    switch(req.params.pages) {
        case 'about':
        res.sendFile(__dirname + '/views/about.html')
        break;
        case 'works':
        res.sendFile(__dirname + '/views/works.html')
        break;
        case 'photogallery':
        res.sendFile(__dirname + '/views/photogallery.html')
        break;
    }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))