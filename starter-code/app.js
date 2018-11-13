const express = require('express');
// ^ this line means: go look in node_module folder and find another folder called express
// in that folder, there will be a file that is doing a bunch of magic and then exporting a magic variable for you and you are equaling express to that variable



const app = express();
// ^ this line creates a variable called app that is equal to whatever happens
//when we run the file that we got from requiring express on line 1

app.use(express.static('public'));




app.get('/', (req, res, next) =>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/products', (req, res, next) => {
    res.sendFile(__dirname + '/views/products.html');
})

app.get('/nick', (req, res, next) => {
    res.sendFile(__dirname + '/views/nick.html');
})





app.listen(3000, () => {
    console.log('My first app listening on port 3000');
});
