export function createNavBar() {
  let nav = document.querySelector(".navbar");
  nav.innerHTML = `<a class="navbar-brand" href="/">LOGO</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div
        class="collapse navbar-collapse d-flex justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/works">Works</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/photo-gallery">Photo Gallery</a>
          </li>
        </ul>
      </div>`;
  let navLink = document.querySelectorAll(".nav-link");
  const currentPath = location.pathname;
  for (let i = 0; i < navLink.length; i++) {
    if (currentPath === navLink[i].getAttribute("href")) {
      navLink[i].parentNode.classList.add("active");
    }
  }
}
