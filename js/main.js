$(document).ready(function(){

	// CURRENT SOLUTION
	$("#arrow1").click(function() {
	  	$('.currentprice').toggle('slide', {direction: 'down'});
	  	var src = $('#arrow1').attr('src');
	  	

	  	// if the arrow of the event is pointing up change it to down and opposite
	  	 var src = ($("#arrow1").attr('src') === 'img/uparrow.jpg')
            ? 'img/downarrow.jpg'
            : 'img/uparrow.jpg';
         $("#arrow1").attr('src', src);
	});


	// SOLUTION 1
	$("#arrow2").click(function() {
	  	$('.price-solution1').toggle('slide', {direction: 'down'});
	  	var src = $('#arrow2').attr('src');

	  	// if the arrow of the event is pointing up change it to down and opposite
	  	 var src = ($("#arrow2").attr('src') === 'img/uparrow.jpg')
            ? 'img/downarrow.jpg'
            : 'img/uparrow.jpg';
         $("#arrow2").attr('src', src);
	});


	// SOLUTION 1
	$("#arrow3").click(function() {
	  	$('.price-solution2').toggle('slide', {direction: 'down'});
	  	var src = $('#arrow3').attr('src');
	  	

	  	// if the arrow of the event is pointing up change it to down and opposite
	  	 var src = ($("#arrow3").attr('src') === 'img/uparrow.jpg')
            ? 'img/downarrow.jpg'
            : 'img/uparrow.jpg';
         $("#arrow3").attr('src', src);
	});


	// Settingsbox
	$("#settingsBtn").click(function() {
	  	$('.SettingsBox').toggle('slide', {direction: 'down'});
	});

	// $(".servicesBtn").click(function() {
	//   	$('.services-menu').toggle('slide', {direction: 'down'});

	// });

	$(".slider").slick({
        // dots: true,
        infinite: false,
        // centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        prevArrow: $('#navup'),
		nextArrow: $('#navdown')
      });

}); // ready



