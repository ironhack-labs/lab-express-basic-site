const express = require('express');
const app = express();
const PORT = 4040;


// ROUTES
app.get('/', (req, res, next)=> {
    console.log(req);
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, console.log('READY!'));