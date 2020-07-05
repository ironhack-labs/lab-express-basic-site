
const btns = document.querySelectorAll("btn_gallery")
const imgs = [
  "attention.jpg",
  "orsonwelles.png",
  "abitbol.gif",
  "pastressympa.gif",
  "isometric.pgn",
  "chips.gif",
  "fax.gif",
  "mexicanfood.jpg",
  "jusdetomate.gif",
];
const legendes = [
  "",
  "Salut c'est Orson Welles!",
  "l'homme le plus classe du monde, George Abitbol",
  "le train de tes injures roule sur les rails de mon indifférence",
  "Pose ce bouquin d'exercices",
  "J'suis même content que tu restes",
  "La modernité lui manque",
  "Oh un restaurant Mexican food",
  "Regarde, il est là ! Qui ça, le jus de tomate ?!",
];
var count = 0;
const imgElt = document.getElementById("img_gallery");
const legendElt = document.getElementById("legend_gallery");

function handleClick(evt) {
  if (evt.target.id === "goLeft") {
    console.log('goLeft triggered');
    if (count === 0) count = imgs.length - 1;
    else count--;
  } else if (evt.target.id === "goRight") {
    console.log('goRight triggered');
    count++;
    if (count === imgs.length) count = 0;
  }
  console.log('before changing properties');
  imgElt.src = `/img/gallery/${imgs[count]}`;
  legendElt.innerText = `${legendes[count]}`;
  console.log('after changing properties');
}

btns.forEach((btn) => (btn.onclick = handleClick));
