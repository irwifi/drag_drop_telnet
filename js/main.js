$(document).ready(function(){
	// get the screensize
	// alert("Width: " +screen.width);
	// alert("Height: " +screen.height);
	
	;
	//CURRENT PRICE DATA

	var currentMenu = [
		//mobilabonement
		{
			'slug': 'mobilabonement',
			'name': 'Mobil abonnement',
			'icon': 'img/mobil_ab.png',
			'price': 0,
			'html':'<div class="myservice"><span class="servicename mobilabonement">Mobil abonnement</span><div class="serviceprice"><input type="text" placeholder="0"> kr.</div></div>',
		},
		{
			'slug': 'shop_4everything',
			'name': '4EVERYTHING premium',
			'icon': 'img/mobilab_100gb.png',
			'price': 399,
			'html':'100 GB, Fri tale og sms/mms, Roam Like Home Norden og Baltikum, Telia Upgrade, Telia Tirsdag'
		},
		{
			'slug': 'shop_4everythinglight',
			'name': '4EVERYTHING Light',
			'icon': 'img/mobilab_50gb.png',
			'price': 299,
			'html':'50 GB, Fri tale og sms/mms, Roam Like Home Norden og Baltikum, Telia Upgrade, Telia Tirsdag'
		},
		{
			'slug': 'shop_4sure',
			'name': '4SURE Premium',
			'icon': 'img/mobilab_15gb.png',
			'price': 199,
			'html':'15 GB, Fri tale og sms/mms, Roam Like Home Norden og Baltikum, Telia Tirsdag'
		},
		{
			'slug': 'shop_4fun',
			'name': '4FUN',
			'icon': 'img/mobilab_8gb.png',
			'price': 149,
			'html':'8 GB, Fri tale og sms/mms, Roam Like Home Norden og Baltikum, Telia Tirsdag'
		},
		{
			'slug': 'shop_ex199',
			'name': 'Ekstra bruger 199',
			'icon': 'img/html24.png',
			'price': 199,
			'html':'Deler GB, Fri tale og sms/mms, Roam Like Home Norden og Baltikum, Telia Upgrade, Telia Tirsdag'
		},
		{
			'slug': 'shop_ex149',
			'name': 'Ekstra bruger 149',
			'icon': 'img/html24.png',
			'price': 149,
			'html':'Deler GB, Fri tale og sms/mms, Roam Like Home Norden og Baltikum, Telia Tirsdag'
		},
		{
			'slug': 'shop_ex99',
			'name': 'Ekstra bruger',
			'icon': 'img/html24.png',
			'price': 99,
			'html':'Deler GB, Fri tale og sms/mms, Roam Like Home Norden og Baltikum, Telia Tirsdag'
		},
		{
			'slug': 'shop_exjunior',
			'name': 'Junior',
			'icon': 'img/html24.png',
			'price': 69,
			'html':'1 GB, 1 times tale, Fri sms/mms, Tryghedspakke, Telia Tirsdag'
		},
		//mobilbredbånd

		{
			'slug': 'mobilbred',
			'name': 'Mobil bredbånd',
			'icon': 'img/mobil_bred.png',
			'price': 0, 
			'html':'<div class="myservice"><span class="servicename mobilbred">Mobil bredbånd</span><div class="serviceprice"><input type="text" placeholder="0"> kr.</div></div>'
		},
		{
			'slug': 'shop_4lifepremplus',
			'name': '4LIFE Premium Plus',
			'icon': 'img/mobil_bred_500gb.png',
			'price': 399,
			'html':'500 GB, Roam Like Home Norden og Baltikum'
		},
		{
			'slug': 'shop_4lifeprem',
			'name': '4LIFE Premium',
			'icon': 'img/mobil_bred_100gb.png',
			'price': 299,
			'html':'100 GB, Roam Like Home Norden og Baltikum'
		},
		{
			'slug': 'shop_4lifefull',
			'name': '4LIFE Full',
			'icon': 'img/mobil_bred_30gb.png',
			'price': 199,
			'html':'30 GB, Roam Like Home Norden og Baltikum'
		},
		{
			'slug': 'shop_4lifelight',
			'name': '4LIFE Light',
			'icon': 'img/mobil_bred_5gb.png',
			'price': 199,
			'html':'5 GB, Roam Like Home Norden og Baltikum'
		},

		//Bredbånd
		{
			'slug': 'bredband',
			'name': 'Bredbånd',
			'icon': 'img/html24.png',
			'price': 0, 
			'html':'<div class="myservice"><span class="servicename bredband">Bredbånd</span><div class="serviceprice"><input type="text" placeholder="0"> kr.</div></div>'
		},
		{
			'slug': 'shop_50mbitbredband',
			'name': '50 Mbit Bredbånd',
			'icon': 'img/bredband_50mbit.png',
			'price': 329, 
			'html':'Op til 50 Mbit download (min. 40 Mbit), 10 Mbit upload'
		},
		{
			'slug': 'shop_30mbitbredband',
			'name': '30 Mbit Bredbånd',
			'icon': 'img/bredband_30mbit.png',
			'price': 279, 
			'html':'Op til 30 Mbit download (min. 20 Mbit), 10 Mbit upload'
		},
		{
			'slug': 'shop_20mbitbredband',
			'name': '20 Mbit Bredbånd',
			'icon': 'img/bredband_20mbit.png',
			'price': 249, 
			'html':'Op til 20 Mbit download (min. 15 Mbit), 10 Mbit upload'
		},
		{
			'slug': 'shop_Surfwave',
			'name': 'Surfwave',
			'icon': 'img/bredband_50mbit.png',
			'price': 199, 
			'html':'Op til 50 Mbit download, 10 Mbit upload'
		},
		
		//TV
		{
			'slug': 'tv',
			'name': 'TV',
			'icon': 'img/tv.png',
			'price': 0, 
			'html':'<div class="myservice"><span class="servicename tv">TV</span><div class="serviceprice"><input type="text" placeholder="0"> kr.</div></div>'
		},
		{
			'slug': 'shop_4one',
			'name': '4ONE',
			'icon': 'img/tv_4one.png',
			'price': 499, 
			'html':'50 TV kanaler, op til 20 mbit, oprettelse 0 kr'
		},
		{
			'slug': 'shop_4more',
			'name': '4MORE',
			'icon': 'img/tv_4more.png',
			'price': 399, 
			'html':'28 TV kanaler, op til 20 mbit, oprettelse 0 kr'
		},
		{
			'slug': 'shop_4all',
			'name': '4ALL',
			'icon': 'img/tv_4all.png',
			'price': 299, 
			'html':'17 TV kanaler, op til 20 mbit, oprettelse 0 kr'
		},
		
		//TV bredbånd
		{
			'slug': 'tvbredband',
			'name': 'TV bredbånd',
			'icon': 'img/tvbredband.png',
			'price': 0, 
			'html':'<div class="myservice"><span class="servicename tvbredband">TV bredbånd</span><div class="serviceprice"><input type="text" placeholder="0"> kr.</div></div>'
		},
		{
			'slug': 'shop_4allmedbredband',
			'name': '4ALL med Bredbånd',
			'icon': 'img/tvbredband_50.png',
			'price': 499, 
			'html':'50 TV kanaler, op til 20 mbit, oprettelse 0 kr'
		},
		{
			'slug': 'shop_4moremedbredband',
			'name': '4MORE med Bredbånd',
			'icon': 'img/tvbredband_28.png',
			'price': 399, 
			'html':'28 TV kanaler, op til 20 mbit, oprettelse 0 kr'
		},
		{
			'slug': 'shop_4onemedbredband',
			'name': '4ONE med Bredbånd',
			'icon': 'img/tvbredband_17.png',
			'price': 299, 
			'html':'17 TV kanaler, op til 20 mbit, oprettelse 0 kr'
		},
		{
			'slug': 'shop_tilvalgkanal9',
			'name': 'Tilvalgskanaler',
			'icon': 'img/tilvalgskanaler9.png',
			'price': 9, 
			'html':'Tilvalgskanaler'
		},
		{
			'slug': 'shop_tilvalgkanal19',
			'name': 'Tilvalgskanaler',
			'icon': 'img/tilvalgskanaler19.png',
			'price': 19, 
			'html':'Tilvalgskanaler'
		},
		{
			'slug': 'shop_tvbredband',
			'name': 'Tilvalgskanaler',
			'icon': 'img/tilvalgskanaler29.png',
			'price': 29, 
			'html':'Tilvalgskanaler'
		},
		{
			'slug': 'shop_tvbredband',
			'name': 'Tilvalgskanaler',
			'icon': 'img/tilvalgskanaler39.png',
			'price': 39, 
			'html':'Tilvalgskanaler'
		},
		{
			'slug': 'shop_barnpakke',
			'name': 'Børnepakke',
			'icon': 'img/tvbredband_barnoghbo.png',
			'price': 69, 
			'html':'Alle de bedste kanaler for børn med kvalitetsunderholdning til både store og små. Du får desuden adgang til streaming tjenesten SF Børnenes Favorit'
		},
		{
			'slug': 'shop_cmorefilm',
			'name': 'C More Film',
			'icon': 'img/tvbredband_cmorefilm.png',
			'price': 99, 
			'html':'8 kanaler fra C More med kvalitetsfilm- og serier i alle generer. Et must, hvis du elsker film'
		},
		{
			'slug': 'shop_discchannel',
			'name': 'Discovery-pakke',
			'icon': 'img/tvbredband_discovery.png',
			'price': 59, 
			'html':'Denne pakke er til dig, der ikke kan få nok af vilde dyr, videnskab og historier om mennesker'
		},
		{
			'slug': 'shop_disney',
			'name': 'Disney-pakke',
			'icon': 'img/tvbredband_disney.png',
			'price': 49, 
			'html':'Få de ret Disney-kanaler og alt det bedste fra den magiske verden i en blanding af spillefilm, storfilm, klassikere og serier. OBS: Kan ikke kombineres med børnekanalen, der allerede indeholder de 3 kanaler'
		},
		{
			'slug': 'shop_hbopakke',
			'name': 'HBO-pakke',
			'icon': 'img/tvbredband_barnoghbo.png',
			'price': 69, 
			'html':'Med HBO-pakken får du adgang til HBO streaming tjenesten. Se alle de prisbelønnede tv-serier kun få timer efter premieren i USA.'
		},

		//services for current
		{
			'slug': 'services_spotify',
			'name':'Spotify',
			'icon':'img/spotify.png',
			'price': 0,
			'html' : '<div class="myservice"><span class="servicename spotify">Spotify</span><div class="serviceprice"><input type="text" placeholder="0"> kr.</div></div>'
		},
		{
			'slug': 'services_hbo',
			'name':'HBO',
			'icon':'img/hbo.png',
			'price': 0,
			'html' : '<div class="myservice"><span class="servicename services_hbo">HBO</span><div class="serviceprice"><input type="text" placeholder="0"> kr.</div></div>'
		},
		{
			'slug': 'services_storytell',
			'name':'storytell',
			'icon':'img/storytell.png',
			'price': 0,
			'html' : '<div class="myservice"><span class="servicename services_storytell">Storytell</span><div class="serviceprice"><input type="text" placeholder="0"> kr.</div></div>'
		},
		{
			'slug': 'services_zetland',
			'name':'Zetland',
			'icon':'img/zetland.png',
			'price': 0,
			'html' : '<div class="myservice"><span class="servicename services_storytell">Zetland</span><div class="serviceprice"><input type="text" placeholder="0"> kr.</div></div>'
		},
		// solution services
		{
			'slug': 'shop_spotify',
			'name':'Spotify Premium',
			'icon':'img/spotify.png',
			'price': 79,
			'html' : 'Verdens fedeste musiktjenest med adgang til millioner af numre'
		},
		{
			'slug': 'shop_hbo',
			'name':'HBO',
			'icon':'img/hbo.png',
			'price': 69,
			'html' : 'Direkte adgang til veredns bedste serier'
		},
		{
			'slug': 'shop_storytell',
			'name':'storytell',
			'icon':'img/storytell.png',
			'price': 79,
			'html' : 'Over 10.000 fantastiske lydbøger og e-bøger'
		},
		{
			'slug': 'shop_zetland',
			'name':'Zetland',
			'icon':'img/zetland.png',
			'price': 99,
			'html' : 'Zetland er en digital avis, der udkommer hver morgen'
		},
		{
			'slug': 'shop_teliaforsikring',
			'name':'Telia Forsikring',
			'icon':'img/forsikring.png',
			'price': 99,
			'html' : 'Dækker f.eks. Skærmbrug og væskeskade'
		},
		{
			'slug': 'shop_roamlikehomeeurope',
			'name':'Roam Like Home Europe',
			'icon':'img/roam.png',
			'price': 99,
			'html' : 'Tag dit abonnement med på ferie og tal og surf løs uden at betale ekstra. Gælder 37 europæiske lande'
		},
		{
			'slug': 'shop_teliatv',
			'name':'Telia TV',
			'icon':'img/film.png',
			'price': 99,
			'html' : 'Se TV på din smartphone, tablet og computer'
		},
		{
			'slug': 'shop_flipp',
			'name':'Flipp',
			'icon':'img/flipp.png',
			'price': 99,
			'html' : 'Få alle dine favoritmagasiner og -blade i én app'
		},
	];	
	


	// Icon Navigation Menus sliders

	// HIDE ALL MENUS FROM START
	function hideAllRightMenus(){
		// Right menu for current solution

		$('.currentServicemenu-hidden').hide();
		//All left menus for Solution 1+2
		$('.solutionMobilabonement-hidden').hide();
		$('.solutionMobilbredband-hidden').hide();
		$('.solutionBredband-hidden').hide();
		$('.solutionTvbredband-hidden').hide();
		$('.solutionTv-hidden').hide();
		$('.solutionServices-hidden').hide();
	}

	hideAllRightMenus();
	// Show current Right menu if service icon is clicked
	$('.servicesIconTrigger').click(function(){
		// show this menu
		$( "#rightnavup" ).trigger( "click" );
		$('.currentServicemenu-hidden').toggle('slide', {direction: 'left'}).hide();

		// hide these menus
		//$('#forside, #events, #nordic, #results, #other, #contact').hide();
	});


	//Show left menus on click
	$('#rightMenuTriggerMobilabonement').click(function(){
		hideAllRightMenus();
		
		$('.solutionMobilabonement-hidden').toggle('slide', {direction: 'left'}).hide()
		// $( "#rightnavup" ).trigger( "click" );
	});

	$('#rightMenuTriggerMobilbredband').click(function(){
		hideAllRightMenus();
		
		$('.solutionMobilbredband-hidden').toggle('slide', {direction: 'left'}).hide()
		// $( "#rightnavup" ).trigger( "click" );
	});

	$('#rightMenuTriggerBredband').click(function(){
		hideAllRightMenus();
		
		$('.solutionBredband-hidden').toggle('slide', {direction: 'left'}).hide()
		// $( "#rightnavup" ).trigger( "click" );
	});

	$('#rightMenuTriggerTv').click(function(){
		hideAllRightMenus();
		
		$('.solutionTv-hidden').toggle('slide', {direction: 'left'}).hide()
		// $( "#rightnavup" ).trigger( "click" );
	});

	$('#rightMenuTriggerTvbredband').click(function(){
		hideAllRightMenus();
		
		$('.solutionTvbredband-hidden').toggle('slide', {direction: 'left'}).hide()
		// $( "#rightnavup" ).trigger( "click" );
	});

	$('rightMenuTriggerServices').click(function(){
		hideAllRightMenus();
		
		$('.solutionServices-hidden').toggle('slide', {direction: 'left'}).hide()
		// $( "#rightnavup" ).trigger( "click" );
	});






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


	

	

	// http://stackoverflow.com/questions/29522309/jquery-ui-draggable-inside-slick-slider
	// Without this, you can't drag the icons from the menu
	// For that to work you need to unbind the dragstart event registered by slick slider
	// like followed, before binding the draggble to element
	$(function() {
    	$('*[draggable!=true]','.slick-track').unbind('dragstart');
    	$( ".serviceIcon img" ).draggable();
	  });

	// $(".serviceIcon img").on("draggable mouseenter mousedown",function(event){
	//     event.stopPropagation();
	// });

	// --------------------------------------------------------------------------------------

	// CIRCLE CONTENT

	function addPerson(){
		// Check the attribute if it's child or parrent
		var person = $(this).attr('id');

		var inputField = $(this).parent().children('input').val();
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
		'z-index': 1 })
		.draggable({ 
      		grid:[10,10],
      		containment: 'window',
			stack: ".personWrapper",
      	}).click(function(){
            if ( $(this).is('.ui-draggable-dragging') ) {
                  return;
            }
            var personName = $(this).find('p').text();
            var question = confirm("Vil du slette " + personName);
            if (question) {
            	$(this).remove();
            }
            
     	});
		


		$(this).parent().parent().parent(".circle").append(personWrapper);

		$(this).parent().children('input').val('');
	}


	// RUN the addPerson function when one of the buttons is clicked
	// $("#parrent").click(addPerson);
	$(document).on('click', "#parrent", addPerson);
	$(document).on('click', "#child", addPerson);
	// $("#child").click(addPerson);
	// PERSON FIGURE IS NOT CLICKABLE
	// $('.personIcon img').click(function(e){
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	alert("yes it works now");
	// });


var dragged = false;
var counterClones = 0;
	//Service icons dragable
	// Draggable element hidden outside container ->http://stackoverflow.com/questions/14155503/draggable-element-hidden-outside-container
	$('.serviceIcon img').draggable({ 
		opacity: 0.60,
		// revert: true,
		containment: 'window', // window // parrent
		// appendTo:'.circle',
		helper: function() {
		// makes a clone of the icons

		// console.log('dragged');
			dragged = true;
			// console.log($(this));
			counterClones++;
			$(this).attr('data-clone-num','clone'+counterClones);
            return $(this).clone().appendTo('.circle');


		},
		drag: function(){
			// set highlight here
		},
		stop: function(){
			
		},
		
	});

	
	

	// DROPPABLE CIRCLE AREA
	$('.circle').droppable({
		// if dragged out of the div, remove icon
		out: function (event, ui) {
			// delete icon when dragged out of circle
			// console.log(ui)
            var self = ui;
            ui.helper.off('mouseup').on('mouseup', function () {
                $(this).remove();
                self.draggable.remove();

                //delete 
                var serviceToRemove = $(this).data('clone-num');
                console.log(serviceToRemove)
                $(".myservice[data-clone-service='"+serviceToRemove+"']").remove();
                // alert("maybe ?");
            });

        },
        // When icon is drop from the icon navigation menu
		drop: function(event, ui) {
		    
			var service =$(ui.draggable).data('service');
			console.log($(ui.draggable));
			var newService='';
			for (var i = 0; i < currentMenu.length; i++) {
				if(currentMenu[i].slug == service){
					newService = currentMenu[i].html;
					console.log(newService);
				}
			}

			var targetBox = $('.pricebox.active').data('box');
			// Adding newservice if it has been dragged
			if(dragged == true){
				$('.'+targetBox+' .after_here').after(newService);
                $(".currentprice .myservice:first").attr('data-clone-service','clone'+counterClones);
				dragged = false;
			}
			// make sure not to duplicate icon when dragged in the circle
    		 if (!ui.draggable.hasClass("dropped")){
	             $(this).append(
	             	$(ui.draggable)
	             	.clone()
	             	.addClass("dropped")
	             	.draggable({stack: "img"})
	             	.css({
					position: "absolute", 
					left: ui.position.left, 
					top: ui.position.top,
			        })
	             )
         	}
         	var draggableId = ui.draggable.attr("id");
         	if (draggableId === 'other'){
         		$('#dialog').attr('title', 'Tilføj andet service')
         		.html('<input type="text" placeholder="Navn" /><input type="number" placeholder="Beløb" /><input type="radio" />Pr. MD <input type="radio" />Engangsbeløb')
	  			.dialog({
	  				buttons: {
	  				'Tilføj': function(){
	          		

	          		if (true) {
	          			$(this).dialog('close');
	          		}

	  			},
	  		}, closeOnEscape: true,
	  				draggable: false,
	  				resizable: false,
	  				show: 'fade',
	          		hide: 'fade',
	  				modal: true,  // you can't click anywhere else before you close the modal box
	  				//position: 'top', // center is default // you can also pass it an array [100, 100] which is x and y
			        dialogClass: 'sendMailDialog',
			        width: 490,
			        height: 305,
			        'z-index': 999999
	  			});
         	}
         	// if (ui.draggable.src('img/andet.png')) {alert('yes this is the other ICON')}

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
	$("#arrow").click(function() {
	  	$('.currentprice').toggle('slide', {direction: 'down'});
	  	var src = $('#arrow').attr('src');
	  	

	  	// if the arrow of the event is pointing up change it to down and opposite
	  	 var src = ($("#arrow").attr('src') === 'img/uparrow.jpg')
            ? 'img/downarrow.jpg'
            : 'img/uparrow.jpg';
         $("#arrow").attr('src', src);
	});

	//$(".serviceprice input").on("change paste keyup", function() {
	$(document).on("change paste keyup", ".serviceprice input", function() {
		var total=0;
		$(".serviceprice input").each(function(){
			if($(this).val() != ''){
				total += parseInt($(this).val());
			}
		});
		$('.pricebox.active .pricetext #currentPriceValue').html(total);

	});
	
	


	// Settingsbox
	$("#settingsBtn").click(function() {
	  	$('.SettingsBox').toggle('slide', {direction: 'down'});
	});

	//Add Solution

	var solution = 0;
	$('#addSolution').click(function(){
		
	    	solution++;
	    if(solution < 3){
			$('#dialog').attr('title', 'Tilføj Løsning')
	  			.text("Tilføj løsning")
	  			//.html('<h1>Kopier løsning 1?</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.</p>')
	  			.dialog({
	  				buttons: {// 'JA': function(){

	  					// if ($(".price-solution1")[0]) {
	  					// 	alert("it's alive");
	  					// }else{
	  					// 	alert("it's dead");
	  					// }

	  					// $(this).dialog('close');
	  				//}, 
	  				'tilføj ny løsning': function(){
          			
	          			//Change active bottom tab
	          			$('.pricebox').removeClass('active');

	          			// Add the menu in footer
	          			var selector = $('.main-footer .row .SettingsBox');
	          			var priceBox = $('<div class="pricebox active" data-box="newCircle'+ solution +'"></div>');
	          			var priceText = $('<div class="pricetext">Løsning ' + solution + ' <span class="kroner">0</span> KR/MD</div>');
	          			var arrow = $('<img id="arrow'+ solution +'" data-arrow="'+solution+'" class="arrowOpenSolution" src="img/uparrow.jpg">');
	          			priceText.appendTo(priceBox);
	          			arrow.appendTo(priceBox);
	          			priceBox.insertBefore(selector);

	          			//adding big circle
	          			$('.circles-container .circle').hide();
	          			$('.circles-container').append('<div class="circle circle'+ solution +' new-circle img-responsive draggable-circle" data-circle="newCircle'+ solution +'"><div class="content"><div class="contentInput"> <input id="nameField" type="text" placeholder="Navn"> <img id="parrent" src="img/voksen.png" alt=""><img id="child" src="img/barn.png" alt=""></div></div> </div>');
	          			reStartDraggable(solution);


	          			//add the slide
	          			var slide = $('<div class="col-sm-3 price-solution'+ solution +' newCircle'+ solution +'"></div>');
	          			var menuheader = $('<div class="menuheader after_here"></div>');
	          			var h2 = $('<h2>Månedlig ydelse</h2><hr>');
	          			h2.appendTo(menuheader)
	          			menuheader.appendTo(slide)
	          			slide.insertAfter('.currentprice');

	          			//add the circle for slider
	          			var circle = $('<div class="circle'+solution+' img-responsive"></div>');
          				var content = $('<div class="content"></div>');
          				var contentInput = $('<div class="contentInput"></div>');
                        var buttons = $('<input id="nameField" type="text" placeholder="Navn"><img id="parrent" src="img/voksen.png" alt=""><img id="child" src="img/barn.png">');
                        
                        
                        contentInput.appendTo(content);
                        content.appendTo(circle);
                        // $('.circle').hide();
                        circle.insertAfter('.dialog');

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
			        height: 305,
			        //'z-index': 999999
	  		});

		}else{
			alert('Beklager, du kan ikke lave flere løsninger');
			$(this).dialog('close');
		}
	});

	//add event listner for the new created solution  arrowOpenSolution
	$(document).on('click', '.arrowOpenSolution', function() {

		var arrowID = $(this).data('arrow');

		// alert('.price-solution' + solution);
	  	$('.price-solution' + arrowID).toggle('slide', {direction: 'down'});

	  	// if the arrow of the event is pointing up change it to down and opposite
	  	var src = ($("#arrow" + arrowID).attr('src') === 'img/uparrow.jpg')
	        ? 'img/downarrow.jpg'
	        : 'img/uparrow.jpg';
	     $("#arrow"+ arrowID).attr('src', src);
  	});

	//clicking bottom tabs
	$(document).on('click', '.pricebox', function() {

		var target = $(this).data('box');

		$(".pricebox").removeClass('active');
	  	$(".pricebox[data-box='"+ target+"']").addClass('active');

	  	$(".circle").hide();
	  	$(".circle[data-circle='"+ target+"']").show();
  	});



	function reStartDraggable(newTarget){

		console.log(newTarget);

		$('.serviceIcon img').draggable({ 
			opacity: 0.60,
			// revert: true,
			containment: 'window', // window // parrent
			// appendTo:'.circle',
			helper: function() {
			// makes a clone of the icons

			// console.log('dragged');
				dragged = true;
				// console.log($(this));
				counterClones++;
				$(this).attr('data-clone-num','clone'+counterClones);
	            return $(this).clone().appendTo('.circle'+newTarget);


			},
			drag: function(){
				// set highlight here
			},
			stop: function(){
				
			},
			
		});


		$('.circle'+newTarget).droppable({
		// if dragged out of the div, remove icon
		out: function (event, ui) {
			// delete icon when dragged out of circle
			// console.log(ui)
            var self = ui;
            ui.helper.off('mouseup').on('mouseup', function () {
                $(this).remove();
                self.draggable.remove();

                //delete 
                var serviceToRemove = $(this).data('clone-num');
                console.log(serviceToRemove)
                $(".myservice[data-clone-service='"+serviceToRemove+"']").remove();
                // alert("maybe ?");
            });

        },
        // When icon is drop from the icon navigation menu
		drop: function(event, ui) {
		    
			var service = $(ui.draggable).data('service');
			console.log($(ui.draggable));
			var newService='';
			for (var i = 0; i < currentMenu.length; i++) {
				if(currentMenu[i].slug == service){
					newService = currentMenu[i].html;
					console.log(newService);
				}
			}

			var targetBox = $('.pricebox.active').data('box');
			// Adding newservice if it has been dragged
			if(dragged == true){
				console.log('we are here');
				console.log(targetBox);
				$('.'+targetBox+' .after_here').after(newService);
                $(".currentprice .myservice:first").attr('data-clone-service','clone'+counterClones);
				dragged = false;
			}
			// make sure not to duplicate icon when dragged in the circle
    		 if (!ui.draggable.hasClass("dropped")){
	             $(this).append(
	             	$(ui.draggable)
	             	.clone()
	             	.addClass("dropped")
	             	.draggable({stack: "img"})
	             	.css({
					position: "absolute", 
					left: ui.position.left, 
					top: ui.position.top,
			        })
	             )
         	}
         	var draggableId = ui.draggable.attr("id");
         	if (draggableId === 'other'){
         		$('#dialog').attr('title', 'Tilføj andet service')
         		.html('<input type="text" placeholder="Navn" /><input type="number" placeholder="Beløb" /><input type="radio" />Pr. MD <input type="radio" />Engangsbeløb')
	  			.dialog({
	  				buttons: {
	  				'Tilføj': function(){
	          		

	          		if (true) {
	          			$(this).dialog('close');
	          		}

	  			},
	  		}, closeOnEscape: true,
	  				draggable: false,
	  				resizable: false,
	  				show: 'fade',
	          		hide: 'fade',
	  				modal: true,  // you can't click anywhere else before you close the modal box
	  				//position: 'top', // center is default // you can also pass it an array [100, 100] which is x and y
			        dialogClass: 'sendMailDialog',
			        width: 490,
			        height: 305,
			        'z-index': 999999
	  			});
         	}
         	// if (ui.draggable.src('img/andet.png')) {alert('yes this is the other ICON')}

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
	}


}); // ready



