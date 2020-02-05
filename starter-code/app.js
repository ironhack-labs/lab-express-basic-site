const express = require('express');
const port = 3000;

const app = express();

app.use(express.static('public'));

//routes
app.get('/', (req, res, next) => {
  console.log('HTTP Method', req.method);
  res.sendFile(__dirname + '/public/views/index.html'); 
});

app.get('/about', (req, res, next) => { 
  res.sendFile(__dirname + '/public/views/about.html');
});

app.get('/gallery', (req, res, next) => { 
  res.sendFile(__dirname + '/public/views/gallery.html');
});

app.listen(port, () => { 
  console.log(`Server is running at port ${port}.`);
})
