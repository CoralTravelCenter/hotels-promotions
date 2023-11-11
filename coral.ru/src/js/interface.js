export const Interface = () => {
	const slider = document.querySelector('[data-snap-slider]');
	const slides = [...document.querySelectorAll('.navigation-list__item')];
	const nextBtn = document.querySelector('[data-snap-slider-next]');
	const prevBtn = document.querySelector('[data-snap-slider-prev]');
	const locations = [...document.querySelectorAll('[data-location]')];
	const navigation = document.querySelector('.navigation-list');
	const promotions = document.querySelector('.promotions');

	// Добавляем кнопки в навигацию когда появляется горизонтальный скролл
	function addNavigationButtons() {
		if (slider.clientWidth < slider.scrollWidth) {
			nextBtn.style.display = 'block';
			prevBtn.style.display = 'block';
		} else {
			nextBtn.style.display = 'none';
			prevBtn.style.display = 'none';
		}
	}
	addNavigationButtons();
	window.addEventListener('resize', _.throttle(addNavigationButtons, 1000));

	// Клик по next
	nextBtn.addEventListener('click', () => {
		slides[slides.length - 1].scrollIntoView({
			behavior: 'smooth',
			inline: 'start',
			block: "nearest"
		});
	});

	// Клик по prev
	prevBtn.addEventListener('click', () => {
		slides[0].scrollIntoView({
			behavior: 'smooth',
			inline: 'start',
			block: "nearest"
		});
	});

	// Навигация по регионам
	function navScroller(e) {
		if (e.target.hasAttribute('data-location')) {
			const dataAttr = e.target.getAttribute('data-location');
			const navHeight = document.querySelector('.hotel-promotions nav').clientHeight;
			const browHeight = document.querySelector('[data-module="searchtabsmain"]').clientHeight;
			$([document.documentElement, document.body]).animate({
				scrollTop: _.floor($(`[data-name=${dataAttr}]`).offset().top) - (navHeight + browHeight + 150)
			}, 300);
			locations.forEach(element => element.classList.remove('js-active'));
			e.target.classList.add('js-active');
		}
	}
	navigation.addEventListener('click', navScroller);

	// Создаем разметку, список или текст в зависимости от колличесва символов в описании
	function descriptionGenerator(modal_body, description) {
		let descr_length = description.length;
		let descr_arr = _.split(description, '.');
		if (descr_length > 140) {
			const ul = `
				<ol>
					${descr_arr.map(item => {
				if (item != '') {
					return `<li>${item}</li>`;
				}
			}).join('')
				}
				</ol>
			`;
			modal_body.insertAdjacentHTML('afterbegin', ul);
		} else {
			const p = `<p>${description}</p>`;
			modal_body.insertAdjacentHTML('afterbegin', p);
		}
	}

	// Генерируем модалку
	function modalGenerator(hotel_name, hotel_rating, info, description) {
		let fragment, template, clone, html, place;
		fragment = document.createDocumentFragment();
		template = document.querySelector('#template');
		place = document.querySelector('body');

		clone = template.content.cloneNode(true);
		html = `
			${hotel_rating}
			${hotel_name}
			${info}
		`;
		clone.querySelector('.modal-header').insertAdjacentHTML('afterbegin', html);
		descriptionGenerator(clone.querySelector('.modal-body'), description);

		fragment.append(clone);
		place.append(fragment);
	}

	// Показываем/скрываем модалку
	function modalToggler() {
		const myModal = document.querySelector('#promotion-modal');
		if (myModal !== null) {
			$('#promotion-modal').modal({ keyboard: true });
			$("#promotion-modal").on('hidden.bs.modal', () => {
				myModal.remove();
			});
		}
	}

	// Берем информацию для модалки с карточки
	function getInfoFromHotel(e) {
		let target = e.target;
		if (target.hasAttribute('data-toggle')) {
			let parent, hotel_name, hotel_rating, info, description;
			parent = target.closest('.content');
			hotel_name = parent.querySelector('h5').outerHTML;
			hotel_rating = parent.querySelector('.rating').outerHTML;
			info = parent.querySelector('.info').outerHTML;
			description = parent.querySelector('.description').textContent;
			modalGenerator(hotel_name, hotel_rating, info, description);
		}
	}
	promotions.addEventListener('click', (e) => {
		getInfoFromHotel(e);
		modalToggler();
	});

	// Генерируем Dropdown на 1024px
	const mobileWidthMediaQuery = window.matchMedia('(max-width: 1024px)');
	const dropDownTemplate = document.querySelector('#dropdown').content.cloneNode(true);
	const dropdownPlace = document.querySelector('.hotel-promotions .navigation');
	dropdownPlace.append(dropDownTemplate);

	function mobile(isMobileSize) {
		if (!isMobileSize) {
			$('[data-module="leftSiblingMenu"]').detach().prependTo('.hotel-promotions aside');
		} else {
			$('[data-module="leftSiblingMenu"]').detach().prependTo('.hotel-promotions .navigation .dropdown .dropdown__content');
		}
	}

	mobile(mobileWidthMediaQuery.matches);
	mobileWidthMediaQuery.addEventListener('change', (e) => {
		mobile(e.matches);
	});
};	
