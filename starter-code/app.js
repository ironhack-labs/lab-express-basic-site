const express 	= require("express")
const app 		= express()
const PORT = 3000
app.use(express.static("public"))
	.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
		})
	.get("/about", (req,res)=> {
	res.sendFile(`${__dirname}/views/about.html`)
		})
	.get("/gallery", (req,res)=> {
	res.sendFile(`${__dirname}/views/gallery.html`)
		})
	.listen(PORT, ()=>{
	console.log(`Server listening on http://localhost:${PORT}`);
		})
