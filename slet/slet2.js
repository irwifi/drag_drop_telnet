// STAY INSIDE OF CIRCLE MATH

drag: function(e, d) {
  maxMove = 230;
  maxMoveSqr = 44*44;
  l = d.position.left;
  t = d.position.top;
  len = l*l+t*t;
  if (maxMoveSqr < len) {
    d.position.left = l / Math.sqrt(len) * maxMove;
    d.position.top = t / Math.sqrt(len) * maxMove;      
  }
}





// Event to initiate drag, include touchstart events
	$('.serviceIcon').on('mousedown', function(e){

	 $('.serviceIcon').draggable({
	 	//cursor: 'pointer', // crosshair
		opacity: 0.60,
		// revert: true,
		// revertDuration: 1000,
		//containment: 'document', // window // parrent
	 });

	 // Event to end drag, may want to include touchend events
	 $(this).one('mouseup', function(e){

	  $(this).off('mousemove');
	  // Drag stop logic
	  // ...

	 }).on('mousemove', function(e){

	  // Logic for dragging, can get mouse position
	  // will probably want to throttle
	  // possibly include touchmove events also
	  console.log(e.pageX);

	 });

	});



