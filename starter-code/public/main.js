  alert("Hello\nHow are you?\nYou are going to learn a lot about LORIE.\nDid you know she was back to singing ???\nI'm an annoying POPUP\nMeans that I'll be there anytime you open a new page \nHave fun on the website!");

$("button").click(function(){
  $(".imghome").fadeToggle(3000);
});


$(".about").hover(function(){
var alerted = sessionStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
     alert("Click me once... Or twice ?");
     sessionStorage.setItem('alerted','yes');
    }
  });

$(".about").click(function(){
  $(".about").animate({
    left: '250px',
    width: '+=450px'
});
});
