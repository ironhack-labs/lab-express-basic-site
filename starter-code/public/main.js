'use strict';
function showHide(){
    
    var btnOPen = document.getElementById('open');
    var btnClose = document.getElementById('close');
    var menu = document.getElementById('menu');
    
    btnOPen.classList.toggle('hide');
    btnClose.classList.toggle('show');
    menu.classList.toggle('listShow');   
}