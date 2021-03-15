const express = require('express');
const app = express();

//hbs config
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')

app.use(express.static('public'))

app.get('/home', (request, response) => {
    // response.sendFile(__dirname + '/views/home.html')
    const {name} = request.query
    response.render('home', {userName: name})
})

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/work', (request, response) => {
    response.sendFile(__dirname + '/views/work.html')
})

app.get('/gallery', (request, response) => {
    response.sendFile(__dirname + '/views/gallery.html')
})

app.listen(3000,() => console.log('Listening'));