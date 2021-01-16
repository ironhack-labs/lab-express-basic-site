function checkPage(path){
    var check = false;
    if(document.location.pathname === path){
        check=true;
    }
    return check
}

setTimeout(()=>{
    setInterval(()=>{
        if (checkPage('/home')){
            var homeBtn = document.getElementById('home');
            homeBtn.style.border = `4px solid white`;
        } else if (checkPage('/about')){
            var aboutBtn = document.getElementById('about');
            aboutBtn.style.border = `4px solid white`;
        } else if (checkPage('/works')){
            var worksBtn = document.getElementById('works');
            worksBtn.style.border = `4px solid white`;
        } else{
            var photoBtn = document.getElementById('photo-gallery');
            photoBtn.style.border = `4px solid white`;
        
        }
    },100)
},100)

setTimeout(()=>{
    AOS.init({
        duration: 1500
    })
},700)
