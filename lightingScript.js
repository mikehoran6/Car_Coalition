'use strict';

window.onload = init;

//Array of all filters
var filters =  ['led', 'red', 'white', 'blue', 'rgb', 'resist'];
//Create array of booleans parallel to filters to represent if a checkbox is checked
var checks = [];
for (var i = 0; i < filters.length; i++){
	checks.push(false);
}

function init() {
	//Add event listener to all checkboxes and run displayItems() on click
	var checkBoxes = document.getElementsByClassName("cb");
	for (var i = 0; i < checkBoxes.length; i++) {
		checkBoxes[i].onclick = displayItems;
	}
}

function displayItems(e) {
	var checkID = e.target.id;
	//Remove all items from page
	var disp = document.querySelectorAll('figure');
	for (var i = 0; i < disp.length; i++) {
		disp[i].style.display = "none";
	}
	//Change boolean for clicked checkbox, add any checked filters to page and count number of checked filters
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
	//Add all items back to page if no filters are checked
	if (count == 0) {
		for (var i = 0; i < disp.length; i++) {
			disp[i].style.display = "block";
		}
	}
}
