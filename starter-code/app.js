const express = require("express")
const chalk = require("chalk")



const app = express();

app.use(express.static("public"))
app.get("/home", (request,response)=>{
    response.sendFile(`${__dirname}/public/views/index.html`);

});

app.get("/" , (request,response) => {
    response.send("<h1>Welcome </h1>")     
});

app.get("/gallery" , (request,response) => {
    response.sendFile(`${__dirname}/public/views/gallery.html`);     
});

app.get("/about" , (request,response) => {
    response.sendFile(`${__dirname}/public/views/about.html`);     
});

app.listen(3000, () => {
    console.log(chalk.green("You are in the 3000 port"))
})
