// Requiring express package
const express = require('express')

//Our routes
//const mainRoutes = require('./routes/main');

// Starting express app
const app = express()

// Defining Port
const port = 3000


//router.get('/home', (req, res) => res.sendFile(__dirname + '/views/home.html'))
app.get('/', (req, res) => res.sendFile(__dirname + '/view/home.html'))

app.get('/about', (req, res) => res.sendFile(__dirname + '/view/about.html'))

app.get('/gallery', (req, res) => res.sendFile(__dirname + '/view/photo.html'))

app.get('*', (req, res) => res.send('404 - Page not found'))

// Start listening for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`))