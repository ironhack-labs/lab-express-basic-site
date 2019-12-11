const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/koeter', (request, response)=>{
    response.sendFile(__dirname +'/public/Images/Franzi.jpg');
}
);
app.get('/home', (request, response)=>{
    response.sendFile(__dirname + '/views/index.html');
}
);
app.get('/about', (request, response)=>{
    response.sendFile(__dirname + '/views/about.html');
}
);
app.get('/photo', (request, response)=>{
    response.sendFile(__dirname + '/views/photo_gallery.html');
}
);
app.listen(3000, () => {
    console.log('server listening on port 3000');
});