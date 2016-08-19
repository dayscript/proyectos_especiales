(function ($, Drupal, window, document, undefined) {
    $(document).ready(function(){
    	// Open and close footer
    	var up = false;
        $( "#close-open" ).click(function() {
        	if( up == false ){
				alternate();
				$(this).attr("src", "/proyectos.banrepcultural.org/sites/default/files/topicon3.png");
        	}else{
        		alternate();
        		$(this).attr("src", "/proyectos.banrepcultural.org/sites/default/files/topicon2.png");
        	}
		});
        var alternate = function(){
        	if( up == false ){
        		$( '#footer-wrapper2' ).animate({bottom:0}, 400);
				$( '#footer-wrapper' ).animate({bottom:215}, 400);
        		up = true;
        	}else{
        		$( '#footer-wrapper2' ).animate({bottom:-170}, 400);
				$( '#footer-wrapper' ).animate({bottom:45}, 400);
        		up = false;
        	}
        };
        // add accordion funcion to index page
        if( $('.view-index-accorion') ){
        	$('.view-index-accorion').find('.view-content').each(function(){
        		$(this).attr("id", "view-accordion");
        	});
        }
        $('#view-accordion').accordion({ 
        	header: "h3",
        	autoHeight: false,
        	collapsible: true,
        	navigation: true 
        });
        $('.carousel-next').click(function(){
        	var mleft = $('#field-slideshow-1-pager').css();
        	alert( mleft );
        	$('#field-slideshow-1-pager').css('margin-left', (mleft - 20) + "px");
        });
        $('.carousel-prev').click(function(){
        	var mleft = $('#field-slideshow-1-pager').css();
        	$('#field-slideshow-1-pager').css('margin-left', (mleft + 20) + "px");
        });
        
    });// End ready
})(jQuery, Drupal, this, this.document);