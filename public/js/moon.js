const days = document.getElementById("days");
const years = document.getElementById("years");
const months = document.getElementById("months");
const day = document.querySelectorAll(".day");
const moonTitle = document.querySelector(".moonPhase");
const moonShape = document.getElementById("moon");
const darkMoonShape = document.getElementById("dark-moon");
let dayArr = [...day];

let today = new Date();
let todayDate =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

let urlDate = todayDate;
let getYear = today.getFullYear();
let getMonth = today.getMonth() + 1;
let getDay = today.getDate();

function getJson() {
  const convertDateToUnix = Date.parse(urlDate) / 1000;

  const URL = "https://api.farmsense.net/v1/moonphases/?d=" + convertDateToUnix;

  console.log(URL);

  axios
    .get(URL)
    .then((httpResult) => {
      console.log(httpResult.data[0].Phase);

      let getMoonPhase = httpResult.data[0].Phase;
      makeMoon(getMoonPhase);

    })
    .catch((httpError) => {
      console.error(err); // log the cause of the error
    });
}

getJson();

function makeMoon(getMoonPhase) {
  moonTitle.innerHTML = `${getDay}/${getMonth}/${getYear} : ${getMoonPhase}`;
  if (getMoonPhase === "Dark Moon") {
    moonShape.style.boxShadow = "0px 0px 0px 0px #FFBB11";
    darkMoonShape.style.boxShadow = "black 0px 0px 0px 0px inset";
  } else if (getMoonPhase === "New Moon") {
    moonShape.style.boxShadow = "0px 0px 0px 0px #FFBB11";
    darkMoonShape.style.boxShadow = "black 0px 0px 0px 0px inset";
  } else if (getMoonPhase === "Waxing Crescent") {
    moonShape.style.boxShadow = "inset -50px 0px 0px 0px #FFBB11";
    darkMoonShape.style.boxShadow = "black 0px 0px 0px 0px inset";
  } else if (getMoonPhase === "Waxing Gibbous") {
    moonShape.style.boxShadow = "inset 300px 0px 0px 0px #FFBB11";
    darkMoonShape.style.boxShadow = "black 80px 0px 0px 0px inset";
  } else if (getMoonPhase === "1st Quarter") {
    moonShape.style.backgroundColor = "#FFBB11";
    moonShape.style.width = "150px";
    moonShape.style.boxShadow = "0px 0px 0px 0px";
    moonShape.style.borderRadius = "0 300px 300px 0";
    darkMoonShape.style.boxShadow = "black 0px 0px 0px 0px inset";
  } else if (getMoonPhase === "Full Moon") {
    moonShape.style.boxShadow = "inset 300px 0px 0px 0px #FFBB11";
    darkMoonShape.style.boxShadow = "black 0px 0px 0px 0px inset";
  } else if (getMoonPhase === "Waning Gibbous") {
    moonShape.style.boxShadow = "300px 0px 0px 0px #FFBB11 inset";
    darkMoonShape.style.boxShadow = "black -80px 0px 0px 0px inset";
    darkMoonShape.style.marginRight = "-1px";
  } else if (getMoonPhase === "3rd Quarter") {
    moonShape.style.backgroundColor = "#FFBB11";
    moonShape.style.width = "150px";
    moonShape.style.boxShadow = "0px 0px 0px 0px";
    moonShape.style.borderRadius = "300px 0 0 300px";
    darkMoonShape.style.boxShadow = "black 0px 0px 0px 0px inset";
  } else if (getMoonPhase === "Waning Crescent") {
    moonShape.style.boxShadow = "inset 50px 0px 0px 0px #FFBB11";
    darkMoonShape.style.boxShadow = "black  0px 0px 0px 0px inset";
  }
}

function checkValue() {
  if (years.value.length < 4 || years.value === NaN) {
    return false;
  } else {
    return true;
  }
}

function makeCalendar(year, month) {
  const date = new Date(year, month, 0);
  const nbDays = date.getDate();

  for (let i = 1; i <= nbDays; i++) {
    const day = document.createElement("div");
    day.className = "day";
    day.innerHTML = i;
    days.appendChild(day);

    day.addEventListener("click", () => {
      getDay = day.innerHTML;
      urlDate = getYear + "-" + getMonth + "-" + getDay + " 00:12:00 GMT";
      getJson();
    });
  }
}

makeCalendar(getYear, getMonth);

function cleanDays() {
  const day = document.querySelectorAll(".day");
  day.forEach((element) => {
    element.remove();
  });
}

months.onchange = (evt) => {
  getMonth = months.value;
  cleanDays();
  makeCalendar(getYear, getMonth);
  urlDate = getYear + "-" + getMonth + "-" + getDay + " 00:12:00 GMT";
  getJson();
};

years.onkeyup = (evt) => {
  if (evt.keyCode === 13) {
    if (checkValue()) {
      getYear = years.value;
      cleanDays();
      makeCalendar(getYear, getMonth);
      urlDate = getYear + "-" + getMonth + "-" + getDay + " 00:12:00 GMT";
      getJson();
    } else alert("no good input");
  }
};


