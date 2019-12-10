let id = 1;

Number.prototype.padDigits = function(digits) {
    return Array(Math.max(digits - String(this).length + 1, 0)).join(0) + this;
}

function next(){
    let img = document.querySelector('#tree-pic img');
    let src = img.src.split("/"); 
    id--;
    
    if( id === 0) id = 4;
    src[src.length-1] =`img_${id.padDigits(3)}.jpg`;
    img.src = src.join('/');  
}
function next(){
    let img = document.querySelector('#tree-pic img');
    let src = img.src.split("/"); 
    id++;
    
    if( id === 5) id = 1;  
    src[src.length-1] =`img_${id.padDigits(3)}.jpg`;
    img.src = src.join('/');  
}