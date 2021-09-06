// imports
const express = require('express');

const app = express();


// database connections


// middlewares
app.use(express.static(__dirname));

// routes
// get, post, put, delete, patch
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

// run our server || server.listen();
app.listen(5000, () => {
    console.log('Server Started Running');
})