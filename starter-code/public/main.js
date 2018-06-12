
document.addEventListener("DOMContentLoaded", function(){
    
    const button = document.getElementById('facterator');
    button.addEventListener('click', function(e) {
        const box = document.getElementById('insert-fact')
        box.innerHTML ="";
        randomIndex = Math.floor(Math.random() * 8);
        box.innerHTML += facts[randomIndex];
    });
    
    var facts = [
        
        "Carson Wentz was born December 30, 1992 in Raleigh, North Carolina",
        
        "Wentz moved to North Dakota with his family at the age of three.",
        
        "He played quarterback and defensive back at Century High School in Bismarck, and also played basketball and baseball for the Patriots.",
        
        "As a freshman, he was 5 ft 8 in (1.73 m) in height, grew to 6 ft 5 in (1.96 m) as a senior, and graduated in 2011 as valedictorian of his class.",
        
        "Wentz attended North Dakota State, redshirting his first season with the Bison as they won their first FCS title under ninth-year head coach Craig Bohl",
        
        "As a redshirt freshman in 2012, Wentz was the backup quarterback to Brock Jensen, and played in his first collegiate game on September 22.",
        
        "He completed all eight of his passes for 93 yards and threw his first touchdown in relief of Jensen in a 66–7 blowout victory over Prairie View A&M.",
        
        "Wentz finished the season completing 12 of 16 pass attempts for 144 passing yards and two touchdowns."
    ]
    
});
