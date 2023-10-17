document.addEventListener("DOMContentLoaded", ()=> {
	function promotionExpiried() {
		const promotions = document.querySelectorAll('[promotion-end]');
		let today = new Date().toLocaleTimeString();
		const dayJs = dayjs();
		console.log(dayJs.duration().asMonths());
		promotions.forEach(promotion => {
			if (today === promotion.getAttribute('promotion-end')) {
				console.log('время вышло');
			}
		});
	}
	promotionExpiried();
});