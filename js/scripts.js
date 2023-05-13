document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('form');
	const passwd = document.getElementById('passwd');
	const cpasswd = document.getElementById('cpasswd');

	form.addEventListener('submit', function() {
		event.preventDefault();	
		if (passwd.value !== cpasswd.value) {
			passwd.classList = [];
			cpasswd.classList = [];
			passwd.classList.add('error');	
			cpasswd.classList.add('error');	

		} else {
			passwd.classList = [];
			cpasswd.classList = [];
			passwd.classList.add('match');	
			cpasswd.classList.add('match');
		}
	});

});
