const express = require('express');
const { request } = require('http');
const app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', (request, response)=>{
    response.send('<h1>home page</h1>');
    //response.sendFile(__dirname + 'views/home-page.html');
});

app.get('/about', (request, response)=>{
    response.send('<h1>about</h1>')
    //
});

app.get('/works', (request, response)=>{
    response.send('<h1>works</h1>')
    //
});

app.get('/gallery', (request, response)=>{
    response.send('<h1>gallery</h1>')
    //
});

app.listen(3000, ()=>{
    console.log('Server listening on port 3000');
})

/* 
1. A **Home** page, that welcomes the visitor and links to the other pages on the website.
2. An **About** page, that shares some basic information about the person.
3. A **Works** page, where you showcase some of the work of the person you chose.
4. Bonus: A **Photo Gallery** page, displaying some pictures of the person/their work. 
*/