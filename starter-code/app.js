let express = require('express' )
let app = express()

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/home.html')
})
app.get('/gallery', (req,res) => {
    res.sendFile(__dirname + '/views/gallery.html')
})
app.get('/about', (req,res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.listen(3000, ()=>{
    console.log('Server en el puerto 3000')
})