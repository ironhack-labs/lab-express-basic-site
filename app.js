const express = require(`express`);
const app= express();
const port= 4000;
app.use(express.static(`Public`))

app.get(`/`, (req,res,next)=>{
  res.sendFile(__dirname + `/Public/Views/home.html`)
})

app.get(`/about`, (req,res,next)=>{
    res.sendFile(__dirname + `/Public/Views/about.html`)
  })

app.get(`/gallery`, (req,res,next)=>{
    res.sendFile(__dirname + `/Public/Views/gallery.html`)
  })
  
  app.get(`/works`, (req,res,next)=>{
    res.sendFile(__dirname + `/Public/Views/works.html`)
  })
  
  

app.listen(port,()=>{
    "Server is running at port ${port}"
})