const abtButton = document.querySelector(".abt");
const galButton = document.querySelector(".gal");

abtButton.onclick = function() {
  window.location.href = "http://localhost:3000/about";
};

galButton.onclick = function() {
  window.location.href = "http://localhost:3000/gallery";
};
