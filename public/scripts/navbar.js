const navbar = document.createElement("nav");
navbar.innerHTML = `
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/works">Works</a></li>
            <li><a href="/gallery">Gallery</a></li>
        </ul>
    </nav>
`;

const navSpace = document.createElement("div");
navSpace.setAttribute("style", "height: 26px;");

const body =  document.body;
body.prepend(navSpace);
body.prepend(navbar);