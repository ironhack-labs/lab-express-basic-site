const navlinks = document.querySelectorAll(".nav-link");
console.log(navlinks);

function addDecoration(currentlink) {
    console.log(currentlink);
}

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
      const currentlink = event.target;
      addDecoration(currentlink);
  });
});
