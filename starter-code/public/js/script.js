
const exodiaArray = [];

if(document.URL.includes('gallery')) {
  const gallery = document.querySelector('#images-div');
  gallery.addEventListener('click', (e) => {
    e.target.setAttribute('hidden', 'true');
    exodiaArray.push(e.target.getAttribute('src'));
  
    if(exodiaArray.length === 5) {
      const a = document.createElement('a');
      a.href = '/about';
      a.innerText = 'Check about page!';
      document.querySelector('body').appendChild(a);
    }
    window.localStorage.setItem('exodiaArray', exodiaArray);
  });
} else if (document.URL.includes('about')) {
  const div = document.querySelector('#about-div');
  var arr = window.localStorage.getItem('exodiaArray').split(',');

  for(let card in arr) {
        if (arr[card].includes('left-arm'))
        document.querySelector('#arml').src = arr[card];     
        else if (arr[card].includes('head')) 
        document.querySelector('#head').setAttribute('src', arr[card]);
        else if (arr[card].includes('right-arm'))
        document.querySelector('#armr').src = arr[card];
        else if (arr[card].includes('left-leg'))
        document.querySelector('#legl').src = arr[card];
        else if (arr[card].includes('right-leg')) 
        document.querySelector('#legr').src = arr[card];
  }
}



