const burger = document.querySelector("#mobile-icon");
const navMobile = document.getElementById("nav_mobile");

function toggleMobileNav(evt) {
  navMobile.classList.toggle("is-active");
}

burger.addEventListener("click", toggleMobileNav);
