(function ($, Drupal, window, document, undefined) {
	$(document).ready(function(){
		
		if( $('body').hasClass('page-inicio') ){
			$.backstretch(
				"http://www.banrepcultural.org/sady-gonzalez/sites/default/files/fondos/sady_inicio.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else if( $('body').hasClass('page-exposicion') ){
			$.backstretch(
				"http://www.banrepcultural.org/sady-gonzalez/sites/default/files/fondos/sady_bogotazo.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else if( $('body').hasClass('page-node-6') || $('body').hasClass('page-node-10') || $('body').hasClass('page-node-114') || $('body').hasClass('page-node-116')){
			$.backstretch(
				"http://www.banrepcultural.org/sady-gonzalez/sites/default/files/fondos/sady_sobreSady.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else if( $('body').hasClass('page-programacion') || $('body').hasClass('section-exposicion') ){
			$.backstretch(
				"http://www.banrepcultural.org/sady-gonzalez/sites/default/files/fondos/sady_participacion.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else if( $('body').hasClass('page-prensa') || $('body').hasClass('section-kit-de-prensa') ){
			$.backstretch(
				"http://www.banrepcultural.org/sady-gonzalez/sites/default/files/fondos/sady_prensa.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}else{
			$.backstretch(
				"http://www.banrepcultural.org/sady-gonzalez/sites/default/files/fondos/sady_default.jpg",
				{centeredX: true},
				{centeredY: true}
			);
		}
		
	});// fin document ready
})(jQuery, Drupal, this, this.document);


(function ($, Drupal, window, document, undefined) {
	$(document).ready(function(){  	
		var loc = window.location.pathname;
		var res = loc.match(/sady-gonzalez/);
		if(/sady-gonzalez/.test(loc)) {
			$("#main-content").css('overflow','scroll');
			$("#main-content").css('height','415px');
		}
	});
})(jQuery, Drupal, this, this.document);