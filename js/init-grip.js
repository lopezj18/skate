// JavaScript Document
onload=init;

function init(){
	updatecart();
	document.getElementById('grip_btn_1').onclick = function(){bluegrip();};
	document.getElementById('grip_btn_2').onclick = function(){greengrip();};
	document.getElementById('grip_btn_3').onclick = function(){redgrip();};
}
function bluegrip(){
	createCookie('grip name','Blue Grip Tape',0);
	createCookie('grip price','5.99',0);
	createCookie('cartgrip','blue_cart_grip.png',0);
	createCookie('progressgrip','blue_grip_on.png',0);
	updatecart();
}

function greengrip(){
	createCookie('grip name','Green Grip Tape',0);
	createCookie('grip price','6.49',0);
	createCookie('cartgrip','green_cart_grip.png',0);
	createCookie('progressgrip','green_grip_on.png',0);
	updatecart();
}

function redgrip(){
	createCookie('grip name','Red Grip Tape',0);
	createCookie('grip price','4.99',0);
	createCookie('cartgrip','red_cart_grip.png',0);
	createCookie('progressgrip','red_grip_on.png',0);
	updatecart();
}

