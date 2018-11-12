$(document).ready(function(){

$("#submit").click(function() {
  var thisname = $("input:first").val()
  document.cookie = "thisname=" + thisname
})

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
} 

var name = getCookie("thisname")
$(".name").html("Hi "+name)

$(".home").click(function() {
  document.cookie = "thisname=" + "";
})

})