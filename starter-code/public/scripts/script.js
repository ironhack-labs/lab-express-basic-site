const main = "../../views/index.hbs"

const mainPhoto = document.getElementById("imageMain")
console.log(document.getElementById("imageMain"))

mainPhoto.onclick = (event) => {
  mainPhoto.style.transform = ("200vw, 200vw")
}
