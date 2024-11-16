let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let counter = 0;

let init = document.getElementById("init");
let robot = document.getElementById("robot");
let human = document.getElementById("human");

let ethos = document.getElementById("ethos");
let pathos = document.getElementById("pathos");
let kairos = document.getElementById("kairos");
let final = document.getElementById("final");

button1.addEventListener("click", function () {
	robot.style.visibility = "visible";
	robot.style.opacity = "1";
	robot.style.transform = "translateY(0)";
	button1.style.display = "none";
	counter++;
	if (counter == 3) playAnimation();
});

button2.addEventListener("click", function () {
	human.style.visibility = "visible";
	human.style.opacity = "1";
	human.style.transform = "translateY(0)";
	button2.style.display = "none";
	counter++;
	if (counter == 3) playAnimation();
});

button3.addEventListener("click", function () {
	init.style.visibility = "visible";
	init.style.opacity = "1";
	init.style.transform = "translateY(0)";
	init.style.order = "1";
	button3.style.display = "none";
	counter++;
});

function playAnimation() {
	setTimeout(() => {
		ethos.style.visibility = "visible";
		ethos.style.opacity = "1";
		ethos.style.transform = "translateY(0)";
	}, 2000);
	setTimeout(() => {
		pathos.style.visibility = "visible";
		pathos.style.opacity = "1";
		pathos.style.transform = "translateY(0)";
	}, 4000);
	setTimeout(() => {
		kairos.style.visibility = "visible";
		kairos.style.opacity = "1";
		kairos.style.transform = "translateY(0)";
	}, 6000);
	setTimeout(() => {
		final.style.visibility = "visible";
		final.style.opacity = "1";
		final.style.transform = "translateY(0)";
		final.style.display = "block";
	}, 8000);
}