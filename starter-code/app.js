const express = require('express');

// creating the server
const app = express();

// making available the folder /public
app.use( express.static('public') );

// home route
app.get( '/home', (req, res) => {
    res.sendFile( __dirname + '/views/home.html')
})

// about route
app.get( '/about', (req, res) => {
    res.sendFile( __dirname + '/views/about.html')
})

// gallery route
app.get( '/pictures', (req, res) => {
    res.sendFile( __dirname + '/views/gallery.html')
})

// server started
app.listen( 3000, console.log('Listening on port 3000'))