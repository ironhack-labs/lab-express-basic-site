var body = document.querySelector("body")
var response = prompt("Sea scorpions are so cool, right?")

if (response.toLowerCase()=="yes"||response.toLowerCase()=="y"){
    console.log("That's right")
} else {
    var image = document.createElement("img")
    image.setAttribute("src", "/css/images/disapp.png")
    body.innerHTML="    <a href=\"/views/index.html\">Home</a>"
    body.appendChild(image)
    throw new Error("Access denied")
}