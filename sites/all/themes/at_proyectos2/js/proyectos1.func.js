(function ($, Drupal, window, document, undefined) {
	$(document).ready(function(){
		var path = window.location.pathname;
		var pathArray = [];
		var pathArray = path.split("/");
		console.log(pathArray);
	if(typeof pathArray[1] == "string" && pathArray[1] == "durero"){	
		if(typeof pathArray[3] == 'string' && UrlExists('urlImage')){
				urlImage = "http://proyectos.banrepcultural.org/sites/default/files/fondos/"+pathArray[1]+"/"+ pathArray[3] +".jpg",
				console.log(pathArray[3]);
		}
		else if(typeof pathArray[1] == "string" &&  typeof pathArray[3] == "undefined" || pathArray[3] == "portugues" ){
				urlImage = "http://proyectos.banrepcultural.org/sites/default/files/fondos/"+pathArray[1]+"/inicio.jpg",
				console.log(pathArray[3]);
		}
		else{
			urlImage = "http://proyectos.banrepcultural.org/sites/default/files/fondos/durero/default.jpg";
		}

			$.backstretch(
				urlImage,
				{centeredX: true},
				{centeredY: true}
			);
	}
	if(typeof pathArray[1] == "string" && pathArray[1] == "william-kentridge"){

		if(typeof pathArray[3] == 'string' && pathArray[3] =='alberto-durero'){
				urlImage = "http://proyectos.banrepcultural.org/sites/default/files/fondos/"+pathArray[1]+"/"+ pathArray[3] +".jpg",
				console.log(pathArray[3]);
		} 

		if(typeof pathArray[3] == 'string' && pathArray[3] =='seccion'){
				urlImage = "http://proyectos.banrepcultural.org/sites/default/files/fondos/"+pathArray[1]+"/"+ pathArray[3] +".jpg",
				console.log(pathArray[3]);
		} 
		else if( typeof pathArray[1] == "string" &&  typeof pathArray[3] == "undefined" || pathArray[3] == "portugues" ){
				urlImage = "http://proyectos.banrepcultural.org/sites/default/files/fondos/"+pathArray[1]+"/inicio.jpg",
				console.log(pathArray[3]);
		}
		else if(pathArray[3] !='alberto-durero' && pathArray[3] !='seccion'){
			urlImage = "http://proyectos.banrepcultural.org/sites/default/files/fondos/"+pathArray[1]+"/alberto-durero.jpg",
			console.log(pathArray[3]+'asd');
		}

			$.backstretch(
					urlImage,
					{centeredX: true},
					{centeredY: true}
				);
	}
	if( $('body').hasClass('site-name-piel-de-bahareque')){
		$.backstretch(
			"/sites/default/files/fondos/arquitectura-bahareque-manizales/inicio.jpg",
			{centeredX: true},
			{centeredY: true}
		);
	}
	if( $('body').hasClass('site-name-museo-del-oro-nariño')){
		$.backstretch(
			"http://proyectos.banrepcultural.org/sites/default/files/fondos/museo-del-oro-nariño/MON-fondo02.jpg",
			{centeredX: true},
			{centeredY: true}
		);
	}
	function UrlExists(url){
	    var http = new XMLHttpRequest();
	    http.open('HEAD', url, false);
	    http.send();
	    return http.status!=404;
	}		
	});// fin document ready
})(jQuery, Drupal, this, this.document);