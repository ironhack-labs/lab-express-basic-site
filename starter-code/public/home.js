// stack.MAX_SIZE = 10;
// stack.stackControl = [];
var inElement = document.querySelector('#inputElement');
var containerDonuts = document.getElementById('containerDon');
var newElement = document.createElement('div');
newElement.setAttribute('class', 'element');
var elementAdd = document.querySelector('#buttonAdd');
var img = new Image();
elementAdd.onclick = function() {
	containerDon.innerHTML = newElement.outerHTML.repeat(inElement.value);
	var allElements = document.getElementsByClassName('element');
	img.onload = function() {
		for (var i = 0; allElements.length - 1; i++) {
			allElements[i].innerHTML += '<img src="' + img.src + '" />';
		}
	};
	img.src = './images/donut.png';
};
