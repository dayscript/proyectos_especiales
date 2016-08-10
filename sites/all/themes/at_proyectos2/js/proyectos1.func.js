(function ($, Drupal, window, document, undefined) {
	$(document).ready(function(){
		
		if( $('body').hasClass('page-inicio') ){
			$.backstretch(
				"http://www.banrepcultural.org/durero/sites/default/files/fondos/Durero_fondos_07.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else if( $('body').hasClass('page-taxonomy-term-18')){
			$.backstretch(
				"http://www.banrepcultural.org/durero/sites/default/files/fondos/Durero_fondos_05.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else if( $('body').hasClass('page-taxonomy-term-4')|| $('body').hasClass('section-temas') ){
			$.backstretch(
				"http://www.banrepcultural.org/durero/sites/default/files/fondos/Durero_fondos_06.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else if( $('body').hasClass('page-taxonomy-term-180') ){
			$.backstretch(
				"http://www.banrepcultural.org/durero/sites/default/files/fondos/Durero_fondos_04.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else{
			$.backstretch(
				"http://www.banrepcultural.org/durero/sites/default/files/fondos/Durero_fondos_02.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}
		
	});// fin document ready
})(jQuery, Drupal, this, this.document);