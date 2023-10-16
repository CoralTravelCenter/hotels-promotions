document.addEventListener("DOMContentLoaded", () => {
	const locations = [...document.querySelectorAll('[data-location]')];
	const navigation = document.querySelector('.navigation-list');
	const flightList = document.querySelector('.flight-list');
	let displayedCharacters = 140;


	// Обрезаем строку по символам и добавляем кнопку показать больше
	function descriptionShowMore() {
		const description = document.querySelector('.description');
		const descriptionContent = description.textContent;

		const truncateString = (string, value) => string.length > value ? string.substring(0, value).trim() + "..." : string;
		description.textContent = `${truncateString(description.textContent, displayedCharacters)}`;
		description.insertAdjacentHTML('beforeend', '&nbsp;<button class="show-more">Показать больше</button>');
		flightList.style.display = 'none';

		const showMore = document.querySelector('.show-more');
		showMore.addEventListener('click', () => {
			description.textContent = descriptionContent;
			flightList.style.display = 'block';
		});
	}
	descriptionShowMore();

	// Навигация по регионам
	// function navScroller(e) {
	// 	if (e.target.hasAttribute('data-location')) {
	// 		const dataAttr = e.target.getAttribute('data-location');
	// 		const navHeight = document.querySelector('.hotel-promotions nav').clientHeight;
	// 		const browHeight = document.querySelector('[data-module="searchtabsmain"]').clientHeight;
	// 		$([document.documentElement, document.body]).animate({
	// 			scrollTop: _.floor($(`[data-name=${dataAttr}]`).offset().top) - (navHeight + browHeight + 150)
	// 		}, 300);
	// 		locations.forEach(element => element.classList.remove('js-active'));
	// 		e.target.classList.add('js-active');
	// 	}
	// }
	// navigation.addEventListener('click', navScroller);


	// Перемещаем навигацию на мобилке
	// const mobileWidthMediaQuery = window.matchMedia('(max-width: 1024px)');
	// function mobile(isMobileSize) {

	// 	$('[data-module="leftSiblingMenu"]').detach().prependTo('.hotel-promotions aside');
	// 	$('[data-module="leftSiblingMenu"]').detach().prependTo('.hotel-promotions .navigation .dropdown .dropdown__content');
	// }

	// mobile(mobileWidthMediaQuery.matches);
	// mobileWidthMediaQuery.addEventListener('change', (e) => {
	// 	mobile(e.matches);
	// });
});


