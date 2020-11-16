const express = require('express');
const { request } = require('http');
const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/views/home.html');
}); 

app.get('/about', (request, response)=>{
    response.sendFile(__dirname + '/views/about.html');
    //
});

app.get('/works', (request, response)=>{
    response.sendFile(__dirname + '/views/works.html');
    //
});

app.get('/gallery', (request, response)=>{
    response.sendFile(__dirname + '/views/gallery.html');
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