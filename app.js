////// App configuration

const express = require('express')
const app = express()

const path = require('path');
const router = express.Router();

const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//////// Routing

app.use(express.static(path.join(__dirname, 'views')));
app.use('/', router);

router.get('/',function(req,res){
  res.sendFile('/home.html');
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname +'/views/about.html'));
});

router.get('/works',function(req,res){
  res.sendFile(path.join(__dirname +'/views/works.html'));
});


//////// App listening

app.listen(3000, () => {
  console.log("Aplicacion lista en puerto http//localhost:3000")
})