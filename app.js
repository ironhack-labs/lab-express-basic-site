const express = require('express')

const app = express()

app.get('/',(req,res,next) => {
    res.send('<h1>Welcome Ironhack.... :)</h1>')
})

app.listen(3000,() => 'Starting server')