let buttonL = document.getElementById("btnleft");
let buttonR = document.getElementById("btnright");
let currImage = document.getElementById("currImage")

let images = [
    "./photo1.jpg",
    "./photo2.jpg",
    "./photo3.jpg",
]
let imgIndex = 0
currImage.src = images[imgIndex]

let prevImg = () => {
    imgIndex--
    if(imgIndex < 0) {imgIndex = images.length-1}
    currImage.src = images[imgIndex]
}
let nextImg = () => {
    imgIndex++
    if(imgIndex >= images.length) {imgIndex = 0}
    currImage.src = images[imgIndex]
}

buttonL.addEventListener("click",prevImg)
buttonR.addEventListener("click",nextImg)
addEventListener("keydown", e => {
    console.log(e.keyCode)
    if (e.keyCode === 37) {prevImg()}
    if (e.keyCode === 39) {nextImg()}
  });