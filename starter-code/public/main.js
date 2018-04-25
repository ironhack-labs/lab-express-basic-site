$( document ).ready(function() {
    $(".photos").hide();
    $(".history").hide();
});

$("#about").click(function(){
    $(".specs").hide(1000);
    $(".photos").hide(1000);
    $(".history").show(1000);
    $("#portada").removeClass('is-large').addClass('is-medium');
});

$("#photo").click(function(){
    $(".specs").hide(1000);
    $(".history").hide(1000);
    $(".photos").show(1000);
    $("#portada").removeClass('is-large').addClass('is-medium');
});

$("#home").click(function(){
    $(".history").hide(1000);
    $(".photos").hide(1000);
    $(".specs").show(1000);
    $("#portada").removeClass('is-medium').addClass('is-large');
});