(function ($, Drupal, window, document, undefined) { 
	$(document).ready(function(){
		
		if( $('body').hasClass('page-inicio') ){
			$.backstretch(
				"http://proyectos.banrepcultural.org/sites/default/files/fondos/Grippo_Fondo_01.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else if( $('body').hasClass('section-exposicion-vg')){
			$.backstretch(
				"http://proyectos.banrepcultural.org/sites/default/files/fondos/Grippo_Fondo_02.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else if( $('body').hasClass('section-quien-es-victor-grippo')){
			$.backstretch(
				"http://proyectos.banrepcultural.org/sites/default/files/fondos/Grippo_Fondo_03.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else if( $('body').hasClass('section-textos-de-vg') ){
			$.backstretch(
				"http://proyectos.banrepcultural.org/sites/default/files/fondos/Grippo_Fondo_03.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else if( $('body').hasClass('section-prensa-vg') ){
			$.backstretch(
				"http://proyectos.banrepcultural.org/sites/default/files/fondos/Grippo_Fondo_05.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else if( $('body').hasClass('section-participacion-vg') ){
			$.backstretch(
				"http://proyectos.banrepcultural.org/sites/default/files/fondos/Grippo_Fondo_05.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else if( $('body').hasClass('section-programe-su-visita') ){
			$.backstretch(
				"http://proyectos.banrepcultural.org/sites/default/files/fondos/Grippo_Fondo_04.jpg",
				{centeredX: true},
				{alignY: top}
			);
		}else{
			$.backstretch(
				"http://proyectos.banrepcultural.org/sites/default/files/fondos/Grippo_Fondo_01.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}
		
	});// fin document ready
	
// Fondo Hernan díaz	
$(document).ready(function(){
		
		if( $('body').hasClass('domain-proyectos-banrepcultural-org-hernan-diaz') || $('body').hasClass('site-name-hernan-diaz') ){
			$.backstretch(
				"http://proyectos.banrepcultural.org/sites/default/files/fondos/fondo_hdiaz.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else if($('body').hasClass('domain-proyectos-banrepcultural-org-hernan-diaz') || $('body').hasClass('site-name-hernan-diaz')) {
			$.backstretch(
				"http://proyectos.banrepcultural.org/sites/default/files/fondos/fondo_hdiaz.jpg",
				{centeredX: true},
				{alignY: top}
			);	
			
		}
		
	});// fin document ready
	
})(jQuery, Drupal, this, this.document);
