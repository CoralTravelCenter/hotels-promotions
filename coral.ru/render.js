const navigation_template = document.querySelector('#navigation-template').content;
const country_template = document.querySelector('#country-template').content;
const card_template = document.querySelector('#card-template').content;

function navigationRender(country) {
	const country_name = country.name;
	const button = navigation_template.querySelector('button');
	const data_navigation = document.querySelector('[data-nav]');
	button.setAttribute('data-location', country_name);
	button.textContent = country_name;
	if (country.country_id !== undefined) {
		button.classList.add('js-active');
	} else {
		button.classList.remove('js-active');
	}
	const markup = navigation_template.cloneNode(true);
	data_navigation.append(markup);
}

function cardRender(country_name, hotel) {
	const item = card_template.querySelector('.promotions-list__item');
	const h5 = card_template.querySelector('h5');
	const location = card_template.querySelector('[data-location]');
	const img = card_template.querySelector('.picture img');
	const rating = card_template.querySelector('.rating');
	const actions = card_template.querySelector('[data-actions]');
	const data_booking = card_template.querySelector('[data-booking]');
	const data_accommodation = card_template.querySelector('[data-accommodation]');
	const data_departure_from = card_template.querySelector('[data-departure-from]');
	const data_conditions = card_template.querySelector('[data-conditions]');
	const data_description = card_template.querySelector('[data-description]');
	console.log(data_description);
	const star = `
		<li class="rating__item">
			<svg width="16" height="16" fill="none">&nbsp;
				<path fill="#F0AB00" d="m10.758 4.67 4.329.659a.949.949 0 0 1 .48.222.994.994 0 0 1 .294.449 1.028 1.028 0 0 1-.238 1.019l-3.139 3.175.741 4.554c.03.183.01.372-.059.544a.986.986 0 0 1-.33.428.948.948 0 0 1-1.015.072l-3.868-2.127-3.865 2.128a.947.947 0 0 1-1.018-.071.985.985 0 0 1-.328-.43 1.018 1.018 0 0 1-.057-.543l.74-4.554L.286 7.02A1.029 1.029 0 0 1 .048 6a.99.99 0 0 1 .296-.45.945.945 0 0 1 .48-.221l4.325-.659L7.088.56A.98.98 0 0 1 7.443.15a.939.939 0 0 1 1.022 0c.153.099.277.24.356.408l1.937 4.111Z"></path>
			</svg>
		</li>`;
	hotel.forEach(el => {
		item.dataset.hotelId = el.hotel_id;
		item.setAttribute('promotion-end', el.promotion_end);
		rating.innerHTML = star.repeat(el.rating);
		img.src = el.visual;
		h5.textContent = el.hotel_name;
		location.textContent = el.location;
		data_booking.textContent = el.booking;
		data_accommodation.textContent = el.accommodation;
		data_departure_from.textContent = el.departure_from;

		if (el.description.list.length > 0) {
			data_description.innerHTML = `
				${el.description.text}
				<ul class='description-list'>
					${el.description.list.map(item => {
				return `<li>${item}</li>`;
			}).join('')}
				</ul>
			`;
		} else {
			data_description.innerHTML = el.description.text;
		}

		if (el.conditions.length > 0) {
			data_conditions.innerHTML = `
				<h6>Условия акции:</h6>
				<ul>
					${el.conditions.map(item => {
				return `<li>${item}</li>`;
			}).join('')}
				</ul>
			`;
		}

		actions.innerHTML = `<a data-lookup-destination="${el.hotel_name}" data-lookup-depth-days="${el.depth_days}">ВЫБРАТЬ ТУР</a> <button data-toggle="modal" data-target='promotion-modal'>подробнее</button>`;
		const markup = card_template.cloneNode(true);
		document.querySelector(`[data-name="${country_name}"]`).append(markup);
	});
}

function promotionsRender(country_name) {
	const ul = country_template.querySelector('ul');
	const h4 = country_template.querySelector('h4');
	ul.setAttribute('data-name', country_name);
	h4.textContent = country_name;
	const markup = country_template.cloneNode(true);
	document.querySelector('.hotel-promotions .promotions').append(markup);
}

PROMOTION_SETTINGS.filter(country => {
	navigationRender(country);
	promotionsRender(country.name);
	cardRender(country.name, country.hotels);
});

function disableScroll() {
	scrollPosition = window.pageYOffset;
	document.body.style.overflow = 'hidden';
	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollPosition}px`;
	document.body.style.width = '100%';
}
function enableScroll() {
	document.body.style.removeProperty('overflow');
	document.body.style.removeProperty('position');
	document.body.style.removeProperty('top');
	document.body.style.removeProperty('width');
	window.scrollTo(0, scrollPosition);
}

const promotions = document.querySelector('.hotel-promotions .promotions');
promotions.addEventListener('click', (e) => {
	let target = e.target;
	if (target.getAttribute('data-target') === 'promotion-modal') {
		modalGenerator(target);
		if (document.querySelector('#promotion-modal')) {
			$('#promotion-modal').modal({ keyboard: true });
			$('#promotion-modal').on('shown.bs.modal', () => {
				if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
					disableScroll();
				}
			});
			$('#promotion-modal').on('hidden.bs.modal', () => {
				$('#promotion-modal').remove();
				if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
					enableScroll();
				}
			});
		}
	}
});
document.querySelector('.hotel-promotions .promotions').firstChild.remove();


