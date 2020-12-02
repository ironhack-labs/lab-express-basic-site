const btn = document.getElementById("next-btn");

const body = document.querySelector("body");

const funFact = document.getElementById("fun-click");

btn.onclick = function handler () {
    location.href = "/content";
};

var iceQuotes = [
    "1 in 10 people admit to licking the bowl clean after eating ice-cream",
    "50% of the volume found in ice cream is air",
    "The first ice-cream vendor was Harry Burt", 
    "July is National Ice Cream month",
    "The Romans sent slaves to collect snow to create their version of ice cream",
    "It was once illegal to sell ice-cream sodas on Sundays due to religious purposes",
    "The ice-crean cone was invented during the 1904 St. Louis World's fair",
    "You can find ice cream commonly flavored with octopus, cow tongue, and shrimp in Tokyo, Japan"
]

// HANDLER
// function shuffleQuote () {
//     if (document.location.reload()) {
        
//     }
// }

funFact.addEventListener("click", () => {
    var randomNumber = Math.floor(Math.random() * (iceQuotes.length));
    document.getElementById("fun-quote").innerHTML = ` "${iceQuotes[randomNumber]}" `;
});

