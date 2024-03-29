chrome.runtime.sendMessage({ action: 'get-count' }, (count) => {
	render({ count });
});

const title = document.querySelector('h1');
function render({ count }) {
	title.innerText = `Lines of Code: ${count}`;
}

chrome.storage.onChanged.addListener(({ counter }) => {
	if (counter) {
		render({ count: counter.newValue });
	}
});
