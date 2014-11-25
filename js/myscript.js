// JavaScript Document


function updatecart(){
	var price1=0;
	var price2=0;
	var price3=0;
	var price4=0;
	
		
if(readCookie('grip name') != null){
	document.getElementById('cart_grip_name').innerHTML=readCookie('grip name');
	document.getElementById('cart_grip_price').innerHTML='$'+readCookie('grip price');
	document.getElementById('cart_grip_img').innerHTML="<img src=\"graphics/"+readCookie('cartgrip')+"\" width=\"100\" height=\"100\">";
	document.getElementById('progress_grip').innerHTML="<img src=\"graphics/"+readCookie('progressgrip')+"\" width=\"268\" height=\"107\">";
	price1= parseFloat(readCookie("grip price"));

	}

 	if(readCookie('deck name') != null){
	document.getElementById("cart_deck_name").innerHTML=readCookie('deck name');
	document.getElementById("cart_deck_price").innerHTML='$'+readCookie('deck price');
	document.getElementById("cart_deck_img").innerHTML="<img src=\"graphics/"+readCookie('cartdeck')+"\" width=\"100\" height=\"24\">";
	document.getElementById("progress_deck").innerHTML="<img src=\"graphics/"+readCookie('progressdeck')+"\" width=\"250\" height=\"107\">";
price2= parseFloat(readCookie("deck price"));
	}
	
	
	if(readCookie('design name') != null){
	document.getElementById("cart_design_name").innerHTML=readCookie('design name');
	document.getElementById("cart_design_price").innerHTML='$'+readCookie('design price');
	document.getElementById("cart_design_img").innerHTML="<img src=\"graphics/"+readCookie('cartdesign')+"\" width=\"100\" height=\"52\">";
   document.getElementById("progress_design").innerHTML="<img src=\"graphics/"+readCookie('progressdesign')+"\" width=\"250\" height=\"107\">";
price3= parseFloat(readCookie("design price"));	
	}

if(readCookie('wheel name') != null){
	document.getElementById("cart_wheel_name").innerHTML=readCookie('wheel name');
	document.getElementById("cart_wheel_price").innerHTML='$'+readCookie('wheel price');
	document.getElementById("cart_wheel_img").innerHTML="<img src=\"graphics/"+readCookie('cartwheel')+"\" width=\"100\" height=\"100\">";
	document.getElementById("progress_wheel").innerHTML="<img src=\"graphics/"+readCookie('progresswheel')+"\" width=\"268\" height=\"107\">";
price4= parseFloat(readCookie("wheel price"));
	}
	
	var total= price1+price2+price3+price4;
	
	document.getElementById("cart_total").innerHTML="$"+(Math.round(total*100)/100);

}