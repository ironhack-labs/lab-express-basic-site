 const express = require('express');
 const app = express();

 app.use(express.static('public'));

 app.get('/', (Request, Response) => {
     Response.sendFile(__dirname + '/view/home-page.html');
 });

 app.get('/About', (Request, Response) => {
    Response.sendFile(__dirname + '/view/about.html');
});

app.get('/Gallery', (Request, Response) => {
    Response.sendFile(__dirname + '/view/photo-gallery.html');
});

 app.listen(3002, () => {
     console.log('ta rodando amigão');
     console.log(__dirname);
 });
