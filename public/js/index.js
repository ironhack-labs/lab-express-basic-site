const btnOpenMenu = document.querySelector("#burger");
const btnCloseMenu = document.querySelector("#close-menu");
const mainNav = document.querySelector("#main-nav");

//ADD EVENT LISTENER

btnOpenMenu.addEventListener("click", function() {
    mainNav.classList.add("nav-visible")
})
btnCloseMenu.addEventListener("click", function() {
    mainNav.classList.remove("nav-visible")
})