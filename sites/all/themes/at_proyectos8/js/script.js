
(function ($, Drupal, window, document, undefined) {
	$(document).ready(function($) {
		if ($(window).width() >= 1000) {
	    $("#header .logo-contexto img").removeAttr("src"); 
	  }
	});
})(jQuery, Drupal, this, this.document);