var quotes =[
"Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
"If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
"I think when you spread the wealth around it's good for everybody.",
"You know, my faith is one that admits some doubt.",
"Money is not the only answer, but it makes a difference.",
"I don't oppose all wars. What I am opposed to is a dumb war. What I am opposed to is a rash war.",
"There's not a liberal America and a conservative America - there's the United States of America.",
"The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
"Why can't I just eat my waffle?",
];

function randomQuote(array){
  $("#quote").addClass("initial");
  let randomNumber = Math.floor(Math.random()*array.length);
  document.getElementById("quote").innerHTML = array[randomNumber];
  setTimeout(function(){
    $("#quote").removeClass("initial");
  },3500)
} 


setInterval(function(){
  randomQuote(quotes);
},4000);