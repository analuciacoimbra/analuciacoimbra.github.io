'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	const a = document.getElementById('link-conversion');

	a.setAttribute('href', a.getAttribute('href')
		.replace('-', 'ptcoimbra@')
		.replace('/', 'gmail.com')
		.replace('to-', 'mailto:a')
	);
});