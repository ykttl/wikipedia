(function() {

var api = 'https://en.wikipedia.org/w/api.php?';
var action = '&action=opensearch';
var search = '';
var format = '&format=json';

$(function(){
	$('#btn').click(function(){
		$('#result').empty();
		console.log("btn oshita");
		var search = '&search=' + $('#keyword').val();
		$.ajax({
			url: api + action + search + format ,
			data: {
				 origin: '*',
			}
		
	    })

		.done (function(data) {							
			if ( data[1] == 0 ) {
				$('#result').append('<p>no result :( </p>');
			} 
			else {
			 for ( var i = 0; i < data[1].length; i++) {				
				$('#result').append('<li>'+'<h2>' +data[1][i]+'</h2>'+'<p>' +data[2][i]+'</p>'+'<a href="'+data[3][i]+'">read more</a>'+'</li>');
			} 
		}
				
	  }) // end of .done

}); // end of #btn click function


}) // end of jquery

})();



