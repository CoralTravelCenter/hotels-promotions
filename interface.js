const snapSlider = document.querySelector('[data-snap-slider]');
const snapSlides = [...document.querySelectorAll('.navigation-list__item')];
const nextBtn = document.querySelector('[data-snap-slider-next]');
const prevBtn = document.querySelector('[data-snap-slider-prev]');
const locations = [...document.querySelectorAll('[data-location]')];
const navigation = document.querySelector('.navigation-list');
const navHeight = document.querySelector('.hotel-promotions nav').clientHeight;

/*Добавляем кнопки в навигацию когда появляется горизонтальный скролл*/
function addNavigationButtons() {
	if (snapSlider.clientWidth < snapSlider.scrollWidth) {
		nextBtn.style.display = 'block';
		prevBtn.style.display = 'block';
	} else {
		nextBtn.style.display = 'none';
		prevBtn.style.display = 'none';
	}
}
addNavigationButtons();
window.addEventListener('resize', _.throttle(addNavigationButtons, 1000));

nextBtn.addEventListener('click', () => {
	snapSlides[snapSlides.length - 1].scrollIntoView({
		behavior: 'smooth',
		inline: 'start',
		block: "nearest"
	});
});
prevBtn.addEventListener('click', () => {
	snapSlides[0].scrollIntoView({
		behavior: 'smooth',
		inline: 'start',
		block: "nearest"
	});
});

/*Навигация*/
function navScroller(e) {
	if (e.target.hasAttribute('data-location')) {
		const dataAttr = e.target.getAttribute('data-location');
		document.querySelector(`[data-name=${dataAttr}]`).scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"});
	}
}
navigation.addEventListener('click', navScroller);


		// locations.forEach(element => element.classList.remove('js-active'));
		// e.target.classList.add('js-active');