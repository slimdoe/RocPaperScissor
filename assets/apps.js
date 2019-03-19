var options = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;

document.onkeyup = function () {
	var userguess = String.fromCharCode(event.keyCode).toLowerCase();


	var computerGuess = options[Math.floor(Math.random() * options.length)];

	if (userguess == "r" || userguess == "p" || userguess == "s") {

		if ((userguess == "r") && (computerGuess == "p")) {
			losses++;

		}
		if ((userguess == "r") && (computerGuess == "s")) {
			wins++;

		}

		if ((userguess == "s") && (computerGuess == "p")) {
			wins++;

		}
		if ((userguess == "s") && (computerGuess == "r")) {
			losses++;

		}
		if ((userguess == "p") && (computerGuess == "s")) {
			losses++;

		}
		if ((userguess == "p") && (computerGuess == "r")) {
			wins++;

		}

		if ((userguess == computerGuess)) {
			ties++;

		}
	}
	else {

	}
	var html = "<p>Press r, p, or s to start playing</p>" +
		"<p>wins: " + wins + "</p>" +
		"<p>losses: " + losses + "</p>" +
		"<p>ties: " + ties + "</p>";
	document.querySelector('#game').innerHTML = html;
}