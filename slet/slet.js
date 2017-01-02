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
    		 if (!ui.draggable.hasClass("dropped"));
             $(this).append(
             	$(ui.draggable)
             	.clone()
             	.addClass("dropped")
             	.draggable()
             );