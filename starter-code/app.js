const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(req);
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about',(req, res) =>{
    console.log(req)
    res.sendFile(__dirname + '/views/about.html')
})
app.get('/images', (req, res) => {
    console.log(req)
    res.sendFile(__dirname + '/views/images.html')
})

app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});