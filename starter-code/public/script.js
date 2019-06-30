

function findLocations() {
  let location = [...document.getElementById("locationSelect").options][document.getElementById("location-select").selectedIndex].value;
  switch(location) {
    case "mitte": 
      console.log("mitte");
      break;
    case "prenzlauer-berg":
    case "kreuzberg":
    case "moabit":
    case "neukölln":
    case "wedding":
      console.log("one of the others");
      break;
    default:
      console.log("other");
      break; 
  }

}

//document.getElementById("find-locations").onclick = findLocations
