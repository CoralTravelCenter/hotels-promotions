document.addEventListener("DOMContentLoaded", () => {
	const slides = [...document.querySelectorAll('.navigation-list__item')];
	const nextBtn = document.querySelector('[data-snap-slider-next]');
	const prevBtn = document.querySelector('[data-snap-slider-prev]');
	const locations = [...document.querySelectorAll('[data-location]')];
	const navigation = document.querySelector('.navigation-list');
	const promotions = document.querySelector('.promotions');

	nextBtn.addEventListener('click', () => {
		slides[slides.length - 1].scrollIntoView({
			behavior: 'smooth',
			inline: 'start',
			block: "center"
		});
	});

	prevBtn.addEventListener('click', () => {
		slides[0].scrollIntoView({
			behavior: 'smooth',
			inline: 'start',
			block: "center"
		});
	});


	navigation.addEventListener('click', (e) => {
		if (e.target.hasAttribute('data-location')) {
			locations.forEach(element => element.classList.remove('js-active'));
			e.target.classList.add('js-active');
			const dataAttr = e.target.getAttribute('data-location');
			const targetEl = document.querySelector(`[data-name=${dataAttr}]`);
			document.querySelector('.promotions').scrollTo({
				top: targetEl.offsetTop - 100,
				left: 0,
				behavior: 'smooth'
			});
		}
	});

	function modalGenerator(hotel_name, hotel_rating, info) {
		let template, clone, html, place;
		template = document.querySelector('#template');

		clone = template.content.cloneNode(true);
		html = `
			${hotel_rating}
			${hotel_name}
			${info}
		`;
		clone.querySelector('.modal-header').insertAdjacentHTML('afterbegin', html);

		place = document.querySelector('.promotions');
		place.append(clone);
	}

	function modalToggler() {
		const myModal = document.querySelector('#promotion-modal');
		if (myModal !== null) {
			new bootstrap.Modal(myModal, {
				keyboard: true,
			});
			$("#promotion-modal").on('hidden.bs.modal', () => {
				myModal.remove();
			});
		}
	}

	// Берем информацию для модалки с карточки
	function getInfoFromHotel(e) {
		let target = e.target;
		if (target.hasAttribute('data-toggle')) {
			let parent, hotel_name, hotel_rating, info;
			parent = target.closest('.content');
			hotel_name = parent.querySelector('h5').outerHTML;
			hotel_rating = parent.querySelector('.rating').outerHTML;
			info = parent.querySelector('.info').outerHTML;
			modalGenerator(hotel_name, hotel_rating, info);
		}
	}
	promotions.addEventListener('click', (e) => {
		getInfoFromHotel(e);
		modalToggler();
	});
});