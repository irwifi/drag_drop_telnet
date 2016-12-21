$(document).ready(function(){

$( "span" ).click(function() {

  $( "#toggle" ).slideToggle( "slow", function(){
  	console.log("whhoop!");
  });
});


}); // ready



