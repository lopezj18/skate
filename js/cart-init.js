// JavaScript Document

onload=init;

function init(){
	updatecart();
	document.getElementById('grip_btn_1').onclick = function(){bluegrip();};
	document.getElementById('grip_btn_2').onclick = function(){greengrip();};
	document.getElementById('grip_btn_3').onclick = function(){redgrip();};
	document.getElementById('wheel_btn_1').onclick = function(){bluewheel();};
	document.getElementById('wheel_btn_2').onclick = function(){greenwheel();};
	document.getElementById('wheel_btn_3').onclick = function(){pinkwheel();};
	document.getElementById('design_btn_1').onclick = function(){obeydesign();};
	document.getElementById('design_btn_2').onclick = function(){pandadesign();};
	document.getElementById('design_btn_3').onclick = function(){zombiedesign();};
	document.getElementById('deck_btn_1').onclick = function(){bluedeck();};
	document.getElementById('deck_btn_2').onclick = function(){greendeck();};
	document.getElementById('deck_btn_3').onclick = function(){reddeck();};
}