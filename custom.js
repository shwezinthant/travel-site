function budgetPrice(){
	document.getElementById('price').innerHTML=" 300000 Ks";
	$('.budget').css('background-color','#dc3545');
	$('.hight').css('background-color','white');
	$('.mid').css('background-color','white');
}
function midPrice(){
	document.getElementById('price').innerHTML=" 500000 Ks";
	$('.budget').css('background-color','white');
	$('.hight').css('background-color','white');
	$('.mid').css('background-color','#dc3545');
	
}
function hightPrice(){
	document.getElementById('price').innerHTML=" 700000 Ks";
	$('.budget').css('background-color','white');
	$('.hight').css('background-color','#dc3545');
	$('.mid').css('background-color','white');
}
function imgreview(){
	document.getElementById('review').innerHTML='Review';
}
function imgreviewhide(){
	document.getElementById('review').innerHTML=' ';
}
$(document).ready(function(){
		$("#servicetitle").click(function(){
			$("#servicetitle").css("color", "#17a2b8");
			$("#descriptionTitle").css("color", "#051c0b");
			$("#description").html('<div class="liststylecolor align-content-center"><ul style="list-style:none"><li>Ferry to the start</li><li>The best service for the trip</li><li>A Guide to explain the culture</li><li>The hotel(The best service for Hight-class)</li><li>Ferry to the start</li><li>Ferry to the start</li></ul></div>');
		})
		$("#descriptionTitle").click(function(){
			$("#descriptionTitle").css("color", "#17a2b8");
			$("#servicetitle").css("color", "#051c0b");
			$("#description").html('<p>&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;Shan state is one of the interesting state in Myanmar because of the natural culture and the beautiful places Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimr in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Shan state is one of the interesting state in Myanmar because of the natural culture and the beautiful places Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimr in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>');
		});
		$("#searchDuration").click(function(){
			$("#resultDuration").html('<div	class="row"><div class="col-md-6 col-lg-4 "><div class="card mb-2"><img onmouseover="imgreview()" onmouseout="imgreviewhide()" class="card-img-top imgreview" src="images/img.webp"alt="Card image cap"><a href="review.html"><p id="review" onmouseover="imgreview()"></p></a> <div class="card-body"><h4 class="card-title">Shan State - Inn Lay trip</h4><p class="card-text">Shan state is one of the interesting state in Myanmar because of the natural culture and the beautiful places....</p><i class="fas fa-clock mb-2" style="color: #dc3545"><span style="color: #333333"> 3nights-4days</span></i><br><i class="fas fa-dollar-sign mb-2 pr-2"  style="color: #dc3545"> <span style="color: #333333;" id="price" > Choose type</span></i><br><a class="btn  btn-outline-danger" style="width: 32%;" onclick="budgetPrice()">Budget</a><a class="btn btn-outline-danger" style="width: 32%" onclick="midPrice()">Mid</a><a class="btn btn-outline-danger " style="width: 32%" onclick="hightPrice()">Hight</a><br><a class="btn btn-outline-info btn-block my-2">Booking Now</a></div></div></div><div class="col-md-6 col-lg-4 "><div class="card mb-2"><img onmouseover="imgreview()" onmouseout="imgreviewhide()" class="card-img-top imgreview" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"alt="Card image cap"><a href="review.html"><p id="review" onmouseover="imgreview()"></p></a> <div class="card-body"><h4 class="card-title">Shan State - Inn Lay trip</h4><p class="card-text">Shan state is one of the interesting state in Myanmar because of the natural culture and the beautiful places....</p><i class="fas fa-clock mb-2" style="color: #dc3545"><span style="color: #333333"> 3nights-4days</span></i><br><i class="fas fa-dollar-sign mb-2 pr-2"  style="color: #dc3545"> <span style="color: #333333;" id="price" > Choose type</span></i><br><a class="btn  btn-outline-danger" style="width: 32%;" onclick="budgetPrice()">Budget</a><a class="btn btn-outline-danger" style="width: 32%" onclick="midPrice()">Mid</a><a class="btn btn-outline-danger " style="width: 32%" onclick="hightPrice()">Hight</a><br><a class="btn btn-outline-info btn-block my-2">Booking Now</a></div></div></div><div class="col-md-6 col-lg-4 "><div class="card mb-2"><img onmouseover="imgreview()" onmouseout="imgreviewhide()" class="card-img-top imgreview" src="images/img11.jpg"alt="Card image cap"><a href="review.html"><p id="review" onmouseover="imgreview()"></p></a> <div class="card-body"><h4 class="card-title">Shan State - Inn Lay trip</h4><p class="card-text">Shan state is one of the interesting state in Myanmar because of the natural culture and the beautiful places....</p><i class="fas fa-clock mb-2" style="color: #dc3545"><span style="color: #333333"> 3nights-4days</span></i><br><i class="fas fa-dollar-sign mb-2 pr-2"  style="color: #dc3545"> <span style="color: #333333;" id="price" > Choose type</span></i><br><a class="btn  btn-outline-danger" style="width: 32%;" onclick="budgetPrice()">Budget</a><a class="btn btn-outline-danger" style="width: 32%" onclick="midPrice()">Mid</a><a class="btn btn-outline-danger " style="width: 32%" onclick="hightPrice()">Hight</a><br><a class="btn btn-outline-info btn-block my-2">Booking Now</a></div></div></div></div>');
		});
		$("#sendOrder").click(function(){
			$("#willcontact").html("We will contact to you within an hour!");
		})
		$("#badget").click(function(){
			$("#badget").css("color", "#17a2b8");
			$("#midRange").css("color", "#051c0b");
			$("#hightClass").css("color", "#051c0b");
			
			$("#showService").html('<div class="row"><ul class="liststylecolor col-lg-6 f18 pl-md-5" style="list-style: none;"><li class="mb-1">free access to our private beach with sun beds</li><li class="mb-1">central safe at the reception</li><li class="mb-1">free Wi-Fi internet access in the lobby area</li><li class="mb-1">faxing service</li><li class="mb-1">bar / café at the lobby</li><li class="mb-1">free breakfast .Breakfast is buffet one.</li><li class="mb-1">daily cleaning chambermaids of your cleaning request.</li><li class="mb-1">all our rooms have a balcony</li></ul><div class="col-lg-6 col-md-6 py-lg-4 my-sm-2"><img src="images/badget1.jpg" class="img-fluid rounded"></div><div class="col-lg-4 col-md-6 py-1 my-sm-2"><img src="images/badget2.jpg" class="img-fluid rounded"></div><div class="col-lg-4 col-md-6 py-1 my-sm-2"><img src="images/badget3.jpg" class="img-fluid rounded"></div><div class="col-lg-4 col-md-6 py-1 my-sm-2"><img src="images/badget4.jpg" class="w-100 rounded"></div></div>');
		});
		$("#midRange").click(function(){
			$("#badget").css("color", "#051c0b");
			$("#midRange").css("color", "#17a2b8");
			$("#hightClass").css("color", "#051c0b");
			
			$("#showService").html('<div class="row"><ul class="liststylecolor col-lg-6 f18 pl-md-5" style="list-style: none;"><li class="mb-1">free access to our private beach with sun beds</li><li class="mb-1">central safe at the reception</li><li class="mb-1">free Wi-Fi internet access in the lobby area</li><li class="mb-1">faxing service</li><li class="mb-1">bar / café at the lobby</li><li class="mb-1">free breakfast .Breakfast is buffet one.</li><li class="mb-1">daily cleaning chambermaids of your cleaning request.</li><li class="mb-1">all our rooms have a balcony</li><li class="mb-1">all our rooms have a balcony</li><li class="mb-1">charges apply for minigolf, biliard, darts, mini soccer, air hockey</li><li class="mb-1">storage for bicycles and motorcycles in the garden of the hotel</li></ul><div class="col-lg-6 col-md-6 py-lg-4 my-sm-2"><img src="images/mid1.jpg" class="img-fluid rounded"></div><div class="col-lg-4 col-md-6 py-1 my-sm-2"><img src="images/mid2.jpg" class="img-fluid rounded"></div><div class="col-lg-4 col-md-6 py-1 my-sm-2"><img src="images/mid3.jpg" class="img-fluid rounded"></div><div class="col-lg-4 col-md-6 py-1 my-sm-2"><img src="images/mid3.webp" class="w-100 rounded"></div></div>');
		});
		$("#hightClass").click(function(){
			$("#badget").css("color", "#051c0b");
			$("#midRange").css("color", "#051c0b");
			$("#hightClass").css("color", "#17a2b8");
			
			$("#showService").html('<div class="row"><ul class="liststylecolor col-lg-6 f18 pl-md-5" style="list-style: none;"><li class="mb-1">free access to our private beach with sun beds</li><li class="mb-1">central safe at the reception</li><li class="mb-1">free Wi-Fi internet access in the lobby area</li><li class="mb-1">faxing service</li><li class="mb-1">bar / café at the lobby</li><li class="mb-1">free breakfast .Breakfast is buffet one.</li><li class="mb-1">daily cleaning chambermaids of your cleaning request.</li><li class="mb-1">all our rooms have a balcony</li><li class="mb-1">all our rooms have a balcony</li><li class="mb-1">charges apply for minigolf, biliard, darts, mini soccer, air hockey</li><li class="mb-1">storage for bicycles and motorcycles in the garden of the hotel</li></ul><div class="col-lg-6 col-md-6 py-lg-4 my-sm-2"><img src="images/hight1.jpg" class="img-fluid rounded"></div><div class="col-lg-4 col-md-6 py-1 my-sm-2"><img src="images/hight2.jpg" class="img-fluid rounded"></div><div class="col-lg-4 col-md-6 py-1 my-sm-2"><img src="images/hight3.jpg" class="img-fluid rounded"></div><div class="col-lg-4 col-md-6 py-1 my-sm-2"><img src="images/hight4.jpg" class="w-100 rounded"></div></div>');
				});

	});




	

