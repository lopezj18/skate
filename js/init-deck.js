// JavaScript Document
onload=init;

function init(){
	updatecart();
	document.getElementById('deck_btn_1').onclick = function(){bluedeck();};
	document.getElementById('deck_btn_2').onclick = function(){greendeck();};
	document.getElementById('deck_btn_3').onclick = function(){reddeck();};
}
function bluedeck(){
	createCookie('deck name','Blue Deck',0);
	createCookie('deck price','25.99',0);
	createCookie('cartdeck','blue_deck_cart.png',0);
	createCookie('progressdeck','blue_deck_on.png',0);
	updatecart();
}

function greendeck(){
	createCookie('deck name','Yellow Deck',0);
	createCookie('deck price','34.49',0);
	createCookie('cartdeck','yellow_deck_cart.png',0);
	createCookie('progressdeck','yellow_deck_on.png',0);
	updatecart();
}

function reddeck(){
	createCookie('deck name','Red Deck',0);
	createCookie('deck price','30.99',0);
	createCookie('cartdeck','red_deck_cart.png',0);
	createCookie('progressdeck','red_deck_on.png',0);
	updatecart();
}

