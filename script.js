var quoteArry = [];
var index = 0;
var textPositon = 0;
var flag = true;
var destination = document.getElementById("typedtext");

window.addEventListener('load', typewriter);

function loadQuote() {
	const url = "https://api.quotable.io/random";

	fetch(url)

		.then(response => {
			if (response.ok)
				return response.json();
			else
				console.log(response.status);
		})

		.then(data => {
			quoteArry[index] = data.content;
		})
}

function typewriter() {
	if (flag) {
		loadQuote();
		quoteArry[index] += ' ';
		flag = false;
	}

	destination.innerHTML = quoteArry[index].substring(0, textPositon) + '<span>\u25AE</span>';

	if (textPositon++ != quoteArry[index].length) {
		setTimeout('typewriter()', 100);
	}
	else {
		quoteArry[index] = ' ';
		setTimeout('typewriter()', 3000);
		textPositon = 0;
		flag = true;
	}
}