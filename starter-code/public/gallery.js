//image slider

let slider_content = document.getElementById('box');

let image = ['a','b','c','d','e'];

let i = image.length;

function nextImage (){
    if (i < image.length){
      i+=1;
    } else {
      i=1;
    }

slider_content.innerHTML = "<img src=" + image[i-1]+".jpg";
}