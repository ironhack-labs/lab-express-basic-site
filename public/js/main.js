
// https://stackoverflow.com/questions/51575656/how-to-properly-cors-fetch-from-the-wikipedia-api
// https://stackoverflow.com/questions/37333573/fetch-with-the-wikipedia-api-results-in-typeerror-networkerror-when-attempti

function fetchTextWiki() {
  // const urlWikiAPI = 'https://en.wikipedia.org/w/api.php?action=query&titles=Dwight_Schrute&prop=extracts&exintro&explaintext&format=json&formatversion=2'
  // &origin=*
     const urlWikiAPI = 'https://en.wikipedia.org/w/api.php?action=query&titles=Dwight_Schrute&prop=extracts&exintro&explaintext&format=json&formatversion=2&origin=*'

  return fetch(urlWikiAPI, {
      // mode: 'no-cors',
      method: "GET"
  })
  .then(response => {
      return response.json()
  })
  .then(data => {
      // const introPageId = Object.keys(data.query.pages)[0];
      // const introText = data.query.pages[pageId].extract;
      const introText = Object.values(data.query.pages)[0].extract; // directly...
      return introText
  })
  .catch(error => {
      console.error('Error:', error);
  });
}

fetchTextWiki().then(response => {
  // document.getElementById("placeholder").innerText = response;
  const paragraphs = response.replace("() ", "").split(/\r?\n|\r|\n/g);
  const divPlaceholder = document.getElementById("placeholder");
  paragraphs.forEach(paragraph => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    divPlaceholder.appendChild(p);
  });
})