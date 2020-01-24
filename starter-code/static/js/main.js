/*jshint esversion: 6 */
let mainImage = document.querySelector("#gallery-canvas li img");
let listImages = document.querySelectorAll("#gallery-images li img");
let next = document.getElementById("nav-next");
let prev = document.getElementById("nav-prev");
console.log(listImages);

listImages.forEach(img =>
  img.addEventListener("click", e => {
    mainImage.src = e.target.src;
    changeClass(e);
  })
);

function changeClass(e) {
  var elems = document.querySelector("#gallery-images li .active");
  console.log(elems);
  elems.classList.remove("active");
  console.log("remove all");
  e.target.className = "active";
  console.log("add");
}
