const navbar = document.createElement("nav");
navbar.innerHTML = `
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/albums">Albums</a></li>
        <li><a href="/gallery">Gallery</a></li>
    </ul>
`;

const navSpace = document.createElement("div");
navSpace.setAttribute("style", "height: 51px;");

const body =  document.body;
body.prepend(navSpace);
body.prepend(navbar);