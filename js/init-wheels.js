onload=init;

var btn = document.getElementById('btn');

//btn.onclick = function () {
   

function init(){
	updatecart();
	document.getElementById('wheel_btn_1').onclick = function(){bluewheel();};
	document.getElementById('wheel_btn_2').onclick = function(){greenwheel();};
	document.getElementById('wheel_btn_3').onclick = function(){pinkwheel();};
}


function bluewheel(){
	createCookie('wheel name','Blue Wheels',0);
	createCookie('wheel price','15.49',0);
	createCookie('cartwheel','blue_wheels.png',0);
	createCookie('progresswheel','blue_wheels_on.png',0);
	updatecart();
}

function greenwheel(){
	createCookie('wheel name','Red Wheels',0);
	createCookie('wheel price','12.99',0);
	createCookie('cartwheel','red_wheels.png',0);
	createCookie('progresswheel','red_wheels_on.png',0);
	updatecart();
}

function pinkwheel(){
	createCookie('wheel name','Pink Wheels',0);
	createCookie('wheel price','10.95',0);
	createCookie('cartwheel','pink_wheels.png',0);
	createCookie('progresswheel','pink_wheels_on.png',0);
	updatecart();
}