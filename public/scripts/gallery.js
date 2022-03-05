const photos = [
    {
        name: "Zé Ramalho and Nelson Motta",
        img: "/images/image14.webp",
    },
    {
        name: "photo in a 2018's show",
        img: "/images/image15.webp",
    },
    {
        name: "Parceria dos Viajantes - 2007",
        img: "/images/image16.webp",
    },
    {
        name: "Kryptonia's clip in 1983",
        img: "/images/image17.webp",
    },
    {
        name: "Studio Photo",
        img: "/images/image18.webp",
    },
    {
        name: "Zé Ramalho at 3 years old",
        img: "/images/image19.webp",
    }
];

const gallery = photos.map(photo => (
    `
        <figure>
            <img src=${photo.img} alt="album" />
            <figcaption>
                ${photo.name}
            </figcaption>
        </figure>
    `
));

const section = document.getElementsByTagName("section")[0];
section.innerHTML = gallery.join("");