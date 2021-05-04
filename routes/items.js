const express = require('express');
const itemsRouter = express.Router();

itemsRouter.get("/items", (req, res) => {
  res.render("items.hbs", {
    pageTitle: "Items",
    items: [
      {
        name: "Electric Kettle",
        photo: "https://www.hema.com/dw/image/v2/BBRK_PRD/on/demandware.static/-/Sites-HEMA-master-catalog/default/dw5d3dafdb/product/80010105_01_001_01.jpg?sw=1058&sh=1200&sm=fit",
        alt: "Kettle",
        color: "Pink",
        specs: "https://www.hema.com/fr-be/manger-cuisiner/cuisiner/electromenager/bouilloire-sans-fil-1.7l-80010105.html"
      },
      {
        name: "700W Microwave",
        photo: "https://image.darty.com/gros_electromenager/micro_ondes-micro_ondes/micro_ondes_compact/proline_ke17w_c0208223178536_1273217089366.jpg",
        alt: "Microwave",
        color: "White",
        specs: "https://www.darty.com/nav/achat/gros_electromenager/micro_ondes-micro_ondes/micro_ondes_compact/avis_2__proline_ke17w.html"
      },
      {
        name: "Iron",
        photo: "https://media.auchan.fr/MEDIASTEP56367470_468x468/AFR/d42f1d3e-95bf-4d48-a3be-7e4cc3e03d0e",
        alt: "Iron",
        color: "White & green",
        specs: "https://www.auchan.fr/selecline-fer-a-repasser-sw-1988/p-c607778"
      },
      {
        name: "3 kg Dumbbells",
        photo: "https://contents.mediadecathlon.com/p1833678/k$168d080066100efbb7cc019eead03d17/sq/paire-dhalteres-fitness-3-kg-gris.jpg?format=auto&f=864x864",
        alt: "Dumbells",
        color: "Black",
        specs: "https://www.decathlon.fr/p/paire-d-halteres-fitness-3-kg-gris/_/R-p-130442?mc=8336581&c=GRIS"
      },
      {
        name: "Yoga Mat",
        photo: "https://contents.mediadecathlon.com/p1782821/k$b668dcf0390ea592e9596883abbbdc79/sq/tapis-yoga-light-5mm-corail.jpg?format=auto&f=864x864",
        alt: "YogaMat",
        color: "Pink",
        specs: "https://www.decathlon.fr/p/tapis-yoga-light-5-mm/_/R-p-15228?mc=8576009&c=ORANGE"
      }
    ]
  });
});

module.exports = itemsRouter;