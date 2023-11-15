const displayedCharacters = 140;

function descriptionShowMore() {
	const description = document.querySelector('.description');
	const descriptionContent = description.textContent;

	const truncateString = (string, value) => string.length > value ? string.substring(0, value).trim() + "..." : string;
	description.textContent = `${truncateString(description.textContent, displayedCharacters)}`;
	description.insertAdjacentHTML('beforeend', '&nbsp;<button class="show-more">Показать больше</button>');
	flightList.style.display = 'none';

	const showMore = document.querySelector('.show-more');
	showMore.addEventListener('click', () => {
		description.textContent = descriptionContent;
		flightList.style.display = 'block';
	});
}
descriptionShowMore();