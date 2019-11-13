var image1 = document.querySelector(".image1")
var image2 = document.querySelector(".image2")
var image3 = document.querySelector(".image3")
var image4 = document.querySelector(".image4")
var image5 = document.querySelector(".image5")
var image6 = document.querySelector(".image6")
var image7 = document.querySelector(".image7")
var image8 = document.querySelector(".image8")

var image1Original = true
var image2Original = true
var image3Original = true
var image4Original = true
var image5Original = true
var image6Original = true
var image7Original = true
var image8Original = true

image1.addEventListener("click", (e)=>{
    if(image1Original){
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/Sea_Scorpion.jpg")
                op=1;
                image1Original = false;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    else {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/Megalograptus_Size.png")
                op=1;
                image1Original = true;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    }
)


image2.addEventListener("click", (e)=>{
    if(image2Original){
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/pter.jpg")
                op=1;
                image2Original = false;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    else {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/download.png")
                op=1;
                image2Original = true;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    }
)


image3.addEventListener("click", (e)=>{
    if(image3Original){
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/b68c0327-3479-4cfe-969d-50dc42d424e6.jpg")
                op=1;
                image3Original = false;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    else {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/kiaeri.png")
                op=1;
                image3Original = true;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    }
)


image4.addEventListener("click", (e)=>{
    if(image4Original){
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/Jaekelopterus 1.jpg")
                op=1;
                image4Original = false;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    else {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/jake.png")
                op=1;
                image4Original = true;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    }
)


image5.addEventListener("click", (e)=>{
    if(image5Original){
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/220px-Eurypterus_Paleoart.jpg")
                op=1;
                image5Original = false;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    else {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/eury.png")
                op=1;
                image5Original = true;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    }
)


image6.addEventListener("click", (e)=>{
    if(image6Original){
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/CampylocephalusDB117.jpg")
                op=1;
                image6Original = false;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    else {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/camaply.png")
                op=1;
                image6Original = true;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    }
)



image7.addEventListener("click", (e)=>{
    if(image7Original){
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/hiber.jpg")
                op=1;
                image7Original = false;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    else {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/hiber.jpg")
                op=1;
                image7Original = true;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    }
)


image8.addEventListener("click", (e)=>{
    if(image8Original){
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/Brachyopterus.jpg")
                op=1;
                image8Original = false;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    else {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                console.log("finished")
                e.target.setAttribute("src", "/css/images/brach.png")
                op=1;
                image8Original = true;
            }
            e.target.style.opacity = op;
            e.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    }
)