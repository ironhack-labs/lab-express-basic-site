const express = require('express')

app = express()

require('./src/routes')(app)

app.listen(5000,()=>{

    console.log('Server running on port 5000')
})

