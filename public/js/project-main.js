//Full stack header effect
const headerTitle = document.querySelector('.animated-text');
const arrayOfCharacters = headerTitle.innerText.split("");
headerTitle.innerText = "";
setTimeout( () => {
    let i = 0;
    let v = 0;
    let intervalLetter = setInterval(() => {
        if (v % 2 === 0 ) {
            headerTitle.style.borderRight = "2px solid white";
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

//appear projects effect
window.addEventListener('scroll', initProjectAnimation, false);

function initProjectAnimation() {
    const scrollY = this.scrollY + window.innerHeight;
    const projectNotAnimated = document.querySelectorAll('.project');

    projectNotAnimated.forEach(projectNode => {
        if (projectNode.offsetTop+300 < scrollY) {
            projectNode.classList.add('animated');
        }
    })
}