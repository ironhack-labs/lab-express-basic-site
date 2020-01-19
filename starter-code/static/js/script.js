// let DOM
window.onload = function() {
  const btnClose = document.getElementById("close");
  const galleryBig = document.getElementById("gallery-big");
  const galleryBigImg = document.getElementById("gallery-big-img");
  const galleryItem = document.querySelectorAll(".box-gallery .item");

  for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].onclick = function(e) {
      let galleryItemSrc = galleryItem[i].getAttribute("data-src");
      galleryBig.classList.add("active");
      galleryBigImg.setAttribute("src", galleryItemSrc);
    };
  }

  btnClose.onclick = function(e) {
    galleryBig.classList.remove("active");
  };
};
