/**
 * 
 */

$(document).ready(function() {

	$('#accionar').on('click',function(){
		 console.log ($('#numUser').val())
		var numUser= $('#numUser').val()
		$.getJSON( "https://randomuser.me/api/?results="+numUser, function( json ) {
			$.each(json.results, function(index) {
			var elem = $('#card').clone().removeAttr("id");
			$(elem).attr('id','#'+index)
			$(elem).css("height","380px")
			$(elem).find("img").attr("src",json.results[index].picture.large)
			var nombreFin =json.results[index].name.first +" "+ json.results[index].name.last
			$(elem).find('.title a').text(nombreFin.toUpperCase())
			$(elem).find(".desc:eq(0)").text(json.results[index].name.first.toUpperCase() +" "+ json.results[index].name.last.toUpperCase())
			$(elem).find(".desc:eq(1)").html(json.results[index].phone +" "+ json.results[index].nat)		
			$(elem).find(".desc:eq(2)").html(json.results[index].email)		
			$(elem).find(".bottom").remove()
			$(elem).on( "click", function() {
				  $( this ).find('.title a').css("font-weight","bold")
			});
			$(elem).appendTo('#listado').show();
			})
		});		
	});

/*	$( "#listado" ).on( "click", ".hovercard", function() {
		  $( this ).find('.title a').css("font-weight","bold")
		});
	*/
})