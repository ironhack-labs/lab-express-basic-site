const boi = document.getElementById('boi');
const captions = document.getElementById('caption-div');
const dis = document.getElementById('dis');

dis.addEventListener('mouseover', entrance);
dis.addEventListener('mouseout', quit);

function entrance() {
    let dir = 'f';
    boi.classList.add('active');
    captions.classList.add('active-caption');
    boi.style.left = '1px';

    const intervalId = setInterval(() => {
        switch (dir) {
            case 'f':
                boi.style.left = parseInt(boi.style.left) + 3 + 'px';
                if (parseInt(boi.style.left, 10) >= 1080) {
                    boi.style.transform = 'rotateY(150deg)';
                    dir = 'b';
                }
                break;

            case 'b':
                boi.style.left = parseInt(boi.style.left) - 3 + 'px';
                if (parseInt(boi.style.left, 10) <= 20) {
                    boi.style.transform = 'rotateY(0deg)';
                    dir = 'f';
                }
                break;
        }
    }, 1000 / 60);
}

function quit() {
    boi.classList.remove('active');
    captions.classList.remove('active-caption');
    boi.style.left = '0';
    clearInterval(intervalId);
}