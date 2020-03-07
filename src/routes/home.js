const path = require('path')

module.exports = app =>{

    app.get('/',(req,res)=>{
        res.sendFile(path.join(path.dirname(__dirname),'app','html','home.html'))
    })

}