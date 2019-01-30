const server = require("express")
const app = server()

app.use(server.static(__dirname + '/node_modules/bootstrap/dist'))
app.use(server.static('public'));
app.get('/',function(req,res) {
    res.sendFile(__dirname+'/views/index.html');
});
app.get('/login',function(req,res) {
    res.sendFile(__dirname+'/views/login.html');
});
app.get('/galeria',function(req,res) {
    res.sendFile(__dirname+'/views/galeria.html');
});

app.listen("3000")