$( document ).ready(function() {
	
	$( "#District" ).change(function() {
		var idDistrict = $( "#District" ).val();
		$.ajax({
			url: "/ajaxPlanoBDispatcher.php?o=getCounties&id="+idDistrict,
			cache: false
		}).done(function( html ) {
			$( "#County option" ).remove();
			$( "#County" ).append(html);
		});
	});
	
	$( "#County" ).change(function() {
		var idCounty = $( "#County" ).val();
		$.ajax({
			url: "/ajaxPlanoBDispatcher.php?o=getParish&id="+idCounty,
			cache: false
		}).done(function( html ) {
			$( "#Parish option" ).remove();
			$( "#Parish" ).append(html);
		});
	});
	
	$( "#radio-content-buy" ).click(function() {
		console.log('buy');
		$('#gsearch-radio-content-rent').removeClass('active');
		$('#gsearch-radio-content-buy').addClass('active');
		var idBusinessType = $( "#radio-content-buy" ).val();
		$.ajax({
			url: "/ajaxPlanoBDispatcher.php?o=getPriceMin&id="+idBusinessType,
			cache: false
		}).done(function( html ) {
			console.log('min');
			$( "#PriceMin option" ).remove();
			$( "#PriceMin" ).append(html);
		});
		$.ajax({
			url: "/ajaxPlanoBDispatcher.php?o=getPriceMax&id="+idBusinessType,
			cache: false
		}).done(function( html ) {
			console.log('max');
			$( "#PriceMax option" ).remove();
			$( "#PriceMax" ).append(html);
		});
	});
	
	$( "#radio-content-rent" ).click(function() {
		console.log('rent');
		$('#gsearch-radio-content-buy').removeClass('active');
		$('#gsearch-radio-content-rent').addClass('active');
		var idBusinessType = $( "#radio-content-rent" ).val();
		$.ajax({
			url: "/ajaxPlanoBDispatcher.php?o=getPriceMin&id="+idBusinessType,
			cache: false
		}).done(function( html ) {
			console.log(html);
			$( "#PriceMin option" ).remove();
			$( "#PriceMin" ).append(html);
		});
		$.ajax({
			url: "/ajaxPlanoBDispatcher.php?o=getPriceMax&id="+idBusinessType,
			cache: false
		}).done(function( html ) {
			console.log('max');
			$( "#PriceMax option" ).remove();
			$( "#PriceMax" ).append(html);
		});
	});
	
	$('#gsearchform').submit(function( event ) {
		if ($('#Reference').val().length>8 && $('#Reference').val()!=""){
			event.preventDefault();
			getPropertyByReference($('#Reference').val());
		}
	});

});

function getPropertyByReference(inReference){
	var jsonUrl='/ajaxPlanoBDispatcher.php?o=searchByReference&property_reference='+inReference;
	console.log(jsonUrl);
	$.getJSON(
		jsonUrl,
		function(json) {
			console.log(json);
			if (json.code=="1"){
				window.location.href=json.url;
			}
			else{
				alert("Referência inválida");
			}
		}
	);
}