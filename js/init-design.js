// JavaScript Document
onload=init;

function init(){
	updatecart();
	document.getElementById('design_btn_1').onclick = function(){obeydesign();};
	document.getElementById('design_btn_2').onclick = function(){pandadesign();};
	document.getElementById('design_btn_3').onclick = function(){zombiedesign();};
}
function obeydesign(){
	createCookie('design name','Obey Design',0);
	createCookie('design price','5.99',0);
	createCookie('cartdesign','obey_design.png',0);
	createCookie('progressdesign','obey_design_on.png',0);
	updatecart();
}

function pandadesign(){
	createCookie('design name','Panda Design',0);
	createCookie('design price','6.49',0);
	createCookie('cartdesign','panda_design.png',0);
	createCookie('progressdesign','panda_design_on.png',0);
	updatecart();
}

function zombiedesign(){
	createCookie('design name','Zombie Design',0);
	createCookie('design price','4.99',0);
	createCookie('cartdesign','zombie_design.png',0);
	createCookie('progressdesign','zombie_design_on.png',0);
	updatecart();
}

