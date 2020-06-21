const authors = [{
        name: "Franz Kafka",
        image: "https://m.media-amazon.com/images/M/MV5BZjQ3MzZkOTItZWM3Mi00ZTVkLWI4ODUtYTVkYjQ0YWEzNTk5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_UY209_CR34,0,140,209_AL_.jpg",
        description: 'Franz Kafka was born into a German-speaking Jewish family in Prague, Austrian Empire, in 1883. His father, Hermann Kafka, was a business owner and a domestic tyrant, frequently abusing his son. Kafka later admitted to his father, "My writing was all about you...". He believed that his father broke ...',
        books: ["The Trial", "The Castle", "Amerika", "Children on a Country Road", "The Trees", "Clothes", "Excursion into the Mountains", "Rejection", "The Street Window", "The Tradesman"]
    }, {
        name: "William Shakespeare",
        image: "https://m.media-amazon.com/images/M/MV5BMTg5ODgyNDgyNF5BMl5BanBnXkFtZTcwMjEwNTgxOA@@._V1_UY209_CR4,0,140,209_AL_.jpg",
        description: "William Shakespeare's birthdate is assumed from his baptism on April 25. His father John was the son of a farmer who became a successful tradesman; his mother Mary Arden was gentry. He studied Latin works at Stratford Grammar School, leaving at about age 15. About this time his father suffered an ...",
        books: ["Under the Greenwood Tree", "Hamlet", "Henry IV", "King Lear", "Macbeth", "A Midsummer Night's Dream", "Othello", "Romeo and Juliet", "The Winter's Tale", "The Merchant of Venice"]
    }, {
        name: "William Faulkner",
        image: "https://m.media-amazon.com/images/M/MV5BMjI5YmE5Y2ItOTVkNy00YmY1LWJiODgtMGQ5MDEzZGY3NjU0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_UY209_CR34,0,140,209_AL_.jpg",
        description: 'William Faulkner, one of the 20th century\'s most gifted novelists, wrote for the movies in part because he could not make enough money from his novels and short stories to support his growing number of dependants. The author of such acclaimed novels as "The Sound and the Fury" and "Absalom, Absalom...',
        books: ["Soldiers' Pay", "Mosquitoes", "Sartoris", "The Sound and the Fury", "As I Lay Dying", "Sanctuary", "Light in August", "Pylon", "Absalom, Absalom!", "The Unvanquished"]
    }, {
        name: "Fyodor Dostoevsky",
        image: "https://m.media-amazon.com/images/M/MV5BNjI0M2QzNjAtM2EwNy00YTk5LThjMjktMTc4ODhmYTk2NjhlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_UY209_CR89,0,140,209_AL_.jpg",
        description: "Fyodor Mikhailovich Dostoevsky was born on November 11, 1821, in Moscow, Russia. He was the second of seven children of Mikhail Andreevich and Maria Dostoevsky. His father, a doctor, was a member of the Russian nobility, owned serfs and had a considerable estate near Moscow where he lived with his ...",
        books: ["Poor Folk", "The Double", "The Landlady", "Uncle's Dream", "The Village of Stepanchikovo", "Humiliated and Insulted", "The House of the Dead", "Notes from Underground", "Crime and Punishment", "The Gambler"]
    },{
        name: "Anton Chekhov",
        image: "https://m.media-amazon.com/images/M/MV5BNDZiM2JlZGQtYzE2YS00OGM3LTg1MzQtZTdjODIzZjZiNmMyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_UY209_CR34,0,140,209_AL_.jpg",
        description: "Anton Pavlovich Chekhov was born in 1860, the third of six children to a family of a grocer, in Taganrog, Russia, a southern seaport and resort on the Azov Sea. His father, a 3rd-rank Member of the Merchant's Guild, was a religious fanatic and a tyrant who used his children as slaves. Young Chekhov...",
        books: ["A Letter to a Learned Neighbor", "On the Train", "The Trial", "This and That: Four Vignettes", "Sarah Bernhardt Comes to Town", "Questions Posed by a Mad Mathematician", "Green Scythe", "Village Doctors", "An Unsuccessful Visit", "The Cross"]
    },{
        name: "Marcel Proust",
        image: "https://m.media-amazon.com/images/M/MV5BYjU1NDJjZDAtY2VjNS00NGQ5LWJiODUtYjg2YzY5MjZlODFmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_UY209_CR34,0,140,209_AL_.jpg",
        description: 'Marcel Proust was a French intellectual, author and critic, best known for his seven-volume fiction "In search of Lost Time". He coined the term "involuntary memory", which became also known as "Proust effect" in modern psychology. He was born Valentin Louis Georges Eugéne Marcel Proust, on July 10, ...',
        books: ["Swann's Way", "In the Shadow of Young Girls in Flower", "The Guermantes Way", "Sodom and Gomorrah", "The Prisoner", "The Fugitive", "Time Regained", "Albertine", "Early Stories", "Pleasures and Days"]
    },{
        name: "Herman Melville",
        image: "https://m.media-amazon.com/images/M/MV5BZGViNTkwMzctYWQ2MC00MjJiLTg0MDMtNjY5ZjY1ZDJjMzgwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_UY209_CR69,0,140,209_AL_.jpg",
        description: "Herman Melville was born on August 1, 1819 in New York City, New York, USA. He was a writer, known for The Enigma of Benito Cereno, Moby Dick and The Sea Beast (1926). He was married to Elizabeth Shaw. He died on September 28, 1891 in New York City.",
        books: ["A Peep at Polynesian Life", "A Narrative of Adventures in the South Seas", "Mardi: And a Voyage Thither", "Redburn: His First Voyage", "The World in a Man-of-War", "Moby-Dick", "The Ambiguities", "Isle of the Cross", "His Fifty Years of Exile", "The Confidence-Man: His Masquerade"]
    },{
        name: "Leo Tolstoy",
        image: "https://m.media-amazon.com/images/M/MV5BNzFmNDE0NGMtMDYzZS00ZjgxLWE0ZjEtYTNmYzZjYzE2MmM0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_UY209_CR55,0,140,209_AL_.jpg",
        description: "Count Lev Nikolaevich Tolstoy was born on September 9, 1828, in his ancestral estate Yasnaya Polyana, South of Moscow, Russia. He was the fourth of five children in a wealthy family of Russian landed Gentry. His parents died when he was a child, and he was brought up by his elder brothers and ...",
        books: ["War and Peace", "Anna Karenina ", "Resurrection", "Family Happiness", "The Cossacks", "The Death of Ivan Ilyich", "The Kreutzer Sonata", "The Devil", "The Forged Coupon", "Hadji Murat"]
    },{
        name: "J.D. Salinger",
        image: "https://m.media-amazon.com/images/M/MV5BMjA5Njg3ODM2NV5BMl5BanBnXkFtZTcwMTE5MTg5OQ@@._V1_UY209_CR35,0,140,209_AL_.jpg",
        description: "Count Lev Nikolaevich Tolstoy was born on September 9, 1828, in his ancestral estate Yasnaya Polyana, South of Moscow, Russia. He was the fourth of five children in a wealthy family of Russian landed Gentry. His parents died when he was a child, and he was brought up by his elder brothers and ...",
        books: ["The Catcher in the Rye", "Nine Stories", "A Perfect Day for Bananafish", "Uncle Wiggily in Connecticut", "Just Before the War with the Eskimos", "The Laughing Man", "Down at the Dinghy", "Pretty Mouth and Green My Eyes", "Teddy", "Franny"]
    },{
        name: "Samuel Beckett",
        image: "https://m.media-amazon.com/images/M/MV5BMjA4MTljMjQtZTk1NC00MDU1LWE1ODItYjQ1MDM0ODI5MDk2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_UY209_CR6,0,140,209_AL_.jpg",
        description: 'U.S. writer whose novel "The Catcher in the Rye" (1951) won critical acclaim and devoted admirers, especially among the post-World War II generation of college students. His entire corpus of published works consists of that one novel and 13 short stories, all originally written in the period 1948-...',
        books: ["Dream of Fair to Middling Women", "Murphy", "Watt", "Mercier and Camier", "More Pricks Than Kicks", "Le Calmant", "La Fin", "Texts for Nothing", "Premier Amour", "Company"]
    }
]
