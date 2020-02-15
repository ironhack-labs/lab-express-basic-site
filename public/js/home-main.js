//Full stack header effect
const headerTitle = document.querySelector('.animated-text');
const arrayOfCharacters = headerTitle.innerText.split("");
headerTitle.innerText = "";
setTimeout( () => {
    let i = 0;
    let v = 0;
    let intervalLetter = setInterval(() => {
        if (v % 2 === 0 ) {
            headerTitle.style.borderRight = "2px solid #2a363c";
        } else {
            headerTitle.style.borderRight = "0px";
        }
        v++;
    },290);
    arrayOfCharacters.forEach(char => {
        i++;
        setTimeout(() => {
            headerTitle.innerHTML += char === '*' ? '&ensp;' : char;
            if (arrayOfCharacters.indexOf(char)+1 === arrayOfCharacters.length) {
                clearInterval(intervalLetter);
                setTimeout(() => {headerTitle.style.borderRight = "0px"}, 200);
            }
        }, i * 150);
    });
},500);

//Efecto on scroll
window.addEventListener('scroll', initScrollBarAnimation, false);

function initScrollBarAnimation() {
    const scrollY = this.scrollY + window.innerHeight;
    const scrollBarsNotAnimated = document.querySelectorAll('.percent-bar:not(.animated)');

    let i = 0;
    scrollBarsNotAnimated.forEach(barNode => {
        if (barNode.offsetTop < scrollY) {
            barNode.classList.add('animated');
            const quantity = barNode.parentNode.parentNode.getAttribute('data-hability');
            setTimeout(() => {
                barNode.querySelector('.fill').style.width = quantity + "%";
            }, i*200);
            i++
        }
    })
}

//show hiden text on mobile
const hidenElements = document.querySelectorAll('.show-on-mobile');

hidenElements.forEach(element => {
   element.addEventListener('click', () => {
       element.style.display = 'none';
       element.nextElementSibling.style.display= 'inline';
   } , false)
});
