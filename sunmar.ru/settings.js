const PROMOTION_SETTINGS = [
	{
		country_id: 1,
		name: "Египет",
		poster_title: 'Здесь вы найдёте акции, скидки и специальные предложения от отелей Египта на популярных курортах — Хургада и Шарм-эш-Шейх. Смотрите, выбирайте и бронируйте отели и получайте приятные бонусы!',
		hotels: [
			{
				hotel_id: 1,
				visual: "https://content.sunmar.ru//resize/800x600/media/image/12/9270/636751320657246517.jpg",
				rating: 5,
				hotel_name: "BARON PALACE RESORT SAHL HASHEESH",
				location: "Хургада, Сал Хашиш",
				description: {
					text: "Отдыхай с детьми - плати только за взрослых, двое детей до 14,99 лет – бесплатно!",
					list: []
				},
				conditions: [
					"В акции участвуют все типы номеров",
					"Акция распространяется на бронирование полных пакетных туров в режиме онлайн",
					"Стоимость туров в поиске тура отображается с учетом акции",
					"Для всех новых резерваций согласно указанных дат бронирований и проживания"
				],
				booking: "20.12.2023",
				accommodation: "20.12.2023",
				departure_from: "Все",
				url: "https://www.sunmar.ru/hotels/egypt/baron-palace-resort-sahl-hasheesh-hurghada/",
				promotion_end: ''
			},
			{
				hotel_id: 2,
				visual: "https://content.sunmar.ru//resize/800x600/media/image/12/8871/637795739711641789.jpg",
				rating: 5,
				hotel_name: "MOVENPICK WATERPARK RESORT & SPA SOMA BAY",
				location: "Хургада, Сома Бэй",
				description: {
					text: "Пакет СЕМЕЙНЫЙ 2+2=2 (акция для Deluxe rooms - 2 детей до 11, 99 лет бесплатно (в одной комнате с родителями)) АКЦИЯ для ВСЕХ типов номеров - прекрасная возможность отдохнуть в Спа центре и насладиться пакетом услуг по промо цене! В пакет включено:",
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
				url: "https://www.sunmar.ru/hotels/egypt/movenpick-waterpark-resort-spa-soma-bay-hurghada/",
				promotion_end: ''
			}
		]
	},
	{
		name: "ОАЭ",
		hotels: [
			{
				hotel_id: 3,
				visual: "https://content.sunmar.ru//resize/800x600/media/image/31/46458/637708480219178761.jpg",
				rating: 4,
				hotel_name: "THE FIRST COLLECTION JUMEIRAH VILLAGE CIRCLE",
				location: "Дубай, Аль Барша",
				description: {
					text: "Отдыхай с детьми - плати только за взрослых, двое детей до 14,99 лет – бесплатно!",
					list: []
				},
				conditions: [
					"Акция не распространяется на даты: (29.11.2023 – 12.12.2023 - 28.12.2023 – 02.01.2024)",
					"В акции участвуют все города вылетов",
					"Акция распространяется на бронирование полных пакетных туров",
					"Не распространяется на групповые заявки от 15 человек",
					"Стоимость туров в поиске тура обозначена с учетом акции"
				],
				booking: "31.05.2024",
				accommodation: "31.05.2024",
				departure_from: "Все",
				url: "https://www.sunmar.ru/hotels/united-arab-emirates/the-first-collection-jumeirah-village-circle-dubai/",
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
				location: "о. Самуи (регион), Чавенг",
				description: {
					text: "Для туров от 7-и ночей, забронированных на следующие даты - предоставляется 1 бесплатный ужин для 2 человек (Thai sharing set) и бесплатный тайский массаж (60 минут / 2 человека)",
					list: []
				},
				conditions: [
					"Не распространяется на даты проживания: 01.01.2024-07.01.2024, 08.02.2024-18.02.2024, 29.03.2024-31.03.2024",
					"Распространяется на бронирование полных пакетных туров в режиме онлайн",
					"Не распространяется на заявки, забронированные через «Мастер нестандартного тура»",
					"Не распространяется на групповые заявки от 15 человек",
					"Цены в поиске тура представлены с учетом акции"
				],
				booking: "31.12.2023",
				accommodation: "30.06.2024",
				departure_from: "Все",
				url: "https://www.sunmar.ru/hotels/thailand/centara-reserve-samui-ex-centara-grand-beach-resort-samui-koh-samui/",
				promotion_end: ''
			}
		]
	},
	{
		name: "Вьетнам",
		hotels: [
			{
				hotel_id: 5,
				visual: "https://content.sunmar.ru//resize/800x600//media/image/41/11814/636578436124558507.jpg",
				rating: 5,
				hotel_name: "VINPEARL RESORT & SPA PHU QUOC",
				location: "о. Фукуок, Дай Бич",
				description: {
					text: "Бронируй больше-плати меньше! Отдых 7 ночей по цене 6! или Отдых 10 ночей по цене восьми !",
					list: []
				},
				conditions: [
					"Действительны для всех новых резерваций с 05.10.2022 по 30.11.2023",
					"Актуально для всех типов номеров",
					"Действует при бронировании полного пакетного тура в системе онлайн",
					"Не распространяется на групповые заявки от 15 человек",
					"Не распространяется на заявки, забронированные через «Мастер нестандартного тура»",
					"Цены в поиске тура представлены с учетом акции"
				],
				booking: "31.12.2023",
				accommodation: "30.06.2024",
				departure_from: "Все",
				url: "https://www.sunmar.ru/hotels/vietnam/vinpearl-resort-spa-phu-quoc-phu-quoc/?q=%7b%22Bgn%22%3a%2215.11.2023%22%2c%22End%22%3a%2215.11.2023%22%2c%22Dr%22%3a%220%22%2c%22Acc%22%3a%227%2c8%2c9%2c10%2c11%2c12%2c13%2c14%22%2c%22Gest%22%3a%222%22%2c%22Q%22%3a%22RsmnXvG1wunZdj0TjLVuQZpqtdAll9AeiM7w325YrWcpAurblCOxgj6akBg3lm3LHSDPEICAyg1OpMWy6C9plsNHBnRCZgD99GVc9PCow3SfsxXFo8y3wPgjMgO%2fQ%2bu%2fgWQ33UXncyZf45aiAx7VRas1B%2btxrnd0pDYXsXvBeWXynGNYuV%2fN%2f%2bDY%2f6jl9s7n%22%2c%22Ts%22%3a0%2c%22Las%22%3afalse%2c%22AcId%22%3a0%2c%22FDate%22%3a%220001-01-01T00%3a00%3a00Z%22%2c%22Ref%22%3afalse%2c%22Pstatus%22%3afalse%2c%22TransferPrice%22%3a0.0%2c%22Chr%22%3afalse%2c%22Rglr%22%3atrue%2c%22Srt%22%3a1%7d",
				promotion_end: ''
			}
		]
	}
];
