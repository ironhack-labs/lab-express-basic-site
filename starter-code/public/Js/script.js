const links = document.querySelectorAll(".link");

for (var i = 0; i < links.length; i++) {
  if (window.location.href === links[i].href) {
    links[i].classList.toggle("is-active");
  }
}
