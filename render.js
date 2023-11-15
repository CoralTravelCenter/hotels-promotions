const PROMOTION_SETTINGS = [
	{
		country_id: 1,
		name: "ОАЭ",
		hotels: [
			{
				hotel_id: 1,
				visual: "https://content.coral.ru//resize/800x600/media/image/31/46458/637708480219178761.jpg",
				rating: 4,
				hotel_name: "THE FIRST COLLECTION JUMEIRAH VILLAGE CIRCLE",
				location: "Дубай (Dubai), Аль Барша (Al Barsha)",
				description: {
					text: "Возможность ранней регистрации заезда в 8.00 (необходимо уведомить отель за 48 часов до прибытия гостя, а так же сообщить информацию о рейсе и времени прибытия).",
					list: []
				},
				conditions: [
					"Акция не распространяется на даты: (29.11.2023 – 12.12.2023, 28.12.2023 – 02.01.2024)",
					"Акция распространяется на бронирование полных пакетных туров",
					"Не распространяется на групповые заявки от 15 человек",
					"Стоимость туров в поиске тура обозначена с учетом акции"
				],
				booking: "31.05.2024",
				accommodation: "31.05.2024",
				departure_from: "Все",
				url: "https://www.coral.ru/hotels/united-arab-emirates/the-first-collection-jumeirah-village-circle-dubai/",
				promotion_end: ''
			}
		]
	},
	{
		name: "Египет",
		hotels: [
			{
				hotel_id: 2,
				visual: "https://content.coral.ru//resize/800x600/media/image/12/9270/636751320657246517.jpg",
				rating: 5,
				hotel_name: "BARON PALACE RESORT SAHL HASHEESH",
				location: "Хургада (Hurghada), Сал Хашиш (Salh Hasheesh)",
				description: {
					text: "Отдыхай с детьми - плати только за взрослых, двое детей до 14,99 лет – бесплатно!",
					list: []
				},
				conditions: [
					"Акция распространяется на бронирование полных пакетных туров.",
					"Акция не распространяется на кроме мастера нестандартного тура и групповые туры от 15 человек.",
					"Стоимость туров в поиске тура отображается с учетом акции."
				],
				booking: "20.12.2023",
				accommodation: "20.12.2023",
				departure_from: "Все",
				url: "https://www.coral.ru/hotels/egypt/baron-palace-resort-sahl-hasheesh-hurghada/",
				promotion_end: ''
			},
			{
				hotel_id: 3,
				visual: "https://content.coral.ru//resize/800x600/media/image/12/8871/637795739711641789.jpg",
				rating: 5,
				hotel_name: "MOVENPICK WATERPARK RESORT & SPA SOMA BAY",
				location: "Хургада (Hurghada), Сома-Бэй (Soma Bay)",
				description: {
					text: "Пакет СЕМЕЙНЫЙ 2+2=2 (акция для Deluxe rooms - 2 детей до 11, 99 лет бесплатно (в одной комнате с родителями)). АКЦИЯ для ВСЕХ типов номеров - прекрасная возможность отдохнуть в Спа центре и насладиться пакетом услуг по промо цене! В пакет включено:",
					list: [
						"сауна (сухой пар) - 15 мин.",
						"джакузи - 15 мин.",
						"сауна (хамам) - 15 мин.",
						"скраб всего тела - 25 мин.",
						"кокосовая маска на все тело - 25 мин.",
						"массаж спины - 35 мин."
					]
				},
				conditions: [
					"Акция распространяется на бронирование полных пакетных туров.",
					"Акция не распространяется на кроме мастера нестандартного тура и групповые туры от 15 человек.",
					"Особые условия: Пакет СЕМЕЙНЫЙ 2+2=2 (тип номера Deluxe rooms, возраст детей до 11,99)",
					"Особые условия: пакет СПА-услуг (для всех типов номеров, на все резервации c 17.10.23)"
				],
				booking: "17.10.23",
				accommodation: "17.10.23",
				departure_from: "Все",
				url: "https://www.coral.ru/hotels/egypt/movenpick-waterpark-resort-spa-soma-bay-hurghada/",
				promotion_end: ''
			}
		]
	},
	{
		name: "Таиланд",
		hotels: [
			{
				hotel_id: 4,
				visual: "https://content.coral.ru//resize/800x600/media/image/33/2262/637720711089614767.jpg",
				rating: 5,
				hotel_name: "CENTARA RESERVE SAMUI (ex.CENTARA GRAND BEACH RESORT SAMUI)",
				location: "о. Самуи (Koh Samui), Чавенг (Chaweng)",
				description: {
					text: "Для туров от 7-и ночей, забронированных на следующие даты - предоставляется 1 бесплатный ужин для 2 человек (Thai sharing set) и бесплатный тайский массаж (60 минут / 2 человека)",
					list: []
				},
				conditions: [
					"Акция не распространяется на даты: (01.01.2024-07.01.2024, 08.02.2024-18.02.2024, 29.03.2024-31.03.2024)",
					"Акция не распространяется на забронированные через Мастера нестандартного тура, и на групповые туры от 15 человек",
					"Стоимость туров в поиске тура обозначена с учетом акции"
				],
				booking: "31.12.2023",
				accommodation: "30.06.2024",
				departure_from: "Все",
				url: "https://www.coral.ru/hotels/thailand/centara-reserve-samui-ex-centara-grand-beach-resort-samui-koh-samui/",
				promotion_end: ''
			}
		]
	},
];

import { enable, disable } from "scroll-lock";
const navigation_template = document.querySelector('#navigation-template').content;
const country_template = document.querySelector('#country-template').content;
const modal_template = document.querySelector('#modal-template').content;
const card_template = document.querySelector('#card-template').content;

function promotionTimer(begin, end) {
	const TIME = moment().format('DD.MM.YYYY, kk:mm');
	const MARKUP = template.cloneNode(true);
	if (moment(TIME).isAfter(begin)) document.querySelector('.banners-grid__wrapper').append(MARKUP);
	if (moment(TIME).isAfter(end)) document.querySelector(`[data-end="${end}"]`).remove();
}

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
		rating.innerHTML = star.repeat(el.rating);
		img.src = el.visual;
		h5.textContent = el.hotel_name;
		location.textContent = el.location;
		data_booking.textContent = el.booking;
		data_accommodation.textContent = el.accommodation;
		data_departure_from.textContent = el.departure_from;
		description.innerHTML = `<p>${el.description.text}</p>`;
		if (el.description.text.length > 140) {
			actions.innerHTML = `<a href="${el.url}">ВЫБРАТЬ ТУР</a> <button data-toggle="modal" data-target='promotion-modal'>подробнее</button>`;
		} else {
			actions.innerHTML = `<a href="${el.url}">ВЫБРАТЬ ТУР</a>`;
		}
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
	let id = parseInt(target.closest('[data-hotel-id]').dataset.hotelId);
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
				document.body.append(markup);
			}
		});
	});
}

const promotions = document.querySelector('.hotel-promotions .promotions');
promotions.addEventListener('click', (e) => {
	let target = e.target;
	if (target.getAttribute('data-target') === 'promotion-modal') {
		modalGenerator(target);
		if (document.querySelector('#promotion-modal')) {
			$('#promotion-modal').modal({ keyboard: true });
			$('#promotion-modal').on('shown.bs.modal', () => disable());
			$('#promotion-modal').on('hidden.bs.modal', () => {
				$('#promotion-modal').remove();
				enable();
			});
		}
	}
});
document.querySelector('.hotel-promotions .promotions').firstChild.remove();


