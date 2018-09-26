

const express = require("express");
var path = __dirname + "./views/";
const app = express()
var router = express.Router();


router.use(function(request, response, next){
    console.log("/" + request.method);
    next();
})
router.get("/", function(request,response){
    response.sendFile(path + "home.html")
})
router.get("/", function(request, response){
    res.sendFile (path + "about.html")
})
router.get("/", function(request, response){
    res.sendFile(path + "gallery.html")
})

app.use("/views", router);

app.use("*", function(request, require){
    response.sendFile(path + "404.html");
});

app.get("/views", (request, response, next) => {
    response.send("Welcome motherfuckkkkerr");
});

app.listen(3000, () => {
    console.log("mi primera appputooss")
});


