const express = require("express")
const app = express()

app.use(express.static('public'))

app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/index.html'))
app.get('/bio', (request, response, next) => response.sendFile(__dirname + '/views/about.html'))
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/works.html'))
app.get('/photos', (request, response, next) => response.sendFile(__dirname + '/views/photos.html'))


app.listen(3000, () => {
    console.log("listening on: http://localhost:3000")
})