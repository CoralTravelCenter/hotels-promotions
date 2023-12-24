class PromotionList extends HTMLElement {
	constructor(country_name, country_hotels) {
		super();
		this.country_name = country_name;
		this.country_hotels = country_hotels;
		this.classList.add('hotel-promotions__country');
	}

	render() {
		this.innerHTML = `<h4>${this.country_name}</h4>`;
		this.country_hotels.forEach(hotel => this.append(new PromotionListItem(hotel)));
	}

	connectedCallback() {
		if (!this.rendered) {
			this.render();
			this.rendered = true;
		}
	}
}
customElements.define("promotion-list", PromotionList);
HOTELS_PROMOTION_SETTINGS.forEach(country => document.querySelector('.hotel-promotions__container').append(new PromotionList(country.name, country.hotels)));