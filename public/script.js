//HTML TARGETS-------------//
const text = document.querySelector('.black-background h2');
const background = document.querySelector(".black-background");
const rightArrow = document.querySelector('a.arrow-right');
const leftArrow = document.querySelector("a.arrow-left");
const DomImage = document.querySelector(".DOM");


background.addEventListener('mouseover', removeBackground);
background.addEventListener('mouseout', addBackground);
rightArrow.addEventListener('click', nextImage);
leftArrow.addEventListener('click', previousImage);



let books = [{
        title: "Browse some of Philip's work using the arrows.",
        year: "",
        img: "https://cdn.vox-cdn.com/thumbor/9NTPXT-XQdjsrdox2ZgWIo6-5JY=/97x0:922x550/2050x1367/cdn.vox-cdn.com/assets/1470889/pkd_lead2.png",
        story: ``,
    },

    {
        title: "Do Androids Dream of Electric Sheep?",
        year: "1968",
        img: "https://scrapsfromtheloft.com/wp-content/uploads/2016/10/Do-Androids-Dream-of-Electric-Sheep.jpg",
        story: `It was January 2021, and Rick Deckard had a license to kill.
        Somewhere among the hordes of humans out there, lurked several rogue androids. Deckard's assignment--find them and then..."retire" them. Trouble was, the androids all looked exactly like humans, and they didn't want to be found!`,
    },
    {
        title: "The Man in the High Castle",
        year: "1962",
        img: "https://i.vimeocdn.com/video/612382927_1280x720.jpg",
        story: `It's America in 1962. Slavery is legal once again. The few Jews who still survive hide under assumed names. In San Francisco, the I Ching is as common as the Yellow Pages. All because some twenty years earlier the United States lost a war — and is now occupied by Nazi Germany and Japan.
        This harrowing, Hugo Award-winning novel is the work that established Philip K. Dick as an innovator in science fiction while breaking the barrier between science fiction and the serious novel of ideas. In it Dick offers a haunting vision of history as a nightmare from which it may just be possible to wake.`,
    },
    {
        title: "UBIK",
        year: "1969",
        img: "https://thumbs.worthpoint.com/zoom/images3/1/0715/11/philip-dick-ubik-first-edition-first_1_e906a3a76d6f5e9bebb089a548163f99.jpg",
        story: `Glen Runciter is dead.
    Or is he?
    Someone died in the explosion orchestrated by his business rivals, but even as his funeral is scheduled, his mourning employees are receiving bewildering messages from their boss. And the world around them is warping and regressing in ways which suggest that their own time is running out.
    If it hasn’t already.`,
    },
    {
        title: "A Scanner Darkly",
        year: '1977',
        img: "https://www.denofgeek.com/wp-content/uploads/2014/09/scanner-main.jpg?fit=1920%2C1080",
        story: `Substance D is not known as Death for nothing. It is the most toxic drug ever to find its way on to the streets of LA. It destroys the links between the brain's two hemispheres, causing, first, disorientation and then complete and irreversible brain damage.
        The undercover narcotics agent who calls himself Bob Arctor is desperate to discover the ultimate source of supply. But to find any kind of lead he has to pose as a user and, inevitably, without realising what is happening, Arctor is soon as addicted as the junkies he works among...`,
    },
    {
        title: "Valis",
        year: "1981",
        img: "https://i.ytimg.com/vi/UH_zhZ1PBtc/maxresdefault.jpg",
        story: `VALIS is the first book in Philip K. Dick's incomparable final trio of novels (the others being The Divine Invasion and The Transmigration of Timothy Archer). This disorienting and bleakly funny work is about a schizophrenic hero named Horselover Fat; the hidden mysteries of Gnostic Christianity; and reality as revealed through a pink laser. VALIS is a theological detective story, in which God is both a missing person and the perpetrator of the ultimate crime.`,
    },
    {
        title: 'The Three Stigmata of Palmer Eldritch',
        year: "1964",
        img: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492177653/articles/2015/08/23/american-dreams-philip-k-dick-s-pre-acid-trip-to-now/150822-rich-american-dreams-tease_gsx7xy",
        story: `In the overcrowded world and cramped space colonies of the late 21st century, tedium can be endured through the drug Can-D, which enables users to inhabit a shared illusory world. When industrialist Palmer Eldritch returns from an interstellar trip, he brings with him a new drug, Chew-Z. It is far more potent than Can-D, but threatens to plunge the world into a permanent state of drugged illusion controlled by the mysterious Eldritch.`,
    },
];

let i = 0;


if (i === 0) {
    leftArrow.classList.remove("arrow");
}


DomImage.innerHTML =
    `
    <div style="background-image: url(${books[i].img});
    background-size: cover;
    background-repeat: no-repeat;
    height: 80%;
    width: 100%;"> 
    <div class="text-background">

    <h2>
    ${books[i].title}
    </h2>
    <p>${books[i].year}</p>
    <p>${books[i].story}<p/>
    </div>
</div>
</div>
    `;



function nextImage() {
    leftArrow.classList.add("arrow");
    i++;
    DomImage.innerHTML =
        `
    
    <div style="background-image: url(${books[i].img});
    background-size: cover;
    background-repeat: no-repeat;
    height: 80%;
    width: 100%;"> 
    <div class="text-background">

    <h2>
    ${books[i].title}
    </h2>
    <p>${books[i].year}</p>
    <p>${books[i].story}<p/>
    </div>
</div>
</div>
    `;
    if (i + 1 === books.length) {
        rightArrow.classList.remove("arrow");
    }
}

function previousImage() {
    rightArrow.classList.add("arrow");
    i--;
    DomImage.innerHTML =
        `
    <div style="background-image: url(${books[i].img});
    background-size: cover;
    background-repeat: no-repeat;
    height: 80%;
    width: 100%;"> 
    <div class="text-background">
    <h2>
    ${books[i].title}
    </h2>
    <p>${books[i].year}</p>
    <p>${books[i].story}<p/>
    </div>
</div>
</div>
    `
    if (i === 0) {
        leftArrow.classList.remove("arrow");
        rightArrow.classList.add("arrow");
    }
}


function removeBackground() {
    background.classList.remove("black-background");
    background.classList.add("no-background");
}

function addBackground() {
    background.classList.add("black-background");
    background.classList.remove("no-background");
}

function previous() {
    console.log("fleche gauche");
}










// removeBackground();