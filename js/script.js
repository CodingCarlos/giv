var button = document.getElementById('js-dropdown-activator');
var modal = document.getElementById('js-dropdown-modal');

button.addEventListener('click', switchDropdown);

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

// Shine
var shine = new Shine(document.getElementById('card'), undefined, undefined, 'boxShadow');

window.addEventListener('mousemove', function(event) {
	console.log(shine);
  shine.light.position.x = event.clientX;
  shine.light.position.y = event.clientY;
  shine.draw();
}, false);
