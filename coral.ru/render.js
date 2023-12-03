const navigation_template = document.querySelector('#navigation-template').content;
const country_template = document.querySelector('#country-template').content;
const modal_template = document.querySelector('#modal-template').content;
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
	const description = card_template.querySelector('.description');
	const actions = card_template.querySelector('[data-actions]');
	const data_booking = card_template.querySelector('[data-booking]');
	const data_accommodation = card_template.querySelector('[data-accommodation]');
	const data_departure_from = card_template.querySelector('[data-departure-from]');
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
		description.innerHTML = `<p>${el.description.text}</p>`;
		actions.innerHTML = `<a data-lookup-destination="${el.hotel_name}" data-lookup-depth-days="${el.depth_days}">ВЫБРАТЬ ТУР</a>`;
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

/*Рендерим модалку с описанием акции*/
function modalGenerator(target) {
	const id = parseInt(target.closest('[data-hotel-id]').dataset.hotelId);
	PROMOTION_SETTINGS.filter(country => {
		country.hotels.filter(hotel => {
			if (hotel.hotel_id === id) {
				const rating = modal_template.querySelector('.rating');
				const h5 = modal_template.querySelector('h5');
				const data_booking = modal_template.querySelector('[data-booking]');
				const data_accommodation = modal_template.querySelector('[data-accommodation]');
				const data_departure_from = modal_template.querySelector('[data-departure-from]');
				const data_description = modal_template.querySelector('[data-description]');
				const data_conditions = modal_template.querySelector('[data-conditions]');
				const star = `
					<li class="rating__item">
						<svg width="16" height="16" fill="none">&nbsp;
							<path fill="#F0AB00" d="m10.758 4.67 4.329.659a.949.949 0 0 1 .48.222.994.994 0 0 1 .294.449 1.028 1.028 0 0 1-.238 1.019l-3.139 3.175.741 4.554c.03.183.01.372-.059.544a.986.986 0 0 1-.33.428.948.948 0 0 1-1.015.072l-3.868-2.127-3.865 2.128a.947.947 0 0 1-1.018-.071.985.985 0 0 1-.328-.43 1.018 1.018 0 0 1-.057-.543l.74-4.554L.286 7.02A1.029 1.029 0 0 1 .048 6a.99.99 0 0 1 .296-.45.945.945 0 0 1 .48-.221l4.325-.659L7.088.56A.98.98 0 0 1 7.443.15a.939.939 0 0 1 1.022 0c.153.099.277.24.356.408l1.937 4.111Z"></path>
						</svg>
					</li>
				`;
				data_booking.textContent = hotel.booking;
				data_accommodation.textContent = hotel.accommodation;
				data_departure_from.textContent = hotel.departure_from;
				rating.innerHTML = star.repeat(hotel.rating);
				h5.textContent = hotel.hotel_name;

				if (hotel.description.list.length > 0) {
					data_description.innerHTML = `
						<p>${hotel.description.text}</p>
						<ul class='description-list'>
							${hotel.description.list.map(item => {
						return `<li>${item}</li>`;
					}).join('')}
						</ul>
					`;
				} else {
					data_description.innerHTML = `<p>${hotel.description.text}</p>`;
				}

				if (hotel.conditions.length > 0) {
					data_conditions.innerHTML = `
						<h6>Условия акции:</h6>
						<ul>
							${hotel.conditions.map(item => {
						return `<li>${item}</li>`;
					}).join('')}
						</ul>
					`;
				}

				const markup = modal_template.cloneNode(true);
				document.querySelector('#modal-container').append(markup);
			}
		});
	});
}