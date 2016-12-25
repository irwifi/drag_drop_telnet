$(document).ready(function(){

	$("#arrow").click(function() {
	  	$('.price-menu').toggle('slide', {direction: 'down'});
	  	var src = $('#arrow').attr('src');
	  	

	  	// if the arrow of the event is pointing up change it to down and opposite
	  	 var src = ($("#arrow").attr('src') === 'img/uparrow.jpg')
            ? 'img/downarrow.jpg'
            : 'img/uparrow.jpg';
         $("#arrow").attr('src', src);
    	

	});

	// $(".servicesBtn").click(function() {
	//   	$('.services-menu').toggle('slide', {direction: 'down'});

	// });

}); // ready



