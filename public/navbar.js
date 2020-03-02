console.log("Made it")
var navbar= document.getElementById("navbar")
var listItems= navbar.getElementsByClassName("list-item")
var activeDiv= navbar.getElementsByTagName("div")
console.log('navbar element',navbar)
console.log('activeLI element',listItems)
console.log('activeDIV element',activeDiv)

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click",function(){
        console.log('this',this)
        // console.log('this',this.data("xcoord"))
        // var xcoord = this.data("xcoord");
        var xcoord = this.getAttribute("data-xcoord");
        console.log( xcoord)
        console.log(navbar.getElementsByTagName("nav div").style.marginLeft)
        // navbar.getElementsByTagName("nav div").style.left = xcoord;
        // this.addClass("active");
        // listItems.not(this).removeClass("active");
    });
}