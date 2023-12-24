class CountriesNavigationItem extends HTMLElement {
	constructor(country_name) {
		super();
		this.country_name = country_name;
		this.classList.add('navigation-list__item');
	}

	render() {
		this.innerHTML = `<button data-location="${this.country_name}">${this.country_name}</button>`;
	}

	connectedCallback() {
		if (!this.rendered) {
			this.render();
			this.rendered = true;
		}
	}
}
customElements.define("countries-navigation-item", CountriesNavigationItem);
HOTELS_PROMOTION_SETTINGS.forEach(country => document.querySelector('countries-navigation-list').append(new CountriesNavigationItem(country.name)));