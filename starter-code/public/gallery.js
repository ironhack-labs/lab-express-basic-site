'use strict'
console.log('connected');
let currentImg = 1;

const changeImg = (direction) => {
    if (direction === 'next') {
        if (currentImg<5) currentImg++;
        else currentImg =1;
    }else {
        if (currentImg>2) currentImg--;
        else currentImg = 5;
    }
}
const updateImg = () => {
    document.querySelector('#gallery-picture').src = `${currentImg}.jpg`
}

window.onload = (event) => {
    updateImg();
    document.querySelector('#gallery-previous').addEventListener('click',()=>{
        changeImg('previous');
        updateImg();
    });
    document.querySelector('#gallery-next').addEventListener('click',()=>{
        changeImg('next');
        updateImg();
    });
}