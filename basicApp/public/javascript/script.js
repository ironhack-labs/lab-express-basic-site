console.log("connected")

$(".foodieMiami").on("mouseover", function(){
  $(this).animate({
    opacity: 0.25,
    // left: "+=50",
    height: "toggle"
  }, 5000, function(){

  })
  // console.log("carajo")
})

var card1 = $(".card1")

card1.on("mouseover", function(){

	for(var i = 0; i <= card1.length; i++){

	$(this).animate({
		opacity: 0.25,
		height: "toggle"
		}, 5000, function(){
			})

	}

})
