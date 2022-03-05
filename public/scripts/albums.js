const albums = [
    {
        name: "Zé Ramalho",
        img: "/images/image6.webp",
        year: 1978
    },
    {
        name: "A Peleja do Diabo com o Dono do Céu",
        img: "/images/image6.webp",
        year: 1979
    }
];

const albumCards = albums.map(album => (
    `
        <figure>
            <img src=${album.img} alt="album" />
            <figcaption>
                ${album.name}<br />
                ${album.year}
            </figcaption>
        </figure>
    `
));

console.log(albumCards.join(""));

const section = document.getElementsByTagName("section")[0];
section.innerHTML = albumCards.join("");