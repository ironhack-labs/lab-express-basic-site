let selectedLi = document.getElementsByTagName("li")
let imgDiv = document.querySelector("#imgContainer")
const imagesArray = ["/images/foto0.jpg", "/images/foto1.jpg", "/images/foto2.jpg", "/images/foto3.jpg", "/images/foto4.jpg", "/images/foto5.jpg", "/images/foto6.jpg", "/images/foto7.jpg"]


for (let i = 0; i < selectedLi.length; i++) {


  selectedLi[i].onclick = function (target) {
    
    imgDiv.firstElementChild.setAttribute("src", imagesArray[i])
  };
}

