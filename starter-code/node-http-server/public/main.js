$(document).ready(function(event) {

    $("#id3").css("opacity", "1");

  $(".nav a").mouseover(function() {
    $(this).css("color", "red");
  })

  $(".nav a").mouseout(function() {
    $(this).css("color", "black");
  })

  $("button").mouseover(function() {
    if($(this).css('opacity') == '1'){
        $(this).css("opacity", "0");
        selectedButton = "#"+this.id;
        do {
         rand = Math.floor(Math.random() * 5)+1;
         randomButton = "#id" + rand.toString()
          } while (randomButton == selectedButton);
        $(randomButton).css("opacity", "1");
    }
    
  })

})