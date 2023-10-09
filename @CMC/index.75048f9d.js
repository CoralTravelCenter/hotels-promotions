document.addEventListener("DOMContentLoaded",()=>{$('[data-module="leftSiblingMenu"]').detach().prependTo("aside");let e=[...document.querySelectorAll(".navigation-list__item")],t=document.querySelector("[data-snap-slider-next]"),o=document.querySelector("[data-snap-slider-prev]"),r=[...document.querySelectorAll("[data-location]")],n=document.querySelector(".navigation-list"),a=document.querySelector(".promotions");t.addEventListener("click",()=>{e[e.length-1].scrollIntoView({behavior:"smooth",inline:"start",block:"center"})}),o.addEventListener("click",()=>{e[0].scrollIntoView({behavior:"smooth",inline:"start",block:"center"})}),n.addEventListener("click",e=>{if(e.target.hasAttribute("data-location")){r.forEach(e=>e.classList.remove("js-active")),e.target.classList.add("js-active");let t=e.target.getAttribute("data-location"),o=document.querySelector(`[data-name=${t}]`);document.querySelector(".promotions").scrollTo({top:o.offsetTop-100,left:0,behavior:"smooth"})}}),a.addEventListener("click",e=>{// Берем информацию для модалки с карточки
(function(e){let t=e.target;if(t.hasAttribute("data-toggle")){let e,o,r,n,a,l;o=(e=t.closest(".content")).querySelector("h5").outerHTML,r=e.querySelector(".rating").outerHTML,n=e.querySelector(".info").outerHTML,a=document.querySelector("#template").content.cloneNode(!0),l=`
			${r}
			${o}
			${n}
		`,a.querySelector(".modal-header").insertAdjacentHTML("afterbegin",l),document.querySelector(".promotions").append(a)}})(e),function(){let e=document.querySelector("#promotion-modal");null!==e&&($("#promotion-modal").modal({keyboard:!0}),$("#promotion-modal").on("hidden.bs.modal",()=>{e.remove()}))}()})});// document.addEventListener("DOMContentLoaded", ()=> {
// 	function promotionExpiried() {
// 		const promotions = document.querySelectorAll('[promotion-end]');
// 		let today = new Date().toLocaleTimeString();
// 		const dayJs = dayjs();
// 		console.log(dayJs.duration().asMonths());
// 		promotions.forEach(promotion => {
// 			if (today === promotion.getAttribute('promotion-end')) {
// 				console.log('время вышло');
// 			}
// 		});
// 	}
// 	promotionExpiried();
// });
