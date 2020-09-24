'use strict';

window.onload = init;

var filters =  ['led', 'red', 'white', 'blue', 'rgb', 'resist'];
var checks = [];
for (var i = 0; i < filters.length; i++){
	checks.push(false);
}

function init() {
	var checkBoxes = document.getElementsByClassName("cb");
	for (var i = 0; i < checkBoxes.length; i++) {
		checkBoxes[i].onclick = displayItems;
	}
}

function displayItems(e) {
	var checkID = e.target.id;
	var disp = document.querySelectorAll('figure');
	for (var i = 0; i < disp.length; i++) {
		disp[i].style.display = "none";
	}
	var count = 0;
	for (var i = 0; i < checks.length; i++) {
		if (checkID == filters[i]) {
			checks[i] = !checks[i];
		}
		var show = document.querySelectorAll('figure.' + filters[i]);
		if (checks[i] == true) {
			for (var x = 0; x < show.length; x++) {
				show[x].style.display = "block";
			}
			count++;
		}
	}
	if (count == 0) {
		for (var i = 0; i < disp.length; i++) {
			disp[i].style.display = "block";
		}
	}
}
