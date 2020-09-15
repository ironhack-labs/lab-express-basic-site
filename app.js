const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs");
const { get } = require("http");

// create path to public and views which are the website ''data''
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");
console.log('----------------');

// Function to add each place to visit 2seconds/2seconds
// function addPlaceToVisit(step) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {resolve(step)
//         }, 2000)
//     });
// }
// async function makePlaceToVisit(step) {
//     const stepOne = await addPlaceToVisit(step[0]);
//     stepOne;
//     const stepTwo = await addPlaceToVisit(step[1]);
//     stepTwo;
//     const stepThree = await addPlaceToVisit(step[2]);
//     stepThree;
//     const stepFour = await addPlaceToVisit(step[3]);
//     stepFour;
//     const stepFive = await addPlaceToVisit(step[4]);
//     stepFive;
// }
const listOfPlaces = [
    {name : "Boracay",
     image : "/img/boracay.jpg",
     position : "https://www.google.com/maps/place/Boracay,+Malay,+Philippines/data=!4m2!3m1!1s0x33a53c2f324b4ee7:0xa738e81e5e6dda36?sa=X&hl=en&ved=2ahUKEwjGoKaks-vrAhUI2BoKHTFoAmEQ8gEwKnoECCgQBA",
     food : "Plate of Oysters",
     country : "Philippines" 
    }
    ,
    {name : "Whitsunday Island",
    image : "/img/whitsunday.jpg",
    position : "https://www.google.com/maps/place/Whitsunday+Islands,+Queensland,+Australia/data=!4m2!3m1!1s0x6bd908192617babf:0x345293e5fe0645b1?sa=X&ved=2ahUKEwjRweOntOvrAhUEzYUKHTHbDOAQ8gEwOHoECCgQBA",
    food : "Steak of Kangaroo",
    country : "Australia" 
    },

    {name : "Pura Paluang",
    image : "/img/templeCar.jpg",
    position : "https://www.google.com/maps/place/Pura+Paluang+(Car+Temple)/@-8.7537092,115.4782323,15z/data=!4m2!3m1!1s0x0:0x6a8a943f8870e5ca?sa=X&hl=en&ved=2ahUKEwifqqmutevrAhUFJhoKHXr8DUoQ_BIwIHoECCAQCA",
    food : "Nasi Goreng",
    country : "Indonesia" 
    },

    {name : "Zhangjiajie Vallée",
    image : "/img/chinaAvatar.jpg",
    position : "https://www.google.com/maps/place/Zhangjiajie,+Hunan,+China/data=!4m2!3m1!1s0x369b062183b65599:0x61908b5d20c29056?sa=X&ved=2ahUKEwil1s3btevrAhUKfBoKHf5JBXUQ8gEwO3oECCYQBA",
    food : "Fried Pork with chili",
    country : "China" 
    },

    {name : "Lake Bled",
    image : "/img/bled.jpg",
    position : "https://www.google.com/maps/place/Lake+Bled/@46.3639108,14.0777513,14z/data=!3m1!4b1!4m5!3m4!1s0x477a9139b9d9e421:0x83cd8331dd0107ac!8m2!3d46.363598!4d14.0938053",
    food : "Cold Cut Proscuitto",
    country : "Slovenia" 
    }
];
console.log(listOfPlaces[2].name)

app.get("/", (request, response) => {
    const placeToVisit = [
        "Visit Tuscany",
        "Visit Philippines",
        "Visit Bali",
        "Visit Turkey",
        "Visit New Zealand"
    ];
    response.render("home", {
        placeToVisit
    });
});

app.get("/about", (request, response) => {
    const aboutWebsite = [
        "Created by Me",
        "Created with Express.js & Node.js",
        "It's my first Node document",
        "I have not visited these places unfortunatelly"
    ]
    response.render("about", {
        aboutWebsite
    })
});

app.get("/place", (request, response) => {
    response.render("place", { listOfPlaces })
});
app.listen(8080, () => {
    console.log('Yoo the server is ready poulet !')
});
