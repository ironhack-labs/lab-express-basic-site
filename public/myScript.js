$('#laugh').click(()=> {
let laugh = new Audio();
laugh.src = "/spongebob laugh.mp3";
laugh.play();
});

$('#patrick-theme').click(()=>{
  $("body").css("background-color","pink");
});
$('#Mr-Krabs').click(()=>{
  $("body").css("background-color","red");
});
$('#plankton').click(()=>{
  $("body").css("background-color","darkgreen");
});
