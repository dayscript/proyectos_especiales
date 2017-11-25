(function ($, Drupal, window, document, undefined) {
	$(document).ready(function() {
		
		var path = window.location.pathname;
		var pathArray = [];
		var pathArray = path.split("/");
		console.log(pathArray);
		if(typeof pathArray[1] == "string" && pathArray[1] == "museo-etnografico") {	
			if(typeof pathArray[3] == 'string'){
				urlImage = "http://proyectos.banrepcultural.org/sites/default/files/fondos/"+pathArray[1]+"/"+ pathArray[3] +".jpg",
				console.log(pathArray[3]);
			}
			else if( typeof pathArray[1] == "string" &&  typeof pathArray[3] == "undefined" || pathArray[3] == "portugues" ) {
				urlImage = "http://proyectos.banrepcultural.org/sites/default/files/fondos/"+pathArray[1]+"/inicio-museo-etnografico.jpg",
				console.log(pathArray[3]);
			}

			$.backstretch(
				urlImage,
				{centeredX: true},
				{centeredY: true}
			);
		}

		if($('body').hasClass('domain-proyectos-banrepcultural-org-asamblea-nacional-constituyente')) {
			if($('body').hasClass('section-contexto-historico')) {
				$.backstretch(
					"http://proyectos.banrepcultural.org/asamblea-nacional-constituyente/sites/default/files/fondos/asamblea-nacional/contexto_fondo_asamblea.jpg",
					{centeredX: true},
					{centeredY: true}
				);
			}else  if($('body').hasClass('section-palabras')) {
				$.backstretch(
					"http://proyectos.banrepcultural.org/asamblea-nacional-constituyente/sites/default/files/fondos/asamblea-nacional/palabras_fondo.jpg",
					{centeredX: true},
					{centeredY: true}
				);
			}
			else  if($('body').hasClass('section-texto-catalogo')) {
				$.backstretch(
					"http://proyectos.banrepcultural.org/asamblea-nacional-constituyente/sites/default/files/fondos/asamblea-nacional/textos_fondo.jpg",
					{centeredX: true},
					{centeredY: true}
				);
			}
			else  if($('body').hasClass('section-album')) {
				$.backstretch(
					"http://proyectos.banrepcultural.org/asamblea-nacional-constituyente/sites/default/files/fondos/asamblea-nacional/album_beatrizGonzales_fondo.jpg",
					{centeredX: true},
					{centeredY: true}
				);
			} else  {
				$.backstretch(
					"http://proyectos.banrepcultural.org/asamblea-nacional-constituyente/sites/default/files/fondos/asamblea-nacional/Inicio_fondo.jpg",
					{centeredX: true},
					{centeredY: true}
				);
			}
		}
		
	});// fin document ready
	
})(jQuery, Drupal, this, this.document);


