const albums = [
    {
        name: "Zé Ramalho",
        img: "/images/image6.webp",
        year: 1978
    },
    {
        name: "A Peleja do Diabo com o Dono do Céu",
        img: "/images/image7.webp",
        year: 1979
    },
    {
        name: "A terceira Lâmina",
        img: "/images/image8.webp",
        year: 1981
    },
    {
        name: "Força Verde",
        img: "/images/image9.webp",
        year: 1982
    },
    {
        name: "Orquídea Negra",
        img: "/images/image10.webp",
        year: 1983
    },
    {
        name: "Pra Não Dizer Que Não Falei De Rock",
        img: "/images/image11.webp",
        year: 1984
    },
    {
        name: "De Gosto, de Água e de Amigos",
        img: "/images/image12.webp",
        year: 1985
    },
    {
        name: "Opus visionário",
        img: "/images/image13.webp",
        year: 1986
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

const section = document.getElementsByTagName("section")[0];
section.innerHTML = albumCards.join("");