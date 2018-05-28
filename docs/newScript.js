var wikiViewer ={

	callApi: function() {
		$.ajax({
			url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + $("#keyword").val() + "&format=json&origin=*",
			dataType:'json',
			type:'GET',
		})
		.done (function(data){
			if ( data[1] == 0 ) {
			   $('#result').append('<p>no result :( </p>');
			} 
			else {
			  for ( var i = 0; i < data[1].length; i++) {				
			  $('#result').append('<li>'+'<h2>' +data[1][i]+'</h2>'+'<p>' +data[2][i]+'</p>'+'<a href="'+data[3][i]+'">read more</a>'+'</li>');
			 } 
		   }
		})
	 },

	firstPage: function(){
		$('#keyword').val('blue');
		wikiViewer.callApi();
	},
}


$(function(){

	wikiViewer.firstPage(); 

	$('#btn').click(function(){
		$('#result').empty();
		wikiViewer.callApi();
	});

});