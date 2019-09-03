window.onload = function () {
var gallery=document.getElementById("gallery");
gallery.addEventListener("click",function(){
  document.location.pathname="/gallery";
})
  
var about=document.getElementById("about");
about.addEventListener("click",function(){
  document.location.pathname="/about";
})
}