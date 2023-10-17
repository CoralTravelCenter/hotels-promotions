document.addEventListener("DOMContentLoaded",()=>{[...document.querySelectorAll("[data-location]")],document.querySelector(".navigation-list");let t=document.querySelector(".flight-list");!// Обрезаем строку по символам и добавляем кнопку показать больше
function(){var e;let n=document.querySelector(".description"),o=n.textContent;n.textContent=`${(e=n.textContent).length>140?e.substring(0,140).trim()+"...":e}`,n.insertAdjacentHTML("beforeend",'&nbsp;<button class="show-more">Показать больше</button>'),t.style.display="none";let l=document.querySelector(".show-more");l.addEventListener("click",()=>{n.textContent=o,t.style.display="block"})}();// Навигация по регионам
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