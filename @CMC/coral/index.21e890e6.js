document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("[data-snap-slider]"),t=[...document.querySelectorAll(".navigation-list__item")],o=document.querySelector("[data-snap-slider-next]"),n=document.querySelector("[data-snap-slider-prev]"),l=[...document.querySelectorAll("[data-location]")],r=document.querySelector(".navigation-list"),a=document.querySelector(".promotions");// Добавляем кнопки в навигацию когда появляется горизонтальный скролл
function d(){e.clientWidth<e.scrollWidth?(o.style.display="block",n.style.display="block"):(o.style.display="none",n.style.display="none")}d(),window.addEventListener("resize",_.throttle(d,1e3)),// Клик по next
o.addEventListener("click",()=>{t[t.length-1].scrollIntoView({behavior:"smooth",inline:"start",block:"nearest"})}),// Клик по prev
n.addEventListener("click",()=>{t[0].scrollIntoView({behavior:"smooth",inline:"start",block:"nearest"})}),r.addEventListener("click",// Навигация по регионам
function(e){if(e.target.hasAttribute("data-location")){let t=e.target.getAttribute("data-location"),o=document.querySelector(".hotel-promotions nav").clientHeight,n=document.querySelector('[data-module="searchtabsmain"]').clientHeight;$([document.documentElement,document.body]).animate({scrollTop:_.floor($(`[data-name=${t}]`).offset().top)-(o+n+150)},300),l.forEach(e=>e.classList.remove("js-active")),e.target.classList.add("js-active")}}),a.addEventListener("click",e=>{// Берем информацию для модалки с карточки
(function(e){let t=e.target;if(t.hasAttribute("data-toggle")){let e,o,n,l,r,a,d,i,c,s;o=(e=t.closest(".content")).querySelector("h5").outerHTML,n=e.querySelector(".rating").outerHTML,l=e.querySelector(".info").outerHTML,r=e.querySelector(".description").textContent,a=document.createDocumentFragment(),d=document.querySelector("#template"),s=document.querySelector("body"),i=d.content.cloneNode(!0),c=`
			${n}
			${o}
			${l}
		`,i.querySelector(".modal-header").insertAdjacentHTML("afterbegin",c),// Создаем разметку, список или текст в зависимости от колличесва символов в описании
function(e,t){let o=t.length,n=_.split(t,".");if(o>140){let t=`
				<ol>
					${n.map(e=>{if(""!=e)return`<li>${e}</li>`}).join("")}
				</ol>
			`;e.insertAdjacentHTML("afterbegin",t)}else{let o=`<p>${t}</p>`;e.insertAdjacentHTML("afterbegin",o)}}(i.querySelector(".modal-body"),r),a.append(i),s.append(a)}})(e),// Показываем/скрываем модалку
function(){let e=document.querySelector("#promotion-modal");null!==e&&($("#promotion-modal").modal({keyboard:!0}),$("#promotion-modal").on("hidden.bs.modal",()=>{e.remove()}))}()});// Генерируем Dropdown на 1024px
let i=window.matchMedia("(max-width: 1024px)"),c=document.querySelector("#dropdown").content.cloneNode(!0),s=document.querySelector(".hotel-promotions .navigation");function u(e){e?$('[data-module="leftSiblingMenu"]').detach().prependTo(".hotel-promotions .navigation .dropdown .dropdown__content"):$('[data-module="leftSiblingMenu"]').detach().prependTo(".hotel-promotions aside")}s.append(c),u(i.matches),i.addEventListener("change",e=>{u(e.matches)})}),document.addEventListener("DOMContentLoaded",()=>{!function(){let e=document.querySelectorAll("[promotion-end]"),t=new Date().toLocaleTimeString(),o=dayjs();console.log(o.duration().asMonths()),e.forEach(e=>{t===e.getAttribute("promotion-end")&&console.log("время вышло")})}()});