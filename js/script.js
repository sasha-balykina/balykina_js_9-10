$(document).ready(function() {
        $( '.dropdown-menu' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').slideUp(200);
            }
        );

$(function(){
	$("#container").clickCarousel({margin: 10});	
});

});


