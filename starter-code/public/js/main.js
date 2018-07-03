$(function(){
  var menu = $(".nav li");
  $(".nav li:first").addClass("active");

  menu.click(function(){
    menu.removeClass("active");
    $(this).addClass("active");
  })
})