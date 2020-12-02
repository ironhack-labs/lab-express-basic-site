const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

app.locals.copyright = "Created by Yu Miao & Victorien Provenzano";

app.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "Homepage",
  });
});

app.get("/argentina", (req, res) => {
  res.render("argentina", {
    js: ["gallery"],
    pageTitle: "Argentina",
    name: "Argentina",
    capital: "Buenos Aires",
    language: "Spanish",
    population: 44938712,
    religion: [
      "Christianity: 79.6%",
      "No religion: 18.9%",
      "Other religions: 1.2%",
      "Undeclared: 0.3%",
    ],
    area: "2,780,400 km2",
    GDP: "$445.469 billion",
    currency: "Peso ($) (ARS)",
    timeZone: "UTC−3 (ART)",
    culture: `Argentina is a multicultural country with significant European influences. Modern Argentine culture has been largely influenced by Italian, Spanish and other European immigration from France, United Kingdom, and Germany among others. Its cities are largely characterized by both the prevalence of people of European descent, and of conscious imitation of American and European styles in fashion, architecture and design.Museums, cinemas, and galleries are abundant in all the large urban centres, as well as traditional establishments such as literary bars, or bars offering live music of a variety of genres although there are lesser elements of Amerindian and African influences, particularly in the fields of music and art. The other big influence is the gauchos and their traditional country lifestyle of self-reliance.Finally, indigenous American traditions have been absorbed into the general cultural milieu. Argentine writer Ernesto Sabato has reflected on the nature of the culture of Argentina as follows:
    With the primitive Hispanic American reality fractured in La Plata Basin due to immigration, its inhabitants have come to be somewhat dual with all the dangers but also with all the advantages of that condition: because of our European roots, we deeply link the nation with the enduring values of the Old World; because of our condition of Americans we link ourselves to the rest of the continent, through the folklore of the interior and the old Castilian that unifies us, feeling somehow the vocation of the Patria Grande San Martín and Bolívar once imagined.
    — Ernesto Sabato, La cultura en la encrucijada nacional`,
  });
});

app.get("/china", (req, res) => {
  res.render("china", {
    js: ["gallery"],
    pageTitle: "China",
    name: "China",
    capital: "Beijing",
    language: "Standard Chinese",
    population: 1400050000,
    religion: ["State atheism"],
    area: "9,596,961 km2",
    GDP: "$24.2 trillion",
    currency: "Renminbi",
    timeZone: "UTC+8 (China Standard Time)",
    culture: `Since ancient times, Chinese culture has been heavily influenced by Confucianism. For much of the country's dynastic era, opportunities for social advancement could be provided by high performance in the prestigious imperial examinations, which have their origins in the Han dynasty.[538] The literary emphasis of the exams affected the general perception of cultural refinement in China, such as the belief that calligraphy, poetry and painting were higher forms of art than dancing or drama. Chinese culture has long emphasized a sense of deep history and a largely inward-looking national perspective.[539] Examinations and a culture of merit remain greatly valued in China today.[540]`,
  });
});

app.get("/france", (req, res) => {
  res.render("france", {
    js: ["gallery"],
    pageTitle: "France",
    name: "France",
    capital: "Paris",
    language: "French",
    population: 67081000,
    religion: [
      "Christianity: 51%",
      "No religion: 40%",
      "Islam: 5%",
      "Other: 3%",
      "Undeclared: 1%",
    ],
    area: "640,679 km2",
    GDP: "US$2.551 trillion",
    currency: "Euro (€) (EUR)​",
    timeZone: "UTC+1 (Central European Time)",
    culture: `France has been a center of Western cultural development for centuries. Many French artists have been among the most renowned of their time, and France is still recognized in the world for its rich cultural tradition.
    The successive political regimes have always promoted artistic creation, and the creation of the Ministry of Culture in 1959 helped preserve the cultural heritage of the country and make it available to the public. The Ministry of Culture has been very active since its creation, granting subsidies to artists, promoting French culture in the world, supporting festivals and cultural events, protecting historical monuments. The French government also succeeded in maintaining a cultural exception to defend audiovisual products made in the country.
    France receives the highest number of tourists per year, largely thanks to the numerous cultural establishments and historical buildings implanted all over the territory. It counts 1,200 museums welcoming more than 50 million people annually.The most important cultural sites are run by the government, for instance through the public agency Centre des monuments nationaux, which is responsible for approximately 85 national historical monuments.
    The 43,180 buildings protected as historical monuments include mainly residences (many castles) and religious buildings (cathedrals, basilicas, churches), but also statues, memorials and gardens. The UNESCO inscribed 45 sites in France on the World Heritage List.`,
  });
});

app.listen(3000);