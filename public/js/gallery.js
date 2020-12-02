function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

const image1 = document.querySelector(".column #image-1");
const image2 = document.querySelector(".column #image-2");
const image3 = document.querySelector(".column #image-3");

image1.addEventListener("click", () => {
  myFunction(image1);
});

image2.addEventListener("click", () => {
  myFunction(image2);
});

image3.addEventListener("click", () => {
  myFunction(image3);
});
