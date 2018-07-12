window.onload = () => {
    for(var i=0; i<document.getElementsByClassName('gallery-img-container').length; i++)
    {
        document.getElementsByClassName('gallery-img-container')[i].style.height = document.getElementsByClassName('gallery-img-container')[i].offsetWidth + 'px';
        document.getElementsByClassName('gallery-img-container')[i].addEventListener("click", (e)=>{
            document.getElementById('background-lightbox').style.display = "block";
            document.getElementsByClassName('left')[0].style.display='block';
            document.getElementsByClassName('right')[0].style.display='block';  
            var url = "images/gallery" + e.currentTarget.id.substring(e.currentTarget.id.length-1) + ".jpg";
            document.querySelector('#background-lightbox img').setAttribute('src', url);
        });
    }
    document.getElementsByClassName('button-close')[0].addEventListener('click', ()=>{
        lightboxClose();
    });
    document.getElementById('background-lightbox').addEventListener('click', ()=>{
        lightboxClose();
    });
    document.getElementsByClassName('right')[0].addEventListener('click', (e) => {
        lightboxRight();
    });
    document.getElementsByClassName('left')[0].addEventListener('click', (e) => {
        lightboxLeft();
    });
    document.addEventListener('keydown', (event) => {
        console.log(event.key);
        if(event.key === 'ArrowLeft')
        {
            lightboxLeft();
        }
        else if(event.key === 'ArrowRight')
        {
            lightboxRight();
        }
        else if(event.key === 'Escape')
        {
            lightboxClose();
        }
      });
};

function lightboxRight(){
    var src = document.querySelector('#background-lightbox img').getAttribute('src');
    var id = parseInt(src.substring(14, src.length-4));
    if (id===document.getElementsByClassName('gallery-img-container').length) id = 0;
    id++;
    var url = "images/gallery" + id+ ".jpg";
    document.querySelector('#background-lightbox img').setAttribute('src', url);
}

function lightboxLeft(){
    var src = document.querySelector('#background-lightbox img').getAttribute('src');
    var id = parseInt(src.substring(14, src.length-4));
    console.log(id);
    if (id===1) id =+ document.getElementsByClassName('gallery-img-container').length;
    id--;
    var url = "images/gallery" + id+ ".jpg";
    document.querySelector('#background-lightbox img').setAttribute('src', url);
}

function lightboxClose(){
    document.getElementById('background-lightbox').style.display = "none";
    document.getElementsByClassName('left')[0].style.display='none';
    document.getElementsByClassName('right')[0].style.display='none';
}