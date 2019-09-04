const image = document.querySelector('img');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const play = document.querySelector('#play');
const start = document.querySelector('#start');
const author = document.querySelector('#artist');
const name = document.querySelector('#name');
const video = document.querySelector('iframe');

const imgArr = [
  {
    img: '/images/1.png',
    youtube: 'https://www.youtube.com/embed/aQkPcPqTq4M',
    author: 'Machintosh plus',
    disc: 'Floral shope'
  },
  {
    img: '/images/2.png',
    youtube: 'https://www.youtube.com/embed/X9wmSXZsw8E',
    author: 'Macross',
    disc: 'SailorWave'
  },
  {
    img: '/images/3.png',
    youtube: 'https://www.youtube.com/embed/Z8aUPJrduxw',
    author: 'Bl00dwave',
    disc: 'New Visuals'
  },
  {
    img: '/images/4.png',
    youtube: 'https://www.youtube.com/embed/8oBbJg_PqbU',
    author: 'Blank Banshee',
    disc: 'Blank Banshee'
  }
];

const videoArr = [''];

prev.onclick = () => {
  let index = parseInt(image.getAttribute('index'));
  image.style.display = '';
  video.style.display = 'none';
  index--;
  if (index === -1) index = imgArr.length - 1;
  console.log(index);
  image.src = imgArr[index].img;
  image.setAttribute('index', index);
  name.innerText = imgArr[index].author;
  author.innerHTML = imgArr[index].disc;
  video.src = imgArr[index].youtube;
};

next.onclick = () => {
  let index = parseInt(image.getAttribute('index'));
  image.style.display = '';
  video.style.display = 'none';
  index++;
  if (index === imgArr.length) index = 0;
  image.src = imgArr[index].img;
  image.setAttribute('index', index);
  name.innerText = imgArr[index].author;
  author.innerHTML = imgArr[index].disc;
  video.src = imgArr[index].youtube;
};

image.onmouseover = () => {
  play.style.display = '';
};

play.onmouseout = () => {
  play.style.display = 'none';
};

start.onclick = () => {
  image.style.display = 'none';
  video.style.display = '';
  play.style.display = 'none';
};
