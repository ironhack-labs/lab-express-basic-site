window.onload = function(){
  const about = document.getElementsByClassName("about");
  const gallery = document.getElementsByClassName("gallery");

  about[0].onclick = function(){
    window.open('/about', '_self');
  }

  gallery[0].onclick = function(){
    window.open('/gallery', '_self');
  }
};