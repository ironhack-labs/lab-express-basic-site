let express = require("express");
let app = express();

// hacer estatico public
app.use(express.static(`public`));

//crear las 3 rutas de la tarea
app.get('/home' , (req, res) => res.sendFile(__dirname + '/views/home.html'));    // 1ra pag
app.get('/about', (req, res) => res.sendFile(__dirname + '/views/about.html'));   // 2da pag 
app.get('/works', (req, res) => res.sendFile(__dirname + '/views/works.html'));   // 3ra pag 


//crea servidor
app.listen(2000,  ()=> {
    console.log ("Servidor funcionando") });