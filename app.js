



const navToggle = document.querySelector('.navToggle');
const navlinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});


navlinks.forEach(link => {
		link.addEventListener('click', () => {
			document.body.classList.remove('nav-open')
		})
})

