var quotes = [
  "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
  "If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.",
  "Absorb what is useful, Discard what is not, Add what is uniquely your own.",
  "A goal is not always meant to be reached, it often serves simply as something to aim at.",
  "If you spend too much time thinking about a thing, you’ll never get it done. Make at least one definite move daily toward your goal.",
  "Mistakes are always forgivable, if one has the courage to admit them.",
  "Ever since I was a child I have had this instinctive urge for expansion and growth. To me, the function and duty of a quality human being is the sincere and honest development of one’s potential.",
  "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
  "The stillness in stillness is not the real stillness; only when there is stillness in movement does the universal rhythm manifest.",
  "Everything you do, if not in a relaxed state will be done at a lesser level than you are proficient. Thus the tensed expert marksman will aim at a level less than his/her student.",
  "Knowing is not enough, we must apply. Willing is not enough, we must do."
]

var h2 = document.getElementById("quote-saver");
var button = document.getElementById("quote-button");

button.addEventListener("click", function(){
  if (h2.innerHTML) { 
    h2.innerHTML = "";
  } else {
    var random = Math.floor(Math.random() * quotes.length);
    h2.innerHTML = quotes[random];
  }
});

