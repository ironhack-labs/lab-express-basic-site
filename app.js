const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
  });
  
  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
  });
  
  app.get('/works', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'works.html'));
  });

  const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});