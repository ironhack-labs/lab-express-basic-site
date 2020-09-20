 // ----------------- MAP BUTTON FUNCTION ------------
 const imggrow = document.getElementById("img1")

 function imgPopUp() {
    // window.removeEventListener('keydown', moveWalker)
     createimgPopUp();
 }

 function createimgPopUp() {
     const newDiv = document.createElement('div');
     const mainPortfolio = document.getElementById("portfolio");
     newDiv.classList.add("imgpop");
     newDiv.innerHTML +=
         `<img src="./img/cancel.svg" alt="black-cross" width='28px' class='black-cross'>
         <img src="/img/bol001.jpg" alt="map" id='big-img'>
         <div>
            <p>Collection : summer 2017
                <br>
                materials : glazed stoneware
                <br>
                scene : savannah
            </p>
        </div>
         `
     mainPortfolio.appendChild(newDiv);
     const crossImg = document.querySelector('.black-cross');
     crossImg.addEventListener('click', event => {
         
         mainPortfolio.removeChild(newDiv);
     
     }
     );
 }

 imggrow.addEventListener('click', event => {
     imgPopUp()
   //  document.getElementById("rules").disabled = true;
   //  document.getElementById("map").disabled = true;
 });