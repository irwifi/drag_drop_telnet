$(document).ready(function(){


	// Navigation Menus

	// HIDE RIGHT MENUS FROM START
	$('.rightmenu-hidden').hide();


	// Left slick slider menu 
	$(".leftslider").slick({
        // dots: true,
        infinite: false,
        // centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        swipe: true,
        dragging: true,
        prevArrow: $('#leftnavup'),
		nextArrow: $('#leftnavdown')
      });

	// Right slick slider menu
	$(".rightslider").slick({
        // dots: true,
        infinite: false,
        // centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        swipe: true,
        dragging: true,
        prevArrow: $('#rightnavup'),
		nextArrow: $('#rightnavdown')
      });

	// $('.servicesIconTrigger img').click(function(e){
		
	// 	alert('test');
	// });


	// Show Right menu if service icon is clicked
	$('.servicesIconTrigger').click(function(){
		// show this menu
		$( "#rightnavup" ).trigger( "click" );
		$('.rightmenu-hidden').show();

		// hide these menus
		//$('#forside, #events, #nordic, #results, #other, #contact').hide();
	});

	// show dialog box if andet icon is clicked 
	$('.andetIconTrigger').click(function(){
		
  		//display dialog
  		// $('#dialog').dialog();
  		$('#dialog').attr('title', 'Andet')
  			.text("This is some text")
  			.html('<input type="text" placeholder="Navn" />')
  			.dialog({
  				buttons: { 'Anuller': function(){
  					$(this).dialog('close');
  				}, 'Tilføj': function(){alert("Der opstod en fejl, prøv igen eller kontakt en administrator");
          			$(this).dialog('close');
  			}}, closeOnEscape: true,
  				draggable: false,
  				resizable: false,
  				show: 'fade',
          hide: 'fade',
  				modal: true,  // you can't click anywhere else before you close the modal box
  				//position: 'top', // center is default // you can also pass it an array [100, 100] which is x and y
		        dialogClass: 'sendMailDialog',
		        width: 490,
		        height: 305
  		});
  	
	});

	// Right slick slider menu 

	// http://stackoverflow.com/questions/29522309/jquery-ui-draggable-inside-slick-slider
	// Without this, you can't drag the icons from the menu
	// For that to work you need to unbind the dragstart event registered by slick slider
	// like followed, before binding the draggble to element
	$(function() {
    	$('*[draggable!=true]','.slick-track').unbind('dragstart');
    	$( ".serviceIcon img" ).draggable();
	  });

	$(".serviceIcon img").on("draggable mouseenter mousedown",function(event){
	    event.stopPropagation();
	});


	


	// --------------------------------------------------------------------------------------


	// CIRCLE CONTENT

	function addPerson(){
		// Check the attribute if it's child or parrent
		var person = $(this).attr('id');

		var inputField = $('#nameField').val();
		// Validate input field before adding persion
		inputField = $.trim(inputField);
		if(inputField == '' ) {
            	return alert("Udfyld venligst navn feltet");
      		}
      	// if the text is there 
      	var personWrapper = $('<div class="personWrapper"></div>');
      	var para = $('</p>');

      	para = para.append(inputField);

      	var img = $('<img class="personIcon" src="img/' + person + 'icon.png">');
		personWrapper = personWrapper.append(img);

  		personWrapper = personWrapper.append(para);

		personWrapper
		.css({
		position: "absolute", 
		left: 190, 
		top: 150,
		'text-align': 'center',
		color: 'lightgray',
		'z-index': 99999 })
		.draggable({ 
      		grid:[10,10],
      		containment: 'window',
			stack: ".personWrapper"
      	});
		

		$(".circle").append(personWrapper);

		$('#nameField').val('');
	}
	// RUN the addPerson function when one of the buttons is clicked
	$("#parrent").click(addPerson);
	$("#child").click(addPerson);

	$('.personIcon img').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		alert("yes it works now");
	});
	//Service icons dragable
	// Draggable element hidden outside container ->http://stackoverflow.com/questions/14155503/draggable-element-hidden-outside-container
	$('.serviceIcon img').draggable({ 
		opacity: 0.60,
		// revert: true,
		containment: 'window', // window // parrent
		// appendTo:'.circle',
		helper: function() {
            return $(this).clone().appendTo('.circle')
        },
		start: function(){
			// $('.circle .content').text('Dragging started');

		},
		drag: function(){
			// set highlight here
		},
		stop: function(){
			
		}
	});
	
	

	// DROPPABLE CIRCLE AREA
	$('.circle').droppable({
		drop: function(event, ui) {
    		 if (!ui.draggable.hasClass("dropped"))
             $(this).append(
             	$(ui.draggable)
             	.clone()
             	.addClass("dropped")
             	.draggable()
             );
  		},
  		accept: 'img'


			
		
		// hoverClass: 'classFromYourCSS', // when you hover over this element it will add this class
		// tolerance: 'pointer', // fit // pointer // touch
		// appect: '', // this tell the div what to accept dropped inside of it // like ".name"
		// over: function(){
		// 	$('#drop').text('Something has hovered over me');
		// },
		// out: function(){
		// 	$('#drop').text('Something has been dragget out of me');
		// },
		// drop: function(){
		// 	$('#drop').text('Something was dropped inside of me!');
		// }

	});





	// FOOTER AREA

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


	// SOLUTION 2
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




}); // ready



