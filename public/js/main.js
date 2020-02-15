//MENU OPEN AND CLOSE ON MOBILE
const navElement = document.querySelector('#nav');
navElement.querySelector('.letter').addEventListener('click', openMenuOnMobile, false);
navElement.querySelector('.close').addEventListener('click', closeMenuMobile, false);

function openMenuOnMobile() {
    navElement.classList.add('opened');
}

function closeMenuMobile() {
    navElement.classList.remove('opened');
}

//effect change page
document.querySelector('body').style.opacity = '1';
const navElementsLink = document.querySelectorAll('#nav a');

navElementsLink.forEach(element  => {
   element.addEventListener('click', () => {
       document.querySelector('body').style.opacity = '0';
   }, false);
});

