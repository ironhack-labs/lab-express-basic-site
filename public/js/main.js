window.onload = () => {
    document.getElementsByClassName('video')[0].style.height = document.getElementsByClassName('parnas')[0].offsetHeight + "px";
    document.getElementsByClassName('video')[0].style.width = document.getElementsByClassName('parnas')[0].offsetHeight + "px";
};

window.onresize = () => {
    document.getElementsByClassName('video')[0].style.height = document.getElementsByClassName('parnas')[0].offsetHeight + "px";
    document.getElementsByClassName('video')[0].style.width = document.getElementsByClassName('parnas')[0].offsetHeight + "px";
};