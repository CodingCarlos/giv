var button = document.getElementById('js-dropdown-activator');
var modal = document.getElementById('js-dropdown-modal');

button.addEventListener('click', switchDropdown);

var iosCard = document.getElementById('card-ios');
var card = document.getElementById('card');

var ua = window.navigator.userAgent;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
var webkit = !!ua.match(/WebKit/i);
var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

if (iOSSafari) {
	card.className += ' hidden';
	startIOSAnimation();
} else {
	iosCard.className += ' hidden';
}

var hidden = false;
function startIOSAnimation() {
	setInterval(function () {
		if (hidden) {
			removeClass(iosCard.children[1], 'transparent');
		} else {
			iosCard.children[1].className += ' transparent';
		}

		hidden = !hidden;
	}, 3000)
}

function switchDropdown() {
	if (modal.className.indexOf('hidden') > -1) {
		// Is hidden
		removeClass(modal, 'hidden');
		button.className += ' flipped';
	} else {
		// Is visible
		modal.className += ' hidden';
		removeClass(button, 'flipped');
	}
}

function removeClass(el, className) {
	if (el.classList){
		el.classList.remove(className);
	} else{
		el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	}
}