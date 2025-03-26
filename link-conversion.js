'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	const a = document.getElementById('email');

	a.setAttribute('href', a.getAttribute('href')
		.replace('-', 'ptcoimbra@')
		.replace('/', 'gmail.com')
		.replace('to-', 'mailto:a')
	);
});