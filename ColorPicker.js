var colorsTest = [];
var squares = document.querySelectorAll(".square");
var button = document.querySelector("#reset");
var Easybutton = document.querySelector("#easy");
var Hardbutton = document.querySelector("#hard");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");


Easybutton.addEventListener("click", function() {
	Easybutton.classList.add("selected");
	Hardbutton.classList.remove("selected");
	messageDisplay.textContent = "";
	generateEasyColors();
});

Hardbutton.addEventListener("click", function() {
	Hardbutton.classList.add("selected");
	Easybutton.classList.remove("selected");
	messageDisplay.textContent = "";

	generateColors(6);
	pickedColor = pickColor(6);
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colorsTest[i];
		squares[i].style.display = "block";
	}
});

button.addEventListener("click", function() {
	resetGame();
});

function generateHardColors() {
	generateColors(6);
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colorsTest[i];
	}
	pickedColor = pickColor(6);
	colorDisplay.textContent = pickedColor;
}

function generateEasyColors() {
	colorsTest = [];
	generateColors(3);
	pickedColor = pickColor(3);
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++) {
		if(colorsTest[i]) {
			squares[i].style.background = colorsTest[i];
		}

		else {
			squares[i].style.display = "none";
		}
	}
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	var rgbString = "rgb(" + red + ", " + green + ", " + blue + ")";
	return rgbString;
}

function generateColors(colors) {
	for(var i = 0; i < colors; i++) {
		colorsTest[i] = randomColor();
	}
}

function pickColor(options) {
	return colorsTest[Math.floor(Math.random() * options)];
}

generateColors(6);
pickedColor = pickColor(6);
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colorsTest[i];
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			correctColors();
			h1.style.background = pickedColor;
			button.textContent = "Play again?"
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function correctColors() {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = pickedColor;
	}
}

function resetGame() {
	messageDisplay.textContent = "";
	button.textContent = "New Colors";
	h1.style.background = "steelblue";

	if(Easybutton.classList == "selected") {
		generateEasyColors();
	}

	else {
		generateHardColors();
	}
}
