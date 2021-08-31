const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))

app.get('/home', (request, response ) => {
    console.log(__dirname)
    response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/topkills', (request, response) => {
    response.sendFile(__dirname + '/views/topkills.html')
})

app.listen(5000, () => {
    console.log(`Example app listening at http://localhost: 5000`)
  })

