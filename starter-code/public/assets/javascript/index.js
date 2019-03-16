



$('#home').on('click', ()=>{
  document.location.href = "/views/home.html";
});

$('#about').on('click', ()=>{
  console.log("Sa vajutasid About")
  document.location.href = (__dirname + "/views/about.html");
});

$('#high').on('click', ()=>{
  document.location.href = "/views/high.html";
});

$('.img').on('click', ()=>{
  $(this).animate({width: "400px"}, 'slow');
})

