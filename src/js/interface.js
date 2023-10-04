document.addEventListener("DOMContentLoaded", () => {
	const notcritical = document.querySelector('.contentLayout-BaseContainer .notcritical');
	const slides = [...document.querySelectorAll('.navigation-list__item')];
	const nextBtn = document.querySelector('[data-snap-slider-next]');
	const prevBtn = document.querySelector('[data-snap-slider-prev]');
	const locations = [...document.querySelectorAll('[data-location]')];
	const navigation = document.querySelector('.navigation-list');

	nextBtn.addEventListener('click', () => {
		slides[slides.length - 1].scrollIntoView({
			behavior: 'smooth',
			inline: 'start',
			block: "center"
		})
	})

	prevBtn.addEventListener('click', () => {
		slides[0].scrollIntoView({
			behavior: 'smooth',
			inline: 'start',
			block: "center"
		})
	})


	navigation.addEventListener('click', (e) => {
		if (e.target.hasAttribute('data-location')) {
			locations.forEach(element => { element.classList.remove('js-active') });
			e.target.classList.add('js-active');
			const dataAttr = e.target.getAttribute('data-location');
			const targetEl = document.querySelector(`[data-name=${dataAttr}]`);
			document.querySelector('.promotions').scrollTo({
				top: targetEl.offsetTop - 100,
				left: 0,
				behavior: 'smooth'
			})
		}
	});

	window.addEventListener('scroll', () => {
		let sc = window.scrollY;
		if (sc >= 103) {
			notcritical.classList.add('sticky')
		} else {
			notcritical.classList.remove('sticky')
		}
	});
});