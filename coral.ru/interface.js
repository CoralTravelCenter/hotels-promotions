/*Переменные*/
const snapSlider = document.querySelector('[data-snap-slider]');
const snapSlides = [...document.querySelectorAll('.navigation-list__item')];
const nextBtn = document.querySelector('[data-snap-slider-next]');
const prevBtn = document.querySelector('[data-snap-slider-prev]');
const locations = [...document.querySelectorAll('[data-location]')];
const navigation = document.querySelector('.navigation-list');
const navHeight = document.querySelector('.hotel-promotions nav').clientHeight;
const height_h4 = document.querySelector('.promotions-list h4').clientHeight;
const browHeight = document.querySelector('[data-module="searchtabsmain"]').clientHeight;
const b_crumb = document.querySelector('.bcrumb').clientHeight;
const iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

const disableScroll = function () {
	let pagePosition = window.scrollY;
	document.body.classList.add('disable-scroll');
	document.body.dataset.position = pagePosition;
	document.body.style.top = -pagePosition + 'px';
};

const enableScroll = function () {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.style.top = 'auto';
	document.body.classList.remove('disable-scroll');
	window.scroll(0, pagePosition);
	document.body.removeAttribute('data-position');
};

/*Передаем данные в функцию рендера модального окна*/
const modalRender = (createTouchEvent) => {
	const promotions = document.querySelector('section.hotel-promotions .promotions');
	promotions.childNodes.forEach(node => {
		if (node.nodeType === 3) node.remove();
	});
	promotions.addEventListener('click', (e) => {
		const target = e.target;
		if (target.getAttribute('data-target') === 'promotion-modal') {
			modalGenerator(target);
			if (document.querySelector('#promotion-modal')) {
				$('#promotion-modal').modal('show', { keyboard: true });
				$('#promotion-modal').on('shown.bs.modal', () => {
					if (iOS) disableScroll();
				});
				$('#promotion-modal').on('hidden.bs.modal', () => {
					if (iOS) enableScroll();
					$('#promotion-modal').remove();
				});
				if (createTouchEvent) createTouchEvent();
			}
		}
	});
};

/*Логика кнопок навигации*/
const navigationButtonsClicker = () => {
	nextBtn.addEventListener('click', () => {
		snapSlides[snapSlides.length - 1].scrollIntoView({
			behavior: 'smooth',
			inline: 'center',
			block: 'nearest'
		});
	});
	prevBtn.addEventListener('click', () => {
		snapSlides[0].scrollIntoView({
			behavior: 'smooth',
			inline: 'center',
			block: 'nearest'
		});
	});
};
navigationButtonsClicker();

/*Навигация*/
const navScrollHandler = (e) => {
	if (e.target.hasAttribute('data-location')) {
		const target = e.target.getAttribute('data-location');
		const scrollPadding = navHeight + browHeight + parseInt(getComputedStyle(document.querySelector('.promotions')).paddingTop, 10) + height_h4 + b_crumb;
		document.documentElement.style.setProperty('--scroll-padding-top', scrollPadding + "px");
		document.querySelector(`[data-name=${target}]`).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest'
		});
	}
};
navigation.addEventListener('click', navScrollHandler);

/*Удаляем просроченную акцию*/
const expiredPromotionRemove = () => {
	const promotions_list = document.querySelectorAll('.promotions-list__item');

	function dateFormatter(str) {
		const reformat_date = str.split(".").reverse().join("-");
		return reformat_date;
	}

	function promotionTimer(promo) {
		if (promo.getAttribute('promotion-end') !== '') {
			const END = promo.getAttribute('promotion-end');
			const DATE = moment().format('YYYY-MM-DD');
			if (moment(DATE).isSameOrAfter(dateFormatter(END))) document.querySelector(`[promotion-end="${END}"]`).remove();
		}
	}
	promotions_list.forEach(promo => promotionTimer(promo));
};
expiredPromotionRemove();

/*Переключаем активную кнопку по скролу*/
const navigationObserver = () => {
	const targets = document.querySelectorAll('.promotions-list h4');
	const options = {
		rootMargin: "-25% 0% -25% 0%",
		threshold: 0.5
	};
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				locations.forEach(location => location.classList.remove('js-active'));
				document.querySelector(`[data-location=${entry.target.closest('.promotions-list').getAttribute('data-name')}]`).classList.add('js-active');
			}
		});
	}, options);
	targets.forEach(target => observer.observe(target));
};
navigationObserver();


/*Скрываем модальное окно по свайпу вниз*/
const createTouchEvent = () => {
	const modal_header = document.querySelector('#promotion-modal .modal-header');
	document.body.addEventListener('swiped-down', (e) => {
		if (modal_header.contains(e.target)) {
			$('#promotion-modal').modal('hide');
		}
	});
};

/*Запускаем необходимый код на телефонах*/
const mobileWidthMediaQuery = window.matchMedia('(max-width: 576px)');
function mobileChecker(isMobileSize) {
	if (isMobileSize) {
		modalRender(createTouchEvent);
	} else {
		modalRender();
	}
}
mobileChecker(mobileWidthMediaQuery.matches);
mobileWidthMediaQuery.addEventListener('change', (e) => {
	mobileChecker(e.matches);
});

/*Рендерим кнопки навигации на устройствах < 1024 но > 768*/
const tabletWidthMediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
function tabletChecker(isTablet) {
	if (isTablet) {
		if (snapSlider.clientWidth < snapSlider.scrollWidth) {
			nextBtn.style.display = 'block';
			prevBtn.style.display = 'block';
		} else {
			nextBtn.style.display = 'none';
			prevBtn.style.display = 'none';
		}
	}
}
tabletChecker(tabletWidthMediaQuery.matches);
tabletWidthMediaQuery.addEventListener('change', (e) => {
	tabletChecker(e.matches);
});