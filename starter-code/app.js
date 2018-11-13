const express = require("express");
const app = express();

var  _directory = "/views";
app.use(express.static('public')); //public folder



app.get("/", (request, response) => {
    response.sendFile(__dirname+_directory+'/home.html');
});

app.get('/about',(request,response)=>{
    response.sendFile(__dirname+_directory+'/about.html');
});

app.get('/gallery',(request,response)=>{
    response.sendFile(__dirname+_directory+'/gallery.html')
})



app.listen(3000, () => {
    console.log('port ---> 3000!');
  })
    