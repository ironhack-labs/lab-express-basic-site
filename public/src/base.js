var title = '';
if (window.location.pathname === '/') {
  title += `Welcome to our ${ document.title.split("||")[0] }!!!`;
} else {
  title += `${ document.title.split("||")[1] }`;
}

document.getElementById('main-title').innerText = title;
