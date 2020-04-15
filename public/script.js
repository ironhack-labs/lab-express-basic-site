window.onload = function () {
  const current = document.querySelector("#current");
  const images = document.querySelectorAll(".images img");
  images.forEach((img) => img.addEventListener("click", imgClick));
  function imgClick(e) {
    current.src = e.target.src;
  }
};
