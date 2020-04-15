// ✗ npm install nodemon -g
const express = require('express');
console.log(typeof express); // function
const app = express();

app.use(express.static('public'));

// app.get('/', (request, response) => {
//     response.send('<h1>Hello Ironhackers!!!</h1>')
// });

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home-page.html');
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
})
app.get('/friends', (req, res) => {
    res.sendFile(__dirname + '/views/friends.html');
})

// app.get('localhos:3000/cat', (req, res) => {
//     // console.log(__dirname);
//     res.sendFile(__dirname + '/views/cat-page.html');
// });