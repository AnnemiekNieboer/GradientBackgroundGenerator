var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColorButton = document.getElementById("randomColor");



function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	getGradientText();	
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function getNewGradient() {
	var c1 = '#'+Math.random().toString(16).substr(-6);
	var c2 = '#'+Math.random().toString(16).substr(-6);
	color1.value = c1;
	color2.value = c2;
	body.style.background = "linear-gradient(to right, " 
	+ c1
	+ ", " 
	+ c2
	+ ")";
	getGradientText();
}

function getGradientText() {
	css.textContent = body.style.background + ";";
}

randomColorButton.addEventListener("click", getNewGradient);