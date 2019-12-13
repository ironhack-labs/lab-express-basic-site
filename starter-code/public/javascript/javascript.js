let button = document.getElementById('simple-button');

function alertMe() {
	alert('Hello stranger');
}

button.onclick = () => {
	alertMe();
};
