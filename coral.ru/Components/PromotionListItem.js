class PromotionListItem extends HTMLElement {
	constructor(hotel_data) {
		super();
		this.hotel_data = hotel_data;
	}

	generateRating() {
		return `
		<li class="rating__item">
			<svg width="16" height="16" fill="none">&nbsp;
				<path fill="#F0AB00" d="m10.758 4.67 4.329.659a.949.949 0 0 1 .48.222.994.994 0 0 1 .294.449 1.028 1.028 0 0 1-.238 1.019l-3.139 3.175.741 4.554c.03.183.01.372-.059.544a.986.986 0 0 1-.33.428.948.948 0 0 1-1.015.072l-3.868-2.127-3.865 2.128a.947.947 0 0 1-1.018-.071.985.985 0 0 1-.328-.43 1.018 1.018 0 0 1-.057-.543l.74-4.554L.286 7.02A1.029 1.029 0 0 1 .048 6a.99.99 0 0 1 .296-.45.945.945 0 0 1 .48-.221l4.325-.659L7.088.56A.98.98 0 0 1 7.443.15a.939.939 0 0 1 1.022 0c.153.099.277.24.356.408l1.937 4.111Z"></path>
			</svg>
		</li>
		`;
	}

	generateDescription(description) {
		if (description.list.length > 0) {
			return `
				<p>${description.text}</p>
				<ul class='description-list'>
						${description.list.map(item => {
							return `<li>${item}</li>`;
						}).join('')}
				</ul>
			`;
		} else {
			return `<p>${description.text}</p>`;
		}
	}

	render() {
		const hotel = this.hotel_data;
		this.innerHTML =`
			<div class="picture">
				<img width="210" height="200" src="${hotel.visual}">
			</div>
			<div class="content">
				<ul class="rating">
					${
						this.generateRating().repeat(hotel.rating)
					}
				</ul>
				<h5>${hotel.hotel_name}</h5>
				<p class="location">${hotel.location}</p>
				<div class="description">
					${
						this.generateDescription(hotel.description)
					}
				</div>
				<div class="wrapper">
					<ul class="info">
						<li class="info__item">
							<div class="icon">
								<svg fill="none" viewBox="0 0 46 46">&nbsp;
									<path stroke="#000" stroke-linecap="round" stroke-width=".601" d="M19.523 34.016v.829M22.83 34.016v.829">
									</path>
									<rect width="5.219" height="1.037" x="20.041" y="34.535" stroke="#0093D0" stroke-width="1.037">
									</rect>
									<path stroke="#0093D0" stroke-linecap="round" stroke-width="1.5" d="M13.212 36.416h18.877">
									</path>
									<path stroke="#0093D0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
										d="M41.468 22.713V9.583H3.833v24.17h26.683"></path>
									<path stroke="#0093D0" stroke-linecap="round" stroke-width="1.5"
										d="M8.644 15.59h28.41M8.644 19.353h28.41M8.644 23.116h22.62M8.644 26.879h20.154"></path>
									<path stroke="#0093D0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
										d="M37.177 34.22c2.756 0 4.99-2.24 4.99-5.002a4.996 4.996 0 0 0-4.99-5.003 4.996 4.996 0 0 0-4.989 5.003 4.996 4.996 0 0 0 4.99 5.003Z">
									</path>
									<path stroke="#0093D0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
										d="m35.264 29.458 1.435 1.678 2.87-3.356"></path>
								</svg>
							</div>
							<span class="info__text">Даты бронирования</span>
							<span class="info__date">${hotel.booking}</span>
						</li>
						<li class="info__item">
							<div class="icon">
								<svg fill="none" viewBox="0 0 47 46">&nbsp;
									<path stroke="#0093D0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"
										d="M5.106 36.903v.869C5.106 39.554 6.657 41 8.574 41h29.064c1.914 0 3.468-1.446 3.468-3.228V10.706c0-1.782-1.55-3.228-3.468-3.228H8.574c-1.914 0-3.468 1.446-3.468 3.228v8.486">
									</path>
									<path stroke="#0093D0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
										d="m19.645 27.846-6.923 7.615M19.645 27.846l-6.923-7.615M5.106 27.846h14.539"></path>
									<path stroke="#0093D0" stroke-miterlimit="10" stroke-width="1.5" d="M41.106 14.345h-36"></path>
									<path stroke="#0093D0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"
										d="M12.64 9.953V5M33.574 9.953V5"></path>
								</svg>
							</div>
							<span class="info__text">Даты проживания</span>
							<span class="info__date">${hotel.accommodation}</span>
						</li>
						<li class="info__item">
							<div class="icon">
								<svg fill="none" viewBox="0 0 47 46">&nbsp;
									<path stroke="#0093D0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"
										d="M5.634 37.772V10.706c0-1.782 1.554-3.228 3.468-3.228h29.064c1.917 0 3.468 1.446 3.468 3.228v27.066c0 1.782-1.554 3.228-3.468 3.228H9.102c-1.917 0-3.468-1.446-3.468-3.228Z">
									</path>
									<path stroke="#0093D0" stroke-miterlimit="10" stroke-width="1.5" d="M41.634 14.345h-36"></path>
									<path stroke="#0093D0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"
										d="M13.167 9.953V5m20.935 4.953V5"></path>
									<path stroke="#0093D0" stroke-miterlimit="10" stroke-width="1.5"
										d="M10.212 25.752a.955.955 0 0 1 .272-.191.923.923 0 0 1 .126-.019l.135-.016c.043-.006.09-.01.144-.012.11-.002.227.008.33.018l.082.035c.166.073.336.195.515.321.182.128.361.258.54.39.125.092.25.182.374.271.395.283.79.568 1.186.849.077.054.15.097.213.134.032.018.063.036.093.057a.996.996 0 0 0 .987.069c.12-.057.24-.112.363-.167.132-.059.262-.12.395-.181.236-.112.471-.226.706-.34l.122-.059c.077-.036.152-.073.23-.112l.272-.132.384-.187.38-.183a78.756 78.756 0 0 0 1.345-.665l.269-.135c.023-.012.069-.034.12-.069a.815.815 0 0 0 .357-.732.813.813 0 0 0-.306-.576 2.918 2.918 0 0 0-.236-.167l-.13-.081c-.257-.16-.516-.323-.774-.48-.393-.24-.788-.476-1.182-.712-.16-.096-.32-.192-.48-.285-.245-.145-.49-.29-.732-.437a9.647 9.647 0 0 1-.784-.515.178.178 0 0 1-.065-.086c.188-.136.403-.256.592-.36.048-.026.115-.052.186-.081a2.15 2.15 0 0 0 .185-.08c.156-.07.363-.087.604-.105l.201-.016.166.006c.164.006.32.012.472.024a.94.94 0 0 1 .249.043c.094.038.177.055.23.065l.024.006.113.026c.075.019.15.035.225.055.07.019.14.039.209.06l.075.022c.122.034.245.069.367.106l.17.05c.112.033.223.067.335.098.065.018.13.035.195.049a3.487 3.487 0 0 1 .297.083c.049.017.098.03.148.047.078.025.16.045.238.067l.085.025.127.034.223.061c.116.033.232.065.347.1l.136.043c.061.02.122.038.184.057.067.02.136.038.203.057l.11.03c.113.03.223.063.336.096.067.018.132.038.197.059l.13.038.08.025c.094.028.19.057.287.083.05.014.1.027.147.037l.069.016c.045.012.09.024.136.039l.07.02.441.128c.065.02.132.039.197.06l.287.085c.12.034.238.065.339.09.079.02.162.028.243.026.207-.004.365-.08.45-.118l.02-.008c.15-.07.297-.14.445-.212l.09-.043.433-.21c.18-.085.358-.172.537-.258.1-.049.55-.26.673-.321l.417-.204.151-.075.2-.1.286-.14.116-.057a54.697 54.697 0 0 1 .719-.348c.09-.043.181-.083.272-.128.107-.05.211-.104.318-.157l.23-.114c.165-.079.328-.16.494-.238.205-.095.373-.172.527-.24l.184-.077c.1-.04.205-.083.315-.136.105-.049.233-.088.371-.13l.095-.029c.036-.01.087-.022.142-.032l.091-.019.047-.01c.071-.016.142-.03.214-.045l.104-.02c.105-.02.201-.039.29-.049a5.19 5.19 0 0 1 .432-.024h.048a6.27 6.27 0 0 1 .475 0c.101.004.213.018.33.032l.085.01c.132.017.24.031.341.05.138.026.279.06.41.093.05.012.107.03.169.05l.055.02c.187.058.383.15.617.286.28.163.514.354.715.584.063.073.11.146.14.221v.003c-.051.124-.13.24-.239.358a2.033 2.033 0 0 1-.185.177 6.876 6.876 0 0 1-.71.537c-.305.201-.707.463-1.12.718-.35.213-.734.441-1.21.716-.23.134-.473.266-.706.395l-.33.18-.266.15c-.188.103-.373.209-.563.308-.193.104-.388.204-.584.306l-.36.187c-.1.05-.196.104-.295.156-.097.053-.195.104-.294.155l-.414.214-.237.122-.022.01a1.132 1.132 0 0 0-.264.16 1.132 1.132 0 0 0-.308.413c-.133.31-.26.619-.391.928l-.071.17c-.144.343-.286.685-.428 1.029l-.123.297a29.028 29.028 0 0 1-.369.872c-.06.143-.122.285-.183.427l-.184.44-.177.427a33.78 33.78 0 0 1-.204.474l-.201.47-.142.344a33.932 33.932 0 0 1-.332.782c-.059.135-.118.274-.175.41l-.142.34a27.462 27.462 0 0 1-.417.964l-.134.303-.11.25c-.054.12-.105.242-.158.363a7.209 7.209 0 0 1-.46.913c-.1.159-.23.325-.405.523l-.035.038c-.097.104-.184.18-.27.234a4.86 4.86 0 0 1-.664.369l-.122.052c-.115.05-.221.096-.324.135-.008.004-.018.006-.025.008-.02-.055-.032-.145-.004-.313l.011-.072.026-.201c.016-.136.034-.273.052-.407.025-.193.055-.384.082-.578l.024-.158.01-.072c.02-.13.037-.258.06-.388l.04-.242c.018-.102.036-.204.052-.305.012-.072.02-.143.027-.216l.016-.128c.01-.073.024-.147.036-.22l.014-.085.011-.065.018-.116c.018-.11.034-.222.05-.332.007-.057.015-.114.021-.173.006-.055.012-.112.022-.167.016-.104.035-.205.053-.307.014-.081.03-.16.042-.242.012-.065.02-.13.03-.195l.017-.124.036-.216.025-.15.008-.05c.012-.069.024-.138.032-.209.006-.053.014-.106.018-.157.005-.056.011-.114.021-.17.006-.043.016-.084.024-.127.01-.048.02-.097.027-.144.012-.063.022-.128.03-.191l.016-.104c.014-.087.027-.175.043-.262l.018-.104.014-.084c.01-.063.022-.124.03-.187.007-.047.013-.095.021-.142.008-.06.018-.116.028-.175.012-.071.025-.143.04-.214a.842.842 0 0 0-.159-.706.767.767 0 0 0-.732-.274 1.352 1.352 0 0 0-.327.095c-.19.082-.364.157-.531.232l-.424.195-.224.104a80.42 80.42 0 0 1-.92.419l-.22.1-.119.055a15.156 15.156 0 0 1-.547.236l-.218.091c-.054.023-.107.045-.162.07-.073.03-.146.063-.22.093l-.218.086-.162.06-.19.076c-.094.037-.187.075-.282.11l-.26.093-.206.074c-.049.018-.1.036-.15.057-.05.02-.102.038-.154.057-.023.008-.047.014-.07.02-.032.008-.066.016-.097.026a1.17 1.17 0 0 0-.1.033l-.05.016-.196.06c-.165.05-.331.1-.499.148-.075.02-.16.04-.249.059l-.177.04c-.073.019-.148.037-.221.057l-.07.019-.092.014-.27.039c-.072.01-.143.022-.214.034l-.282.045a.933.933 0 0 1-.13.008l-.272.008-.622.019c-.136.004-.272.006-.409.008a.982.982 0 0 1-.234-.023 1.756 1.756 0 0 1-.596-.264 1.051 1.051 0 0 1-.243-.204 1.367 1.367 0 0 1-.123-.195 39.77 39.77 0 0 1-.41-.842c-.079-.167-.154-.336-.23-.505l-.165-.36a14.953 14.953 0 0 0-.17-.362c-.08-.173-.161-.344-.238-.519-.12-.268-.237-.537-.354-.805l-.124-.29-.49-1.126-.011-.025-.02-.046a.427.427 0 0 1 .051-.149.782.782 0 0 1 .05-.063m8.823.061 7.525-3.7">
									</path>
								</svg>
							</div>
							<span class="info__text">Города вылета</span>
							<span class="info__date">${hotel.departure_from}</span>
						</li>
					</ul>
					<button data-toggle="modal" data-target='promotion-modal'>Подробнее о предложении</button>
					<div class="actions">
						<button data-lookup-destination="${hotel.hotel_name}" data-lookup-depth-days="${hotel.depth_days}">ВЫБРАТЬ ТУР</button>
					</div>
				</div>
			</div>
		`;
	}

	connectedCallback() {
		if (!this.rendered) {
			this.render();
			this.rendered = true;
		}
	}
}
customElements.define("promotion-list-item", PromotionListItem);