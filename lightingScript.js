'use strict';

window.onload = init;

// ledCheck, redCheck, whiteCheck, blueCheck, rgbCheck, resistCheck
var checks = [false,false,false,false,false,false];

function init() {
	var checkBoxes = document.getElementsByClassName("cb");
	for (var i = 0; i < checkBoxes.length; i++) {
		checkBoxes[i].onclick = displayItems;
	}
}

function displayItems(e) {
	var checkID = e.target.id;
	console.log(checkID);
	var disp = document.querySelectorAll('figure');
	for (var i = 0; i < disp.length; i++) {
		disp[i].style.display = "none";
	}
	switch (checkID) {
	case "led":
		checks[0] = !checks[0];
		break;
	case "red":
		checks[1] = !checks[1];
		break;
	case "white":
		checks[2] = !checks[2];
		break;
	case "blue":
		checks[3] = !checks[3];
		break;
	case "rgb":
		checks[4] = !checks[4];
		break;
	case "resist":
		checks[5] = !checks[5];
	}

	if (checks[0] == true) {
		var led = document.querySelectorAll('figure.led');
		for (var i = 0; i < led.length; i++) {
			led[i].style.display = "block";
		}
	}
	if (checks[1] == true) {
		var red = document.querySelectorAll('figure.red');
		for (var i = 0; i < red.length; i++) {
			red[i].style.display = "block";
		}
	}
	if (checks[2] == true) {
		var white = document.querySelectorAll('figure.white');
		for (var i = 0; i < white.length; i++) {
			white[i].style.display = "block";
		}
	}
	if (checks[3] == true) {
		var blue = document.querySelectorAll('figure.blue');
		for (var i = 0; i < blue.length; i++) {
			blue[i].style.display = "block";
		}
	}
	if (checks[4] == true) {
		var rgb = document.querySelectorAll('figure.rgb');
		for (var i = 0; i < rgb.length; i++) {
			rgb[i].style.display = "block";
		}
	}
	if (checks[5] == true) {
		var resist = document.querySelectorAll('figure.resist');
		for (var i = 0; i < resist.length; i++) {
			resist[i].style.display = "block";
		}
	}
	var count = 0;
	for (var i = 0; i < checks.length; i++) {
		if (checks[i] == true) {
			count++;
		}
	}
	if (count == 0) {
		for (var i = 0; i < disp.length; i++) {
			disp[i].style.display = "block";
		}
	}
}
