const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/biography', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/biography.html'));
});

app.get('/companies', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/companies.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


