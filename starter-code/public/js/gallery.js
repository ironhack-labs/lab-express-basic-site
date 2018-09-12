$(document).ready(function(){
    // Set the interval to be 5 seconds
    let t = setInterval(function(){
        $("#gallery ul").animate({marginLeft:-320},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },2000);
});