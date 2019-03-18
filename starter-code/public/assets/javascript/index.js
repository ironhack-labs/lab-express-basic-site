
$(document).ready(function(){


  $('#home').on('click', ()=>{
    document.location.href =( "/");
  });
  
  $('#about').on('click', ()=>{
    console.log("Sa vajutasid About")
    document.location.href = ("/about");
  });
  
  $('#high').on('click', ()=>{
    document.location.href = ("/high");
  });
  
  $('#high').on('click', () =>{
      $("#img1").fadeToggle();
      $("#img2").fadeToggle("slow");
      $("#img3").fadeToggle(3000);
    });
    
  


});

