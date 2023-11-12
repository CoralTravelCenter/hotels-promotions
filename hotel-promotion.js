const PROMOTION_SETTINGS = [
	{
		name: "Египет",
		hotels: [
			{
				visual: "https://content.coral.ru//resize/800x600/media/image/12/3750/636533875375406850.jpg",
				rating: 3,
				hotel_name: "Отель 1",
				location: "Хургада (Hurghada), Сал Хашиш (Salh Hasheesh)",
				description: {
					text: "Пакет СЕМЕЙНЫЙ 2+2=2 (акция для Deluxe rooms - 2 детей до 11, 99 лет бесплатно (в одной комнате с родителями)).",
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
					"Стоимость туров в поиске тура отображается с учетом акции."
				],
				booking: "20.12.2023",
				accommodation: "20.12.2023",
				fly_from: "Все",
				url: "https://www.coral.ru/hotels/egypt/baron-palace-resort-sahl-hasheesh-hurghada/",
				promotion_end: ''
			},
			{
				visual: "https://content.coral.ru//resize/800x600/media/image/12/8871/637795739711641789.jpg",
				rating: 5,
				hotel_name: "Отель 2",
				location: "Хургада (Hurghada), Сома-Бэй (Soma Bay)",
				description: {
					text: "Пакет СЕМЕЙНЫЙ 2+2=2 (акция для Deluxe rooms - 2 детей до 11, 99 лет бесплатно (в одной комнате с родителями)). АКЦИЯ для ВСЕХ типов номеров - прекрасная возможность отдохнуть в Спа центре и насладиться пакетом услуг по промо цене!",
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
					"Стоимость туров в поиске тура отображается с учетом акции."
				],
				booking: "До 15 сентября",
				accommodation: "До 31 октября",
				fly_from: "Все",
				url: "https://www.coral.ru/hotels/egypt/movenpick-waterpark-resort-spa-soma-bay-hurghada/",
				promotion_end: '30.09.2023'
			}
		]
	},
	{
		name: "Турция",
		hotels: [
			{
				visual: "https://content.coral.ru//resize/274x172/media/image/12/9117/637815093545591485.jpg",
				rating: 4,
				hotel_name: "Отель 3",
				location: "Хургада (Hurghada), Сал Хашиш (Salh Hasheesh)",
				description: {
					text: "Пакет СЕМЕЙНЫЙ 2+2=2 (акция для Deluxe rooms - 2 детей до 11, 99 лет бесплатно (в одной комнате с родителями)). АКЦИЯ для ВСЕХ типов номеров - прекрасная возможность отдохнуть в Спа центре и насладиться пакетом услуг по промо цене!",
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
					"Стоимость туров в поиске тура отображается с учетом акции."
				],
				booking: "20.12.2023",
				accommodation: "20.12.2023",
				fly_from: "Все",
				url: "https://www.coral.ru/hotels/egypt/baron-palace-resort-sahl-hasheesh-hurghada/",
				promotion_end: ''
			},
			{
				visual: "https://content.coral.ru//resize/274x172/media/image/12/128/637340601982733137.png",
				rating: 5,
				hotel_name: "Отель 4",
				location: "Хургада (Hurghada), Сома-Бэй (Soma Bay)",
				description: {
					text: "Пакет СЕМЕЙНЫЙ 2+2=2 (акция для Deluxe rooms - 2 детей до 11, 99 лет бесплатно (в одной комнате с родителями)). АКЦИЯ для ВСЕХ типов номеров - прекрасная возможность отдохнуть в Спа центре и насладиться пакетом услуг по промо цене!",
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
					"Стоимость туров в поиске тура отображается с учетом акции."
				],
				booking: "До 15 сентября",
				accommodation: "До 31 октября",
				fly_from: "Все",
				url: "https://www.coral.ru/hotels/egypt/movenpick-waterpark-resort-spa-soma-bay-hurghada/",
				promotion_end: '30.09.2023'
			}
		]
	}
];


const navigation_template = document.querySelector('#navigation-template').content;
const country_template = document.querySelector('#country-template').content;
const modal_template = document.querySelector('#modal-template').content;
const dropdown_template = document.querySelector('#dropdown-template').content;
const card_template = document.querySelector('#card-template').content;

function promotionTimer(begin, end) {
	const TIME = moment().format('DD.MM.YYYY, kk:mm');
	const MARKUP = template.cloneNode(true);
	if (moment(TIME).isAfter(begin)) document.querySelector('.banners-grid__wrapper').append(MARKUP);
	if (moment(TIME).isAfter(end)) document.querySelector(`[data-end="${end}"]`).remove();
}

function navigationRender(country) {
	const button = navigation_template.querySelector('button');
	const data_navigation = document.querySelector('[data-nav]');
	button.setAttribute('data-location', country.name);
	button.textContent = country.name;
	const markup = navigation_template.cloneNode(true);
	data_navigation.append(markup);
}

function cardRender(country) {
	const hotel = country.hotels;
	const h5 = card_template.querySelector('h5');
	const img = card_template.querySelector('.picture img');
	const rating = card_template.querySelector('.rating');
	const description = card_template.querySelector('.description');
	const actions = card_template.querySelector('[data-actions]');
	const star = `
		<li class="rating__item">
			<svg width="16" height="16" fill="none">
				<path fill="#F0AB00" d="m10.758 4.67 4.329.659a.949.949 0 0 1 .48.222.994.994 0 0 1 .294.449 1.028 1.028 0 0 1-.238 1.019l-3.139 3.175.741 4.554c.03.183.01.372-.059.544a.986.986 0 0 1-.33.428.948.948 0 0 1-1.015.072l-3.868-2.127-3.865 2.128a.947.947 0 0 1-1.018-.071.985.985 0 0 1-.328-.43 1.018 1.018 0 0 1-.057-.543l.74-4.554L.286 7.02A1.029 1.029 0 0 1 .048 6a.99.99 0 0 1 .296-.45.945.945 0 0 1 .48-.221l4.325-.659L7.088.56A.98.98 0 0 1 7.443.15a.939.939 0 0 1 1.022 0c.153.099.277.24.356.408l1.937 4.111Z"></path>
			</svg>
		</li>`;
	hotel.forEach(el => {
		rating.innerHTML = star.repeat(el.rating);
		img.src = el.visual;
		h5.textContent = el.hotel_name;
		description.innerHTML = `<p>${el.description.text}</p>`;
		if (el.description.text.length > 140) {
			actions.innerHTML = `<a href="${el.url}">ВЫБРАТЬ ТУР</a> <button data-toggle="modal" data-target='promotion-modal'>подробнее</button>`;
		} else {
			actions.innerHTML = `<a href="${el.url}">ВЫБРАТЬ ТУР</a>`;
		}
		const markup = card_template.cloneNode(true);
		document.querySelector(`[data-name="${country.name}"]`).append(markup);
	});
}

function promotionsRender(country) {
	const ul = country_template.querySelector('ul');
	const h4 = country_template.querySelector('h4');
	ul.setAttribute('data-name', country.name)
	h4.textContent = country.name;
	const markup = country_template.cloneNode(true);
	document.querySelector('.hotel-promotions .promotions').append(markup);
}

function popupRender(country) {
	const hotel = country.hotels;
	hotel.forEach(el=> {
		
	})
}

PROMOTION_SETTINGS.forEach(element => {
	navigationRender(element);
	promotionsRender(element);
	cardRender(element);
	popupRender(element);
});